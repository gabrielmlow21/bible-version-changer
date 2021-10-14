const darbyValue = 166;
const louisSegondValue = 44;
const martinValue = 164;
const segond21Value = 163;

const martinVerses = [
    "1 CORINTHIENS 5:11",
    "1 CORINTHIENS 5:12",
    "1 CORINTHIENS 5:13",
    "JÉRÉMIE 30:19",
    "JÉRÉMIE 30:20",
    "JÉRÉMIE 30:21",
    "JÉRÉMIE 30:24",
    "LUC 15:7",
    "MATTHIEU 22:37",
    "MATTHIEU 22:39",
    "TITE 3:10",
    "ROMAINS 9:20",
    "ROMAINS 9:21"
]

const segond21Veses = [
    "1 PIERRE 3:4",
    "ESAÏE 3:16",
    "ESAÏE 3:17",
    "ESAÏE 3:18",
    "ESAÏE 3:19",
    "ESAÏE 3:20",
    "ESAÏE 3:21",
    "ESAÏE 3:22",
    "ESAÏE 3:23",
    "ESAÏE 3:24",
    "JÉRÉMIE 4:30"
]

const updatePanel = document.getElementsByClassName("footer")[0];
const btnChangeImage = updatePanel.children[2];
const btnEl = document.createElement('button');
btnEl.innerHTML = "Activate Auto-Changer (Click to start)";
btnEl.style.marginTop = "23px"
btnEl.style.marginLeft = "10px";
btnChangeImage.style.width = "";
updatePanel.appendChild(btnEl);

btnEl.onclick = function(e) {
    e.preventDefault();

    if (btnEl.innerHTML === "Activate Auto-Changer (Click to start)") {
        btnEl.innerHTML = "Auto-Changer Running (Click to stop)";
        var intervalId = window.setInterval(function() {
            let bibleValue;
            const currentVerse = document.getElementById('pVerse').innerText;
            if (martinVerses.includes(currentVerse)) {
                bibleValue = martinValue;
            } else if (martinVerses.includes(segond21Veses)) {
                bibleValue = segond21Value;
            } else {
                bibleValue = darbyValue;
            }
            document.getElementById('ddlTranslations').value = bibleValue;
            if (!(document.getElementById('chkMirror').checked)) {
                document.getElementById('chkMirror').click();
            }
        }, 1000);
    } else {
        btnEl.innerHTML = "Activate Auto-Changer (Click to start)";
    }
}


