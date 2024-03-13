// Daten für das Quiz (Fragen, Antwortoptionen und richtige Antworten)
const quizData = 
    [
        {
            question: "Was ist der Standard-Texteditor in den meisten Linux-Distributionen?",
            options: ["Nanu", "Vim", "Emacs", "Word"],
            answer: "Vim",
            explanation: "Vim ist der Standard-Texteditor in den meisten Linux-Distributionen.",
            showID: "LPI 0001",
            topic: "Linux" // 
        },
        {
            "question": "Welches Kommando wird verwendet, um den aktuellen Verzeichnispfad in der Linux-Befehlszeile anzuzeigen?",
            "options": ["pwd", "currentdir", "showpath", "dir"],
            "answer": "pwd",
            "explanation": "Das `pwd` (Print Working Directory)-Kommando wird verwendet, um den aktuellen Verzeichnispfad in der Linux-Befehlszeile anzuzeigen.",
            showID: "LPI 0002",
            topic: "Linux"
        },
        {
            "question": "Was ist eine GUI?",
            "options": ["Eine graphische Benutzeroberfläche.", "Ein textbasiertes Interaktionsmedium.", "Ein Programmiercode zur Datenverarbeitung.", "Ein drahtloses Kommunikationsprotokoll."],
            "answer": "Eine graphische Benutzeroberfläche.",
            "explanation": "Eine GUI (Graphical User Interface) ist eine visuelle Methode, um mit einem Computersystem oder einer Softwareanwendung zu interagieren. Sie verwendet grafische Elemente wie Fenster, Symbole, Menüs und Schaltflächen, um Benutzern die Navigation und Ausführung von Aufgaben zu erleichtern.",
            showID: "LPI 0003",
            topic: "Linux"
        },
        {
            "question": "Auf welchem der folgenden Betriebssysteme läuft Raspbian Linux?",
            "options": ["Windows", "macOS", "Ubuntu", "Raspberry Pi OS"],
            "answer": "Raspberry Pi OS",
            "explanation": "Raspbian ist ein Betriebssystem, das speziell für den Einsatz auf dem Raspberry Pi entwickelt wurde, einem beliebten Einplatinencomputer. Es basiert auf Debian Linux und wurde für die optimale Leistung und Kompatibilität mit der Hardware des Raspberry Pi angepasst. Daher läuft Raspbian Linux auf dem Raspberry Pi.",
            showID: "LPI 0004",
            topic: "Linux"
        },
        {
            "question": "Welches der folgenden Beispiele ist ein Beispiel für eingebettetes Linux?",
            "options": ["Ubuntu Desktop", "Fedora Server", "Android", "CentOS Workstation"],
            "answer": "Android",
            "explanation": "Android ist ein Beispiel für eingebettetes Linux, da es speziell für den Einsatz in mobilen Geräten wie Smartphones und Tablets entwickelt wurde. Es basiert auf dem Linux-Kernel und wurde für die Anforderungen und Beschränkungen von mobilen Geräten optimiert.",
            showID: "LPI 0005",
            topic: "Linux"
        },
        {
            "question": "Was steuert die Hardware direkt und übersetzt die Befehle einer Software in etwas, das die Hardware verstehen und umsetzen kann?",
            "options": ["Kernel", "Compiler", "Shell", "Treiber"],
            "answer": "Kernel",
            "explanation": "Der Kernel ist der zentrale Bestandteil eines Linux-Betriebssystems. Er steuert die Hardware direkt und ermöglicht die Ausführung von Anwendungen, indem er die Befehle der Software in Anweisungen übersetzt, die die Hardware verstehen und umsetzen kann.",
            showID: "LPI 0006",
            topic: "Linux"
        },
        {
            "question": "Welches der folgenden Programme könnten Sie auf einem Linux-System als Ersatz für Microsoft Word verwenden?",
            "options": ["LibreOffice Writer", "GIMP", "VLC Media Player", "Audacity"],
            "answer": "LibreOffice Writer",
            "explanation": "LibreOffice Writer ist eine Open-Source-Textverarbeitungssoftware, die Teil des LibreOffice-Pakets ist und auf Linux-Systemen als Ersatz für Microsoft Word verwendet werden kann.",
            showID: "LPI 0007",
            topic: "Linux"
        },
        {
            "question": "Welche der folgenden Organisationen ist eine amerikanische Non-Profit-Organisation, die es sich zur Aufgabe gemacht hat, das Angebot an kreativen Werken zu erweitern, auf denen andere legal aufbauen und die sie gemeinsam nutzen können?",
            "options": ["Wikimedia Foundation", "Electronic Frontier Foundation", "Creative Commons", "Free Software Foundation"],
            "answer": "Creative Commons",
            "explanation": "Creative Commons ist eine Non-Profit-Organisation mit Sitz in den USA, die sich für die Bereitstellung von Lizenzen für kreative Werke einsetzt. Diese Lizenzen ermöglichen es den Urhebern, ihre Werke mit bestimmten Nutzungsbedingungen zu versehen, die anderen erlauben, die Werke zu nutzen, zu teilen und zu verändern, während gleichzeitig die Urheberrechte geschützt werden.",
            showID: "LPI 0008",
            topic: "Linux"
        },
        {
            "question": "Wie lautet der allgemeine Name für den Schutz von Shell-Meta-Zeichen vor einer Sonderbehandlung durch die Shell?",
            "options": ["Shell-Schutz", "Shell-Escape", "Shell-Quoting", "Shell-Verbergen"],
            "answer": "Shell-Quoting",
            "explanation": "Shell-Quoting bezieht sich auf die Technik, Shell-Meta-Zeichen vor einer speziellen Interpretation durch die Shell zu schützen. Durch das Quoting werden die Meta-Zeichen als Teil einer Zeichenkette behandelt und nicht als spezielle Befehlselemente interpretiert. Dies ist nützlich, wenn Sie Zeichen wie Leerzeichen, Anführungszeichen oder Wildcards in Datei- oder Verzeichnisnamen verwenden möchten, ohne dass die Shell sie interpretiert.",
            showID: "LPI 0009",
            topic: "Linux"
        },
        {
            "question": "Welche der folgenden Optionen ist eine gültige Option für einen typischen Befehl, um seine integrierten Nutzungsinformationen zu erhalten?",
            "options": ["-u", "-h", "-g", "-i"],
            "answer": "-h",
            "explanation": "Die Option '-h' wird häufig verwendet, um Hilfe oder integrierte Nutzungsinformationen für viele Linux-Befehle anzuzeigen. Wenn Sie also beispielsweise 'befehl -h' eingeben, erhalten Sie normalerweise eine kurze Beschreibung des Befehls sowie eine Liste der verfügbaren Optionen und deren Verwendung.",
            showID: "LPI 0010",
            topic: "Linux"
        },
        {
            "question": "Welcher der folgenden Befehle gibt eine Liste aller Dateinamen in Ihrem Home-Verzeichnis und aller Unterverzeichnisse mit Dateinamen, die auf .pdf enden, aus?",
            "options": ["ls -lR ~/ | grep .pdf$", "find ~/ -name .pdf", "dir ~/ | grep .pdf", "ls ~/ | find *.pdf"],
            "answer": "find ~/ -name *.pdf",
            "explanation": "Der Befehl 'find' durchsucht das angegebene Verzeichnis und alle seine Unterverzeichnisse rekursiv. Mit der Option '-name' wird nach Dateinamen gesucht, die mit '*.pdf' übereinstimmen. So werden alle Dateien mit der Endung '.pdf' im Home-Verzeichnis gefunden und aufgelistet.",
            showID: "LPI 0011"
        },
        {
            "question": "Was ist eine Reihe von Seiten, die jeden im System verfügbaren Befehl erklären?",
            "options": ["man pages", "command encyclopedia", "help sheets", "system manuals"],
            "answer": "man pages",
            "explanation": "Die 'man pages' sind eine Reihe von Seiten in einem Unix-basierten Betriebssystem wie Linux, die detaillierte Informationen zu jedem verfügbaren Befehl bereitstellen. Man verwendet den Befehl 'man' gefolgt vom Namen des Befehls, um die entsprechende man page aufzurufen und die Erläuterungen dazu zu erhalten.",
            showID: "LPI 0012"
        },
        {
            "question": "Ihr aktuelles Arbeitsverzeichnis ist /home/jason/documents/. Sie haben soeben cd .. in die Befehlszeile eingegeben und geben dann pwd ein. Welche Ausgabe erhalten Sie?",
            "options": ["/home/jason/documents/", "/home/jason/", "/home/", "/documents/"],
            "answer": "/home/jason/",
            "explanation": "Der Befehl cd .. wechselt ein Verzeichnis nach oben im Verzeichnisbaum, also von /home/jason/documents/ zu /home/jason/. Wenn Sie dann pwd eingeben, zeigt es das aktuelle Arbeitsverzeichnis an, das jetzt /home/jason/ ist.",
            showID: "LPI 0013"
        },
        {
            "question": "Welche der folgenden Optionen muss verwendet werden, um ein Verzeichnis und seine Unterverzeichnisse zu entfernen?",
            "options": ["rm -r", "mv -d", "cp -s", "mkdir -p"],
            "answer": "rm -r",
            "explanation": "Die Option '-r' in Verbindung mit dem Befehl 'rm' steht für 'rekursiv' und ermöglicht das Entfernen eines Verzeichnisses und aller seiner Unterverzeichnisse sowie Dateien. Beispielsweise würde 'rm -r directory_name' das Verzeichnis 'directory_name' und alle darin enthaltenen Dateien und Unterverzeichnisse löschen.",
            showID: "LPI 0014"
        },
        {
            "question": "Welche der folgenden Regeln ist KEINE gültige Regel für die Benennung einer Variablen?",
            "options": ["Variablennamen dürfen Buchstaben, Zahlen und Unterstriche enthalten.", "Variablennamen dürfen mit einer Zahl beginnen.", "Variablennamen sind case-sensitive.", "Variablennamen dürfen keine Leerzeichen enthalten."],
            "answer": "Variablennamen dürfen mit einer Zahl beginnen.",
            "explanation": "Variablennamen dürfen nicht mit einer Zahl beginnen, sie müssen mit einem Buchstaben oder einem Unterstrich starten.",
            showID: "LPI 0015"
        },
        {
            "question": "Wie lautet der richtige Befehl, um die Datei filename.txt in das Zip-Archiv myfile.zip zu komprimieren?",
            "options": ["zip myfile.zip filename.txt", "zip -r myfile.zip filename.txt", "gzip myfile.zip filename.txt", "tar -czvf myfile.zip filename.txt"],
            "answer": "zip myfile.zip filename.txt",
            "explanation": "Der Befehl 'zip' wird verwendet, um Dateien in ein Zip-Archiv zu komprimieren. Die Syntax lautet 'zip <Archivname> <Dateiname>'. In diesem Fall wird die Datei 'filename.txt' in das Zip-Archiv 'myfile.zip' komprimiert.",
            showID: "LPI 0016"
        },
        {
            "question": "Welche Anweisung wird verwendet, um Eingaben vom Terminal zu erhalten, wenn ein Shell-Skript ausgeführt wird?",
            "options": ["get_input", "read_input", "input", "read"],
            "answer": "read",
            "explanation": "Die Anweisung 'read' wird in Shell-Skripten verwendet, um Eingaben vom Terminal zu lesen. Damit können Benutzer während der Ausführung des Skripts Daten eingeben, die dann in Variablen gespeichert werden können.",
            showID: "LPI 0017"
        },
        {
            "question": "Welche Option kann mit tail verwendet werden, um die letzten 10 Zeilen einer Datei zu drucken und dann alle neuen Zeilen, die kontinuierlich hinzugefügt werden, weiter zu drucken?",
            "options": ["-f", "-n", "-r", "-c"],
            "answer": "-f",
            "explanation": "Die Option '-f' steht für 'follow' und wird verwendet, um den Ausgabestrom einer Datei kontinuierlich zu überwachen. Nachdem die ersten 10 Zeilen einer Datei mit 'tail -n 10 <dateiname>' ausgegeben wurden, wird '-f' verwendet, um die Datei weiterhin zu überwachen und alle neuen Zeilen anzuzeigen, die der Datei hinzugefügt werden.",
            showID: "LPI 0018"
        },
        {
            "question": "Welcher Befehl wird verwendet, um eine Shell-Variable für nachfolgend ausgeführte Programme bekannt zu machen?",
            "options": ["export", "set", "define", "declare"],
            "answer": "export",
            "explanation": "Der Befehl 'export' wird verwendet, um eine Shell-Variable für nachfolgend ausgeführte Programme bekannt zu machen. Dadurch wird die Variable für alle Kindprozesse der aktuellen Shell verfügbar gemacht.",
            showID: "LPI 0019"
        },
        {
            "question": "Wer ist ein Dummer Bastard dessen Mutter stinkt bis zum Himmel?",
            "options": ["deine Mutter", "Chris seine Mutter", "die gefickte Mutter", "Der Typ mit Gottkomplex an der Tastatur"],
            "answer": "deine Mutter",
            "explanation": "Der Befehl 'export' wird verwendet, um eine Shell-Variable für nachfolgend ausgeführte Programme bekannt zu machen. Dadurch wird die Variable für alle Kindprozesse der aktuellen Shell verfügbar gemacht.",
            showID: "LPI 0019",
            topic: "Mac"
        }
        


    ]

    export default quizData