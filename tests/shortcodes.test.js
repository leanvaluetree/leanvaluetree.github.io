const test = require('ava')
const shortcodes = require('../shortcodes')

test('properties of tool', t => {
  const tool = {
    Proprietà: 'COST ** SETUP TIME ** RUN TIME *** EVIDENCE STRENGTH ***'
  }
  const result = shortcodes.properties(tool)
  t.is(result, `
  <div class="properties">
    <div class="property">
      <div class="property-name">COST</div>
      <div class="property-count"><div class="filled-circle"></div><div class="filled-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div></div>
    </div>
    <div class="property">
      <div class="property-name">SETUP TIME</div>
      <div class="property-count"><div class="filled-circle"></div><div class="filled-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div></div>
    </div>
    <div class="property">
      <div class="property-name">RUN TIME</div>
      <div class="property-count"><div class="filled-circle"></div><div class="filled-circle"></div><div class="filled-circle"></div><div class="empty-circle"></div><div class="empty-circle"></div></div>
    </div>
    <div class="property">
      <div class="property-name">EVIDENCE STRENGTH</div>
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
    <h3 class="uppercase">Perfetto se...</h3>
    <p>
      Voglio essere sicuro che ogni cambiamento introdotto all'interno del mio prodotto/servizio introduca risultati positivi misurabili rispetto alla versione esistente.
    </p>
  </div>
  `.trim())
})
