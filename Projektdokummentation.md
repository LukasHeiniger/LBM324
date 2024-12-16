# Lernatelier-Eigene-Webseite

# Projekt-Dokumentation

Lukas Heiniger

## 1 Informieren

### 1.1 Ihr Projekt

Ich erstelle in diesem Projekt eine Webseite, über mich auf welcher man meine Projekte etc. sehen kann und auch noch informationen über mich.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ         | Beschreibung                                                    |
| ---- | --------------- | ----------- | --------------------------------------------------------------- |
| 1    | Muss            | Funktional  | Als ein Besucher möchte ich die Startseite sehen, damit ich sofort einen Überblick über die Website-Inhalte bekomme. |
| 2    | Muss            | Funktional  | Als ein Besucher möchte ich ein Portfolio mit Projekten sehen, damit ich mehr über die Fähigkeiten des Websiten-Besitzers erfahre. |
| 3    | Kann            | Qualität    | Als ein Besucher möchte ich eine reaktionsschnelle Benutzeroberfläche, damit ich die Website auf verschiedenen Geräten problemlos nutzen kann. |
| 4    | Muss            | Funktional  | Als ein Besucher möchte ich eine Kontaktseite sehen, damit ich den Websiten-Besitzer direkt kontaktieren kann. |
| 5    | Kann            | Rand        | Als ein Besucher möchte ich Social-Media-Links sehen, damit ich dem Websiten-Besitzer auf anderen Plattformen folgen kann. |
| 6    | Muss            | Funktional  | Als ein Besucher möchte ich die Möglichkeit haben, eine Projektbeschreibung zu jedem Projekt im Portfolio zu sehen, damit ich mehr Details erfahre. |
| 7    | Kann            | Qualität    | Als ein Besucher möchte ich eine Suchfunktion auf der Website haben, damit ich spezifische Projekte schnell finden kann. |
| 8    | Muss            | Funktional  | Als ein Besucher möchte ich eine übersichtliche Navigationsleiste sehen, damit ich schnell zwischen den Seiten wechseln kann. |
| 9    | Kann            | Rand        | Als ein Besucher möchte ich eine Feedback-Möglichkeit auf der Kontaktseite haben, damit ich sofort Rückmeldungen geben kann. |
| 10   | Kann            | Qualität    | Als ein Besucher möchte ich animierte Übergänge zwischen den Seiten haben, damit die Benutzererfahrung flüssiger und ansprechender wird.
| 11   | Muss            | Funktional  | Als ein Besucher möchte ich jedes Projekt auf einer eigenen Detailseite sehen können, damit ich vollständige Informationen dazu erhalte.
| 12   | Kann            | Rand        | Als ein Besucher möchte ich eine "Über mich"-Seite sehen, damit ich mehr über den Websiten-Besitzer erfahren kann.
| 13   | Muss            | Funktional  | Als ein Besucher möchte ich eine Funktion haben, um Projekte nach Kategorien zu filtern, damit ich schnell die Projekte finde, die mich interessieren.
| 14   | Kann            | Qualität    | Als ein Besucher möchte ich Ladeanimationen sehen, damit die Seite professioneller und interaktiver wirkt.
| 15  | Muss            | Funktional  | Als ein Besucher möchte ich, dass die Website barrierefrei ist, damit sie für alle Nutzer zugänglich ist.
| 16   | Kann            | Rand        | Als ein Besucher möchte ich die Möglichkeit haben, das Design der Seite zwischen einem hellen und einem dunklen Modus zu wechseln, damit die Seite angenehmer zu benutzen ist.

### 1.3 Testfälle

