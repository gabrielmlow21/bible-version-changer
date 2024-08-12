const BibleVersion = Object.freeze({
  "LOUIS SEGOND 1910": 1,
  "MARTIN 1744": 2,
});

let verse = "";

window.setInterval(function () {
  const DARBY_VALUE = window.location.hostname.includes("bible.mcgi.app")
    ? 149
    : 166;
  const LOUIS_SEGOND_VALUE = window.location.hostname.includes("bible.mcgi.app")
    ? 161
    : 44;
  const MARTIN_VALUE = window.location.hostname.includes("bible.mcgi.app")
    ? DARBY_VALUE
    : 164;

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

    if (currentVerse in versesJson) {
      switch (versesJson[currentVerse]["versionName"]) {
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

    if (window.location.hostname.includes("bible.addcit.org")) {
      if (!document.getElementById("chkMirror").checked) {
        document.getElementById("chkMirror").click();
      }
      document.getElementById("chkMirror").click();
      document.getElementById("chkMirror").click();
    }
  }
}, 1000);

const versesJson = {
  "1 CORINTHIENS 1:1": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 1:2": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 3:6": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 3:9": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 4:6": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 6:20": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 7:4": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "1 CORINTHIENS 7:5": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "1 CORINTHIENS 7:36": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "1 CORINTHIENS 7:37": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "1 CORINTHIENS 7:38": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "1 CORINTHIENS 10:11": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 10:13": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 10:32": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 11:20": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 11:21": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 11:22": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 11:23": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 11:24": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 11:25": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 11:26": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 11:27": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 12:13": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 12:28": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 14:19": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 14:33": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 15:9": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 CORINTHIENS 15:10": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 JEAN 3:16": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 JEAN 3:17": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 JEAN 5:16": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 PIERRE 5:7": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 THESSALONICIENS 2:4": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 THESSALONICIENS 2:10": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 THESSALONICIENS 2:14": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 TIMOTHÉE 3:5": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 TIMOTHÉE 3:15": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 TIMOTHÉE 4:6": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "1 TIMOTHÉE 5:16": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "2 CORINTHIENS 1:1": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "2 CORINTHIENS 8:3": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "2 CORINTHIENS 9:6": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "2 CORINTHIENS 9:7": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "2 CORINTHIENS 9:13": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "2 CORINTHIENS 11:28": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "2 TIMOTHÉE 2:15": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "3 JEAN 1:9": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "3 JEAN 1:10": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ACTES 2:46": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ACTES 2:47": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ACTES 7:38": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ACTES 8:1": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ACTES 8:37": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ACTES 11:26": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ACTES 13:39": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ACTES 20:28": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "ACTES 22:16": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "APOCALYPSE 1:10": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "APOCALYPSE 1:11": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "APOCALYPSE 1:20": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "APOCALYPSE 2:7": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "APOCALYPSE 2:17": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "APOCALYPSE 6:8": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "APOCALYPSE 22:16": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "COLOSSIENS 1:18": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "COLOSSIENS 1:24": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "COLOSSIENS 2:2": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "COLOSSIENS 2:3": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "COLOSSIENS 2:9": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "COLOSSIENS 3:15": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "COLOSSIENS 3:16": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ECCLÉSIASTE 12:10": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ÉPHÉSIENS 1:22": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ÉPHÉSIENS 3:10": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ÉPHÉSIENS 3:11": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ÉPHÉSIENS 4:15": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ÉPHÉSIENS 5:23": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ÉPHÉSIENS 5:24": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ÉPHÉSIENS 5:25": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ÉPHÉSIENS 5:27": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ÉPHÉSIENS 5:32": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ESAÏE 1:17": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ESAÏE 24:15": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ESDRAS 7:23": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "EXODE 15:2": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "GALATES 1:13": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "GALATES 1:14": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "GALATES 1:22": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "GALATES 1:23": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "GALATES 2:17": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "GENÈSE 2:22": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "HÉBREUX 3:1": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "HÉBREUX 3:6": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "HÉBREUX 4:15": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "HÉBREUX 10:24": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "HÉBREUX 10:25": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "HÉBREUX 12:5": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "HÉBREUX 12:6": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "HÉBREUX 12:11": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "HÉBREUX 13:5": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "JACQUES 1:27": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "JACQUES 2:6": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "JACQUES 4:7": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "JACQUES 4:8": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "JEAN 1:18": {
    versionName: "SEGOND 21",
  },
  "JEAN 13:35": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "JEAN 15:3": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "JEAN 17:11": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "JÉRÉMIE 18:12": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "JUDE 1:23": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "LUC 2:14": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "LUC 6:45": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "LUC 11:41": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "MATTHIEU 10:29": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "MATTHIEU 16:18": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "MATTHIEU 18:17": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "MATTHIEU 28:19": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "MATTHIEU 28:20": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PHILIPPIENS 1:27": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PHILIPPIENS 3:13": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PHILIPPIENS 3:14": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PHILIPPIENS 4:6": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PHILIPPIENS 4:7": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PROVERBES 8:29": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PROVERBES 22:6": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PROVERBES 24:9": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PSAUMES 40:8": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PSAUMES 50:23": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PSAUMES 68:18": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PSAUMES 130:3": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "PSAUMES 130:4": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ROMAINS 1:17": {
    versionName: BibleVersion["MARTIN 1744"],
  },
  "ROMAINS 7:2": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ROMAINS 10:17": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ROMAINS 12:1": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ROMAINS 12:9": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ROMAINS 12:17": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ROMAINS 12:19": {
    versionName: "SEGOND 21",
  },
  "ROMAINS 14:22": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ROMAINS 15:13": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ROMAINS 16:16": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "TITE 1:3": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "TITE 1:7": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "TITE 1:8": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "TITE 1:9": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "TITE 1:23": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
  "ZACHARIE 7:10": {
    versionName: BibleVersion["LOUIS SEGOND 1910"],
  },
};
