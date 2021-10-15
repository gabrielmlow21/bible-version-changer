const darbyValue = 166;
const louisSegondValue = 44;
const martinValue = 164;
const segond21Value = 163;

const martinVerses = [
    "ACTES 20:28",
]

const segond21Veses = [

]

const louisSegondVerses = [
    "PSAUMES 50:23",
    "1 CORINTHIENS 1:1",
    "1 CORINTHIENS 1:2",
    "1 CORINTHIENS 4:6",
    "1 CORINTHIENS 10:32",
    "1 CORINTHIENS 12:13",
    "1 CORINTHIENS 12:28",
    "1 CORINTHIENS 14:33",
    "1 CORINTHIENS 15:9",
    "1 CORINTHIENS 15:10",
    "1 JEAN 5:16",
    "1 THESSALONICIENS 2:14",
    "1 TIMOTHÉE 3:5",
    "1 TIMOTHÉE 3:15",
    "2 CORINTHIENS 1:1",
    "COLOSSIENS 1:18",
    "ÉPHÉSIENS 1:22",
    "ÉPHÉSIENS 5:32",
    "GALATES 1:14",
    "GALATES 1:22",
    "HÉBREUX 3:6",
    "MATTHIEU 16:18",
    "MATTHIEU 28:20",
    "ROMAINS 12:1",
    "ROMAINS 12:9",
    "ROMAINS 16:16",
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