| TC-№ | Ausgangslage                                                                                                  | Eingabe                                                       | Erwartete Ausgabe                                                                                       |
| ---- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1.1  | Benutzer besucht die Startseite                                                                               | Startseite laden                                              | Die Startseite zeigt eine Übersicht aller wichtigen Inhalte in einem ansprechenden Layout               |
| 1.2  | Benutzer öffnet das Portfolio                                                                                 | Portfolio-Seite öffnen                                        | Eine Übersicht aller Projekte wird angezeigt, inkl. Design und Layout gemäß den definierten Spezifikationen |
| 1.3  | Portfolio-Seite ist geladen                                                                                   | Ein Projekt auswählen                                         | Detailseite des Projekts wird geöffnet und zeigt Projektbeschreibung und statische Inhalte              |
| 1.4  | Benutzer verwendet verschiedene Bildschirmgrößen                                                              | Fenstergröße ändern                                           | Layout passt sich dynamisch an, alle Inhalte bleiben gut lesbar                                         |
| 1.5  | Benutzer füllt das Kontaktformular aus                                                                        | Kontaktformular ausfüllen und absenden                         | Formular wird abgesendet, und E-Mail-Link oder Nachricht wird generiert                                 |
| 1.6  | Benutzer sucht nach einem bestimmten Projekt                                                                  | Suchfunktion nutzen, z. B. Projektname eingeben                | Suchergebnisse filtern die Projekte, und relevante Projekte werden angezeigt                            |
| 1.7  | Benutzer verwendet die Filteroptionen auf der Portfolio-Seite                                                 | Filteroption (z. B. Kategorie) auswählen                       | Projekte werden gemäß der gewählten Filterkategorie gefiltert und angezeigt                             |
| 1.8  | Benutzer wählt zwischen hellem und dunklem Modus                                                              | Umschaltfunktion für Modus aktivieren                          | Die Website wechselt zum ausgewählten Modus, und Farben passen sich dem gewählten Modus an              |
| 1.9  | Benutzer navigiert durch die Seiten oder Abschnitte                                                           | Seite oder Abschnitt wechseln                                  | Animierte Übergänge zwischen den Seiten oder Abschnitten sind sichtbar und verbessern die Benutzererfahrung |

## 2 Planen

| AP-№ | Frist | Zuständig  | Beschreibung                                                                 | geplante Zeit |
| ---- | ----- | ---------- | ----------------------------------------------------------------------------- | ------------- |
| 1.A  |       | Lukas      | Startseite mit statischen Inhalten erstellen, die eine Übersicht über alle wichtigen Inhalte bietet |  45 min              |
| 1.B  |       | Lukas      | Gestaltung und Design der Startseite mit HTML/CSS                              | 45 min               |
| 2.A  |       | Lukas      | Portfolio-Seite mit Projekten in HTML/CSS erstellen                            |  45 min              |
| 2.B  |       | Lukas      | Layout und Design des Portfolios mit CSS und ggf. JavaScript                   |  45 min              |
| 2.C  |       | Lukas      | Projektinformationen als statische Inhalte (z. B. in JSON oder direkt in HTML) einfügen |   45 min             |
| 3.A  |       | Lukas      | Responsives Design mit CSS-Media-Queries für verschiedene Bildschirmgrößen umsetzen | 45 min               |
| 4.A  |       | Lukas      | Kontaktseite mit HTML-Formular erstellen (E-Mail-Link oder externe Lösung nutzen) |  45 min              |
| 5.A  |       | Lukas      | Social-Media-Links auf der Startseite und Kontaktseite einfügen (statisch)     |   45 min             |
| 6.A  |       | Lukas      | Projektbeschreibungen als statische Inhalte zu jedem Projekt hinzufügen         |   45 min             |
| 7.A  |       | Lukas      | Suchfunktion auf der Website mit JavaScript implementieren (z. B. clientseitige Filterung) |     45 min           |
| 8.A  |       | Lukas      | Navigationsleiste erstellen und auf allen Seiten einbinden                      |     45 min           |
| 9.A  |       | Lukas      | Feedback-Funktion mit statischem Formular (z. B. Mailto-Link oder Platzhalter) hinzufügen |    45 min            |
| 10.A |       | Lukas      | Animierte Übergänge zwischen Seiten oder Abschnitten mit CSS-Transitions oder JavaScript erstellen |  45 min              |
| 11.A |       | Lukas      | Detailseiten für jedes Projekt erstellen (separate HTML-Seiten oder modale Fenster) |  45 min              |
| 12.A |       | Lukas      | „Über mich“-Seite in HTML/CSS erstellen und Inhalte gestalten                   |   45 min             |
| 13.A |       | Lukas      | Filteroption für Projekte mit clientseitigem JavaScript (z. B. Kategorien filtern) |  45 min              |
| 14.A |       | Lukas      | Ladeanimationen mit CSS (z. B. bei Seitenwechsel oder Bild-Laden) erstellen     |    45 min            |
| 15.A |       | Lukas      | Barrierefreiheit sicherstellen: Alt-Text, Kontraste, semantisches HTML verwenden | 45 min               |
| 16.A |       | Lukas      | Design für hellen und dunklen Modus mit CSS erstellen                          |   45 min             |
| 16.B |       | Lukas      | Umschaltfunktion für hellen und dunklen Modus mit JavaScript umsetzen           |  45 min              |
| 17.A |       | Lukas      | Projektdokumentation          |               |
| 17.B |       | Lukas      | Portfoliobeitrag          |               |
Total:


