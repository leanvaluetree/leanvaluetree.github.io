const test = require('ava')
const shortcodes = require('../shortcodes')

test('properties of tool', t => {
  const tool = {
    Proprietà: 'COST ** SETUP TIME ** RUN TIME *** EVIDENCE STRENGTH ***'
  }
  const result = shortcodes.properties(tool)
  t.is(result, `
  <div class="properties ovh">
    <div class="property py-3">
      <div class="small-label">COST</div>
      <div class="property-count"><div class="filled-circle"></div><div class="filled-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div></div>
    </div>
    <div class="property py-3">
      <div class="small-label">SETUP TIME</div>
      <div class="property-count"><div class="filled-circle"></div><div class="filled-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div></div>
    </div>
    <div class="property py-3">
      <div class="small-label">RUN TIME</div>
      <div class="property-count"><div class="filled-circle"></div><div class="filled-circle"></div><div class="filled-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div></div>
    </div>
    <div class="property py-3">
      <div class="small-label">EVIDENCE STRENGTH</div>
      <div class="property-count"><div class="filled-circle"></div><div class="filled-circle"></div><div class="filled-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div></div>
    </div>
  </div>
  `.trim())
})

test('usefulness of tool', t => {
  const tool = {
    'Perfetto se...': "Voglio essere sicuro che ogni cambiamento introdotto all'interno del mio prodotto/servizio introduca risultati positivi misurabili rispetto alla versione esistente."
  }
  const result = shortcodes.usefulness(tool)
  t.is(result, `
  <div class="usefulness">
    <h3>Perfetto se</h3>
    <p>
      Voglio essere sicuro che ogni cambiamento introdotto all'interno del mio prodotto/servizio introduca risultati positivi misurabili rispetto alla versione esistente.
    </p>
  </div>
  `.trim())
})

test('todo of tool', t => {
  const tool = {
    'To-do': '1. Identifica la metrica che vuoi monitorare\\n  2. Scegli il tool che più si adatta alle tue esigenze\\n  3. Configura e testa il tool\\n  4. Lancia il tuo A/B test\\n  5. Monitora il test nel tempo\\n  6. Scegli la versione più performante'
  }
  const result = shortcodes.todo(tool)
  t.is(result, `
  <div class="todo">
    <h3>To-do</h3>
    <ul class="list-with-arrows">
      <li>1. Identifica la metrica che vuoi monitorare</li><li>  2. Scegli il tool che più si adatta alle tue esigenze</li><li>  3. Configura e testa il tool</li><li>  4. Lancia il tuo A/B test</li><li>  5. Monitora il test nel tempo</li><li>  6. Scegli la versione più performante</li>
    </ul>
  </div>
  `.trim())
})

test('info of tool', t => {
  const tool = {
    ID: '1',
    'Nome tool': 'A/B test',
    'Anche conosciuto come': 'Split Testing, Bucket Testing',
    'Descrizione di massima': "L'A/B testing è un \"esperimento controllato\": prendendo in considerazione due varianti dello stesso sito, determina quale delle due versioni sia più performante secondo una metrica di successo misurabile. Il test può essere effettuato sia su singole funzioanalità (es. CTA rossa vs CTA blu) che su pagine più strutturate (es. Versione 1 e 2 della \"pagina Contatti\")",
    Proprietà: 'COST ** SETUP TIME ** RUN TIME *** EVIDENCE STRENGTH ***',
    'Prerequisiti necessari': 'Versione online del prodotto/servizio che vuoi testare.',
    'Perfetto se...': "\"Voglio essere sicuro che ogni cambiamento introdotto all'interno del mio prodotto/servizio introduca risultati positivi misurabili rispetto alla versione esistente.\"  \"Sei indeciso tra due varianti (due messaggi, due concept etc.)\"",
    Fase: 'Soluzione',
    'Fase dettaglio': 'Validare la soluzione',
    Metriche: 'Visite uniche, click through rate, conversioni (es. numero di download, numero di iscrizioni, etc)',
    'Ti serviranno': 'Software per automatizzare A/B test. Esistono anche varianti con composer visivi in cui non serve sviluppare codice.',
    'Esempi di tool': 'Instapage, Optimizely, A/B Tasty, Adobe Target',
    'To-do': '1. Identifica la metrica che vuoi monitorare\\n  2. Scegli il tool che più si adatta alle tue esigenze\\n  3. Configura e testa il tool\\n  4. Lancia il tuo A/B test\\n  5. Monitora il test nel tempo\\n  6. Scegli la versione più performante',
    'Dream team': 'Developer, Designer, PO/PM ',
    'Difficoltà maggiori': 'Identificazione metrica adeguata. Settaggio tool dedicato.',
    'Storia / esempio': '',
    'Potrebbe interessarti anche': '\r',
    url: '/a-b-test/'
  }
  const result = shortcodes.info(tool)
  t.is(result, `
  <div class="info ovh">
    <div class="py-3">
      <div class="small-label uppercase">Fase</div>
      <div class="small">Validare la soluzione</div>
    </div>
    <div class="py-3">
      <div class="small-label uppercase">Dream team</div>
      <div class="small">Developer, Designer, PO/PM </div>
    </div>
    <div class="py-3">
      <div class="small-label uppercase">AKA</div>
      <div class="small">Split Testing, Bucket Testing</div>
    </div>
    <div class="py-3">
      <div class="small-label uppercase">Prerequisiti</div>
      <div class="small">Versione online del prodotto/servizio che vuoi testare.</div>
    </div>
  </div>
  `.trim())
})
