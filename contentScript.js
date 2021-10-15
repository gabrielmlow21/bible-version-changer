const darbyValue = 166;
const louisSegondValue = 44;
const martinValue = 164;
const segond21Value = 163;

const martinVerses = [
    "1 CORINTHIENS 7:4",
    "1 CORINTHIENS 7:5",
    "1 CORINTHIENS 7:36",
    "1 CORINTHIENS 7:37",
    "1 CORINTHIENS 7:38",
    "ACTES 20:28",
    "ESDRAS 7:23",
    "GENÈSE 2:22",
    "HÉBREUX 3:1",
    "JÉRÉMIE 18:12",
    "ROMAINS 1:17",
]

const segond21Veses = [
    "JEAN 1:18"
]

const louisSegondVerses = [
    "1 CORINTHIENS 1:1",
    "1 CORINTHIENS 1:2",
    "1 CORINTHIENS 3:9",
    "1 CORINTHIENS 4:6",
    "1 CORINTHIENS 6:20",
    "1 CORINTHIENS 10:11",
    "1 CORINTHIENS 10:13",
    "1 CORINTHIENS 10:32",
    "1 CORINTHIENS 12:13",
    "1 CORINTHIENS 12:28",
    "1 CORINTHIENS 14:19",
    "1 CORINTHIENS 14:33",
    "1 CORINTHIENS 15:9",
    "1 CORINTHIENS 15:10",
    "1 JEAN 5:16",
    "1 PIERRE 5:7",
    "1 THESSALONICIENS 2:4",
    "1 THESSALONICIENS 2:14",
    "1 TIMOTHÉE 3:5",
    "1 TIMOTHÉE 3:15",
    "1 TIMOTHÉE 4:6",
    "1 TIMOTHÉE 5:16",
    "2 CORINTHIENS 1:1",
    "2 CORINTHIENS 8:3",
    "2 CORINTHIENS 9:7",
    "2 CORINTHIENS 11:28",
    "ACTES 7:38",
    "ACTES 8:1",
    "ACTES 11:26",
    "ACTES 13:39",
    "ACTES 22:16",
    "APOCALYPSE 1:20",
    "APOCALYPSE 6:8",
    "APOCALYPSE 22:16",
    "COLOSSIENS 1:18",
    "COLOSSIENS 1:24",
    "COLOSSIENS 2:2",
    "COLOSSIENS 2:3",
    "COLOSSIENS 2:9",
    "COLOSSIENS 3:15",
    "COLOSSIENS 3:16",
    "ÉPHÉSIENS 1:22",
    "ÉPHÉSIENS 3:10",
    "ÉPHÉSIENS 3:11",
    "ÉPHÉSIENS 5:23",
    "ÉPHÉSIENS 5:24",
    "ÉPHÉSIENS 5:25",
    "ÉPHÉSIENS 5:32",
    "ESAÏE 24:15",
    "EXODE 15:2",
    "GALATES 1:13",
    "GALATES 1:14",
    "GALATES 1:22",
    "HÉBREUX 3:6",
    "HÉBREUX 10:24",
    "HÉBREUX 10:25",
    "JACQUES 1:27",
    "JACQUES 4:7",
    "JACQUES 4:8",
    "JEAN 13:35",
    "JEAN 15:3",
    "JEAN 17:11",
    "LUC 6:45",
    "LUC 11:41",
    "MATTHIEU 10:29",
    "MATTHIEU 16:18",
    "MATTHIEU 28:19",
    "MATTHIEU 28:20",
    "PHILIPPIENS 1:27",
    "PHILIPPIENS 3:13",
    "PHILIPPIENS 3:14",
    "PHILIPPIENS 4:6",
    "PHILIPPIENS 4:7",
    "PROVERBES 8:29",
    "PSAUMES 50:23",
    "PSAUMES 68:18",
    "ROMAINS 7:2",
    "ROMAINS 10:17",
    "ROMAINS 12:1",
    "ROMAINS 12:9",
    "ROMAINS 16:16",
    "TITE 1:7",
    "TITE 1:8",
    "TITE 1:9"
]


const updatePanel = document.getElementsByClassName("footer")[0];
const btnChangeImage = updatePanel.children[2];
const btnEl = document.createElement('button');
btnEl.innerHTML = "Activate Auto-Changer (Click to start)";
btnEl.style.marginTop = "23px"
btnEl.style.marginLeft = "10px";
btnChangeImage.style.width = "";
updatePanel.appendChild(btnEl);
var intervalId;

btnEl.onclick = function(e) {
    e.preventDefault();
    if (btnEl.innerHTML === "Activate Auto-Changer (Click to start)") {
        btnEl.innerHTML = "Auto-Changer Running (Click to stop)";
        intervalId = window.setInterval(checkVerse, 1000);
    } else {
        clearInterval(intervalId);
        btnEl.innerHTML = "Activate Auto-Changer (Click to start)";
    }
}

function checkVerse() {
    let bibleValue;
    const currentVerse = document.getElementById('pVerse').innerText;
    if (louisSegondVerses.includes(currentVerse)) {
        bibleValue = louisSegondValue;
    } else if (martinVerses.includes(currentVerse)) {
        bibleValue = martinValue;
    } else if (segond21Veses.includes(currentVerse)) {
        bibleValue = segond21Value;
    } else {
        bibleValue = darbyValue;
    }
    document.getElementById('ddlTranslations').value = bibleValue;
    if (!(document.getElementById('chkMirror').checked)) {
        document.getElementById('chkMirror').click();
    }
    document.getElementById('chkMirror').click();
    document.getElementById('chkMirror').click();
}