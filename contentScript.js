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
    "APOCALYPSE 1:11": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "APOCALYPSE 1:20": {
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
    "ÉPHÉSIENS 5:32": {
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
    "HÉBREUX 10:24": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "HÉBREUX 10:25": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "JACQUES 1:27": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
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
    "PSAUMES 50:23": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "PSAUMES 68:18": {
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
    "ROMAINS 14:22": {
        "versionValue": 44, 
        "versionName": "LOUIS SEGOND 1910"
    },
    "ROMAINS 16:16": {
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
    }
}

// const italian = {
//     "1 CORINZI 1:27": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "ma Dio ha scelto le cose stolte del mondo per svergognare le savie; e Dio ha scelto le cose deboli del mondo per svergognare le forti;"
//     },
//     "1 CORINZI 1:28": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "e Dio ha scelto le cose ignobili del mondo e le cose spregevoli e le cose che non sono per ridurre al niente quelle che sono,"
//     },
//     "1 CORINZI 6:8": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "Invece siete voi che fate torto e danno; e per giunta a dei fratelli."
//     },
//     "1 CORINZI 6:9": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "Non sapete voi che gli ingiusti non erediteranno il regno di Dio? Non v'ingannate: né i fornicatori, né gli idolatri, né gli adulteri, né gli effeminati, né gli omosessuali"
//     },
//     "1 CORINZI 6:20": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "1 CORINZI 7:5": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "Non privatevi l'uno dell'altro, se non di comune accordo per un tempo, per dedicarvi al digiuno e alla preghiera; poi di nuovo tornate a stare insieme, affinché Satana non vi tenti a causa della vostra mancanza di autocontrollo."
//     },
//     "1 CORINZI 7:33": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "ma colui che è sposato si dà pensiero delle cose del mondo, come potrebbe piacere alla moglie"
//     },
//     "1 CORINZI 7:34": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "e i suoi interessi sono divisi. La donna senza marito o vergine si dà pensiero delle cose del Signore, per essere consacrata a lui nel corpo e nello spirito; mentre la sposata si dà pensiero delle cose del mondo, come potrebbe piacere al marito."
//     },
//     "1 CORINZI 15:1": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "Ora, fratelli, vi dichiaro l'evangelo che vi ho annunziato, e che voi avete ricevuto e nel quale state saldi,"
//     },
//     "1 CORINZI 15:2": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "e mediante il quale siete salvati, se ritenete fermamente quella parola che vi ho annunziato, a meno che non abbiate creduto invano."
//     },
//     "2 PIETRO 2:22": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "È avvenuto di loro quel che dice con verità il proverbio: \"Il cane è tornato al suo vomito\", e: \"La scrofa lavata è tornata a rotolarsi nel fango\"."
//     },
//     "2 TIMOTEO 2:20": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "2 TIMOTEO 2:22": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "Fuggi le passioni giovanili e ricerca la giustizia, la fede, l'amore, la pace con quelli che invocano il Signore con un cuore puro."
//     },
//     "2 TIMOTEO 3:13": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "Ma gli uomini malvagi e gli impostori andranno di male in peggio, ingannando gli altri ed essendo ingannati."
//     },
//     "APOCALISSE 3:15": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "Io conosco le tue opere, che tu non sei né freddo né caldo. Oh, fossi tu freddo o caldo!"
//     },
//     "APOCALISSE 3:16": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "Così, perché sei tiepido e non sei né freddo né caldo, io sto per vomitarti dalla mia bocca."
//     },
//     "APOCALISSE 5:10": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "e ci hai fatti re e sacerdoti per il nostro Dio, e regneremo sulla terra»."
//     },
//     "ATTI 2:36": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "ATTI 2:47": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA", 
//         "content": "lodando Dio e godendo il favore di tutto il popolo. Il Signore aggiungeva ogni giorno alla loro comunità quelli che venivano salvati."
//     },
//     "ATTI 3:22": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "Mosè stesso infatti disse ai padri: \"Il Signore Dio vostro susciterà per voi un profeta come me in mezzo ai vostri fratelli; ascoltatelo in tutte le cose che egli vi dirà."
//     },
//     "ATTI 8:37": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA", 
//         "content": "Filippo disse: \"Se tu credi con tutto il cuore, è possibile\". L'eunuco rispose: \"Io credo che Gesù Cristo è il Figlio di Dio\"."
//     },
//     "COLOSSESI 2:6": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "Come dunque avete ricevuto Cristo Gesù, il Signore, così camminate in lui;"
//     },
//     "DANIELE 9:19": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "DEUTERONOMIO 6:4": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA", 
//         "content": "Ascolta, Israele: Il SIGNORE, il nostro Dio, è l'unico SIGNORE."
//     },
//     "ECCLESIASTE 7:27": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "EFESINI 2:16": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "e per riconciliare ambedue con Dio in un sol corpo per mezzo della croce, avendo ucciso l'inimicizia in se stesso."
//     },
//     "FILIPPESI 1:22": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "Ma se il vivere nella carne porta frutto all'opera mia, non saprei che cosa preferire."
//     },
//     "FILIPPESI 2:6": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "il quale, essendo in forma di Dio, non considerò qualcosa a cui aggrapparsi tenacemente l'essere uguale a Dio,"
//     },
//     "FILIPPESI 2:7": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "ma svuotò se stesso, prendendo la forma di servo, divenendo simile agli uomini;"
//     },
//     "FILIPPESI 2:16": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "tenendo alta la parola di vita, in modo che nel giorno di Cristo io possa vantarmi di non aver corso invano, né invano faticato."
//     },
//     "FILIPPESI 4:6": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "Non angustiatevi di nulla, ma in ogni cosa fate conoscere le vostre richieste a Dio in preghiere e suppliche, accompagnate da ringraziamenti."
//     },
//     "GALATI 1:22": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "GALATI 6:10": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "GEREMIA 17:10": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "Io, l'Eterno, investigo il cuore, metto alla prova la mente per rendere a ciascuno secondo le sue vie, secondo il frutto delle sue azioni."
//     },
//     "GIOVANNI 1:18": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "Nessuno ha mai visto Dio; l'unigenito Dio, che è nel seno del Padre, è quello che l'ha fatto conoscere."
//     },
//     "GIOVANNI 12:49": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "Perché io non ho parlato di mio; ma il Padre, che mi ha mandato, mi ha comandato lui quello che devo dire e di cui devo parlare;"
//     },
//     "GIOVANNI 15:3": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "Voi siete già puri a causa della parola che vi ho annunziata."
//     },
//     "ISAIA 2:1": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "ISAIA 2:2": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "ISAIA 2:3": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "ISAIA 34:16": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI",
//         "content": "Cercate nel libro dell'Eterno e leggete: nessuno di essi mancherà, nessuno sarà privo del suo compagno, perché la sua bocca l'ha comandato e il suo Spirito li ha radunati."
//     },
//     "ISAIA 43:3": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "perché io sono il SIGNORE, il tuo Dio, il Santo d'Israele, il tuo salvatore; io ho dato l'Egitto come tuo riscatto, l'Etiopia e Seba al tuo posto."
//     },
//     "MALACHIA 3:17": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "«Essi saranno miei», dice l'Eterno degli eserciti, «nel giorno in cui preparo il mio particolare tesoro, e li risparmierò, come un uomo risparmia il figlio che lo serve."
//     },
//     "MATTEO 10:28": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "E non temete coloro che uccidono il corpo, ma non possono uccidere l'anima; temete piuttosto colui che può far perire l'anima e il corpo nella geenna."
//     },
//     "MATTEO 24:3": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "LUCA 11:41": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "Ma date in elemosina quel che c'è dentro, e ogni cosa sarà pura per voi."
//     },
//     "LUCA 19:27": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "E quei miei nemici che non volevano che io regnassi su di loro, conduceteli qui e uccideteli in mia presenza\"»."
//     },
//     "ROMANI 8:1": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "SALMI 2:7": {
//         "versionValue": 190, 
//         "versionName": "GIOVANNI DIODATI 1649", 
//         "content": null
//     },
//     "SALMI 16:10": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI", 
//         "content": "perché tu non lascerai l'anima mia nello Sceol e non permetterai che il tuo Santo veda la corruzione."
//     },
//     "SALMI 49:14": {
//         "versionValue": null, 
//         "versionName": "NUOVA DIODATI",
//         "content": "Sono sospinti come pecore verso lo Sceol; la morte li ingoierà, e al mattino gli uomini retti regneranno su di loro. Il loro sfarzo svanirà nello Sceol, lontano dalla loro dimora."
//     },
//     "SALMI 110:1": {
//         "versionValue": 68, 
//         "versionName": "NUOVA RIVEDUTA",
//         "content": "Salmo di Davide. Il SIGNORE ha detto al mio Signore: \"Siedi alla mia destra finché io abbia fatto dei tuoi nemici lo sgabello dei tuoi piedi\"."
//     }
// }