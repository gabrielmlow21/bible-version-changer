const defaultBibleValue = 166;
let verse = "";

window.setInterval(function() {
    const currentVerse = document.getElementById("pVerse").innerText;
    if (verse !== currentVerse) {
        verse = currentVerse;
        const bibleValue = (currentVerse in versesJson) ? versesJson[currentVerse]["versionValue"] : defaultBibleValue;
        document.getElementById('ddlTranslations').value = bibleValue;
        if (!(document.getElementById('chkMirror').checked)) {
            document.getElementById('chkMirror').click();
        }
        document.getElementById('chkMirror').click()
        document.getElementById('chkMirror').click()
    }
}, 1000);

const versesJson = {
    "1 CORINTHIENS 1:1": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 1:2": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 3:6": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 3:9": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 4:6": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 6:20": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 7:4": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "1 CORINTHIENS 7:5": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "1 CORINTHIENS 7:36": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "1 CORINTHIENS 7:37": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "1 CORINTHIENS 7:38": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "1 CORINTHIENS 10:11": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 10:13": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 10:32": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 11:20": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 11:21": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 11:22": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 11:23": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 11:24": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 11:25": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 11:26": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 11:27": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 12:13": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 12:28": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 14:19": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 14:33": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 15:9": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 CORINTHIENS 15:10": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 JEAN 3:16": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 JEAN 3:17": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 JEAN 5:16": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 PIERRE 5:7": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 THESSALONICIENS 2:4": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 THESSALONICIENS 2:10": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 THESSALONICIENS 2:14": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 TIMOTHÉE 3:5": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 TIMOTHÉE 3:15": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 TIMOTHÉE 4:6": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "1 TIMOTHÉE 5:16": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "2 CORINTHIENS 1:1": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "2 CORINTHIENS 8:3": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "2 CORINTHIENS 9:6": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "2 CORINTHIENS 9:7": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "2 CORINTHIENS 9:13": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "2 CORINTHIENS 11:28": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "2 TIMOTHÉE 2:15": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "3 JEAN 1:9": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "3 JEAN 1:10": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ACTES 2:46": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ACTES 2:47": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ACTES 7:38": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ACTES 8:1": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ACTES 8:37": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ACTES 11:26": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ACTES 13:39": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ACTES 20:28": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "ACTES 22:16": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "APOCALYPSE 1:10": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "APOCALYPSE 1:11": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "APOCALYPSE 1:20": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "APOCALYPSE 2:7": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "APOCALYPSE 2:17": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "APOCALYPSE 6:8": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "APOCALYPSE 22:16": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "COLOSSIENS 1:18": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "COLOSSIENS 1:24": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "COLOSSIENS 2:2": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "COLOSSIENS 2:3": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "COLOSSIENS 2:9": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "COLOSSIENS 3:15": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "COLOSSIENS 3:16": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ECCLÉSIASTE 12:10": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ÉPHÉSIENS 1:22": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ÉPHÉSIENS 3:10": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ÉPHÉSIENS 3:11": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ÉPHÉSIENS 4:15": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ÉPHÉSIENS 5:23": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ÉPHÉSIENS 5:24": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ÉPHÉSIENS 5:25": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ÉPHÉSIENS 5:27": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ÉPHÉSIENS 5:32": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ESAÏE 1:17": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ESAÏE 24:15": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ESDRAS 7:23": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "EXODE 15:2": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "GALATES 1:13": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "GALATES 1:14": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "GALATES 1:22": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "GALATES 1:23": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "GALATES 2:17": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "GENÈSE 2:22": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "HÉBREUX 3:1": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "HÉBREUX 3:6": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "HÉBREUX 4:15": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "HÉBREUX 10:24": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "HÉBREUX 10:25": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "HÉBREUX 12:5": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "HÉBREUX 12:6": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "HÉBREUX 12:11": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "HÉBREUX 13:5": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "JACQUES 1:27": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "JACQUES 2:6": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "JACQUES 4:7": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "JACQUES 4:8": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "JEAN 1:18": {
        "versionValue": 163, 
        "versionName": "SEGOND 21"
    },
    "JEAN 13:35": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "JEAN 15:3": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "JEAN 17:11": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "JÉRÉMIE 18:12": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "JUDE 1:23": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "LUC 2:14": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "LUC 6:45": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "LUC 11:41": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "MATTHIEU 10:29": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "MATTHIEU 16:18": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "MATTHIEU 18:17": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "MATTHIEU 28:19": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "MATTHIEU 28:20": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PHILIPPIENS 1:27": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PHILIPPIENS 3:13": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PHILIPPIENS 3:14": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PHILIPPIENS 4:6": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PHILIPPIENS 4:7": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PROVERBES 8:29": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PROVERBES 22:6": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PROVERBES 24:9": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PSAUMES 40:8": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PSAUMES 50:23": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PSAUMES 68:18": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PSAUMES 130:3": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PSAUMES 130:4": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ROMAINS 1:17": {
        "versionValue": 164, 
        "versionName": "MARTIN 1744"
    },
    "ROMAINS 7:2": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ROMAINS 10:17": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ROMAINS 12:1": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ROMAINS 12:9": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ROMAINS 12:17": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ROMAINS 12:19": {
        "versionValue": 163, 
        "versionName": "SEGOND 21"
    },
    "ROMAINS 14:22": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ROMAINS 15:13": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ROMAINS 16:16": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "TITE 1:3": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "TITE 1:7": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "TITE 1:8": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "TITE 1:9": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "TITE 1:23": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ZACHARIE 7:10": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    }
}
