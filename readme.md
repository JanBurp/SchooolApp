# Schoool App 2021

## Lokaal testen

Hieronder de stappen die nodig zijn om de app lokaal te instaleren en testen in de browser.

### Je moet Node.js hebben geïnstalleerd.
Dat kun je testen door de terminal te openen en op de command line te type:

  `node --version`

  `npm --version`

Je moet nu versienummers terugkrijgen. Als er een foutmelding komt dan is Node.js nog niet geïnstalleerd.
Download en installeer Node.js: [https://nodejs.org/en/download/](url)

### Installeer de App

Maak een map aan en pak de SchooolAppTest_xxx.zip daar uit
Open de Terminal in die map. Dat kan in macOS door op de map te staan, rechtermuisknop en dan onderaan 'Nieuw terminal venster bij...' te kiezen
Typ nu in de Terminal:

  `npm install`

Dit kan even duren en er komen waarschijnlijk een heleboel meldingen.
Als je EACCES fouten krijgt, volg dan eerste deze stappen: [https://ionicframework.com/docs/developing/tips#resolving-permission-errors](url)

### Run de App

Open de Terminal in de map waar je de App in hebt geïnstalleerd. Typ dan:

  `ionic serve`

De App wordt automatisch in je browser geopend. Je kunt nu het scherm instellen zodat het de omvang van een telefoon heeft. Bij Firefox kan dat met ALT-CMD-M en kun je dan bovenaan nog eventueel een ander apparaat of schermformaat kiezen.