## 3 Entscheiden

Ich habe realisiert, dass ich das nächste Mal die Planung besser gestalten soll.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  | 30.08.24       |  Lukas         |   45 min          |   45 min                  |
|1.B  |  30.08.24      |  Lukas         |  45 min            |   45 min                  |
| 2.A  |  30.08.24      |  Lukas         |   45 min          |    45 min                 |
| 2.B  | 30.08.24       |  Lukas         |  45 min            |    45 min                 |
| 2.C  |  30.08.24     |  Lukas         |   45 min          |    45 min                 |
| 3.A  |  06.09.24      |  Lukas         |  45 min            |    45 min                 |
| 4.A  |  06.09.24     |  Lukas         |   45 min          |    45 min                 |
| 5.A  | 06.09.24    |  Lukas         |  45 min            |    45 min                 |
| 7.A  |     |  Lukas         |   45 min          |  Nicht umgesetzt                 |
| 8.A  | 13.09.24        |  Lukas         |  45 min            |   45 min                  |
| 9.A  |  13.09.24   |  Lukas         |   45 min          |     45 min                |
| 10.A  |13.09.24     |  Lukas         |  45 min            |     45 min                |
| 11.A  |  14.10.24       |  Lukas         |   45 min          |    45 min                 |
| 12.A  |  14.10.24       |  Lukas         |  45 min            |     45 min                |
| 13.A  |       |  Lukas         |  45 min            |  Nicht umgesetzt                 |
| 14.A  | 14.10.24      |  Lukas         |   45 min          |   45 min                 |
| 15.A  |       |  Lukas         |  45 min            | Nicht umesetzt                  |
| 16.A  | 25.10.24         |  Lukas         |  45 min            |  45 min                   |
| 16.B  | 25.10.24         |  Lukas         |   45 min          |    45 min                 |
| 17.A | 25.10.24 Abgeschlossen      | Lukas      | Projektdokumentation          | 2 Lektionen              |
| 17.B | 25.10.24         | Lukas      | Portfoliobeitrag          |  3 lektionen             |



## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum     | Resultat                | Tester        |
| ---- | --------- | ----------------------- | ------------- |
| 1.1  | 25.10.24  | Funktioniert            | Lukas Heiniger |
| 1.2  | 25.10.24  | Funktioniert            | Lukas Heiniger |
| 1.3  | 25.10.24  | Nicht umgesetzt         | Lukas Heiniger |
| 1.4  | 25.10.24  | Funktioniert            | Lukas Heiniger |
| 1.5  | 25.10.24  | Funktioniert            | Lukas Heiniger |
| 1.6  | 25.10.24  | Nicht umgesetzt         | Lukas Heiniger |
| 1.7  | 25.10.24  | Nicht umgesetzt         | Lukas Heiniger |
| 1.8  | 25.10.24  | Funktioniert            | Lukas Heiniger |
| 1.9  | 25.10.24  | Funktioniert            | Lukas Heiniger |



Fazit:

Ich bin nicht wirklich zufrieden mit meinem Projekt, ich hätte mehr machen müssen, damit ich zufrieden gewesen wäre. Ich denke aber, dass das, was ich gemacht habe, ist einigermassen gut.


## 6 Auswerten

Link zum Portfoliobeitrag: https://portfolio.bbbaden.ch/view/view.php?t=0055a491798c7a14b92f
