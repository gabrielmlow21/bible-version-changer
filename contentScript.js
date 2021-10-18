const updatePanel = document.getElementsByClassName("footer")[0];
const btnChangeImage = updatePanel.children[2];
const btnEl = document.createElement('button');
btnEl.innerHTML = "Activate Auto-Changer (Click to start)";
btnEl.style.marginTop = "23px"
btnEl.style.marginLeft = "10px";
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