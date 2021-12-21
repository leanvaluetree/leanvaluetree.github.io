# Lean Value Tree


Istruzione: install dependencies

```
npm install
```

Istruzione: development on `localhost:8080`

```
npm start
```

Istruzione: build

```
npm run build
```

```
COME AGGIORNARE LE SCHEDE DEI DIVERSI TOOL:

1. Modifica i testi presenti all'interno di questo file Google Sheet: https://docs.google.com/spreadsheets/d/12hjGwPDftFWRB2KHeTbNSjhVwZb0klbtdMqcfmZW46I/edit#gid=966188930

2. Esporta il file con le modifiche in formato .tsv e rinominalo in "tools.tsv"

3. Sostituisci il file nella cartella _data (presente all'interno del progetto leanvaluetree.github.io scaricata in locale)

4. Da terminale, posizionati nella cartella di progetto (leanvaluetree.github.io) e fai partire lo script "./scripts/generate-tools-from-tsv.js"

5. Fai ctrl+c e in seguito "npm start". Aspetta che il terminale faccia la sua magia, copia-incolla l'indirizzo local host sul tuo browser e accertati che le modifiche integrate siano corrette

6. Apri GitHub Desktop e nel pannello in basso a sinistra, nel campo "Summary", descrivi brevemente che tipo di modifica hai effettuato e premi su "Commit to main"

7. Pigia i tasti blu che compaiono finché non hai più nulla da premere: nel caso in cui ci siano delle modifiche apportate da altri, il tool scarica in automatico gli aggiornamenti in modo che non ci siano conflitti e altre amenità

8. Fatto! Controlla su leanvaluetree.it che le tue modifiche siano state integrate. Potrebbe volerci un attimo. Per scrupolo aggiorna la pagina "Svuotando la cache e ricaricando manualmente"

```

COME AGGIORNARE LE ANIMAZIONI IN COPERTINA / TITOLI ANIMATI ALL'INTERNO DELLE SCHEDE

Per aggiornare le copertine/titoli/footer: posizionati in _site/animations e inserisci il json dell'animazione chiamandolo con in nome del tool. Aggiungi poi l'animazione header chiamandola "workshop-header-nome del tool" e infine quella di footer chiamandola "workshop-loop-nome del tool" (istruzione da verificare).