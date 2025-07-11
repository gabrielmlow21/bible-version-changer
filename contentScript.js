const BibleVersion = Object.freeze({
  "LOUIS SEGOND 1910": "1",
  "MARTIN 1744": "2",
});

const SHEET_ID = "14c2QPKxdbndheLMheu37LzJGvO0DH3uT2lb11f8nhsg";
const SHEET_GID = "507350655";

const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${SHEET_GID}`;
let spreadsheetVerses = {};
let currentVerse = "";
let verse = "";

fetch(url)
  .then((response) => response.text())
  .then((data) => {
    let json = data.slice(47, -2);
    let obj = JSON.parse(json);
    let rows = obj.table.rows;

    // start from second row
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i].c;
      spreadsheetVerses[row[0].v] = row[1].v;
    }
  })
  .catch((error) => console.error("Error:", error));

window.setInterval(function () {
  const DARBY_VALUE = window.location.hostname.includes("bible.mcgi.app")
    ? 149
    : 166;
  const LOUIS_SEGOND_VALUE = window.location.hostname.includes("bible.mcgi.app")
    ? 161
    : 44;
  const MARTIN_VALUE = window.location.hostname.includes("bible.mcgi.app")
    ? DARBY_VALUE
    : 164; // Martin does not exist on MCGI Bible app yet

  const verseElement = window.location.hostname.includes("bible.mcgi.app")
    ? document.getElementById("title")
    : document.getElementById("pVerse");

  const bibleVersionDropdownElement = window.location.hostname.includes(
    "bible.mcgi.app"
  )
    ? document.getElementById("bookVersion")
    : document.getElementById("ddlTranslations");

  const currentVerse = verseElement.innerText;

  if (verse !== currentVerse) {
    verse = currentVerse;

    console.log("Current verse:", verse);
    console.log(currentVerse in spreadsheetVerses);

    if (currentVerse in spreadsheetVerses) {
      switch (spreadsheetVerses[currentVerse]) {
        case BibleVersion["LOUIS SEGOND 1910"]:
          bibleVersionDropdownElement.value = LOUIS_SEGOND_VALUE;
          break;
        case BibleVersion["MARTIN 1744"]:
          bibleVersionDropdownElement.value = MARTIN_VALUE;
          break;
        default:
          bibleVersionDropdownElement.value = DARBY_VALUE;
      }
    } else {
      bibleVersionDropdownElement.value = DARBY_VALUE;
    }
  }
}, 1000);
