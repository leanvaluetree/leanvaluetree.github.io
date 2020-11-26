const test = require('ava')
const shortcodes = require('../shortcodes')

test('parses properties of tool', t => {
  const tool = {
    Proprietà: 'COST ** SETUP TIME ** RUN TIME *** EVIDENCE STRENGTH ***'
  }
  const result = shortcodes.properties(tool)
  t.is(result, `
  <div class="properties">
    <div class="half">
      <div class="property-name">COST</div>
    </div>
    <div class="half">
      <div class="property-name">SETUP TIME</div>
    </div>
    <div class="half">
      <div class="property-name">RUN TIME</div>
    </div>
    <div class="half">
      <div class="property-name">EVIDENCE STRENGTH</div>
    </div>
  </div>
  `.trim())
})
