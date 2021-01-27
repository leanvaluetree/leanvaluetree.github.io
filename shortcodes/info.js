module.exports = function info (tool) {
  return `
  <div class="info ovh">
    <div class="py-3">
      <div class="small uppercase font-bold">Fase</div>
      <div class="small">${tool.Fase}</div>
    </div>
    <div class="py-3">
      <div class="small uppercase font-bold">Dream team</div>
      <div class="small">${tool['Dream team']}</div>
    </div>
    <div class="py-3">
      <div class="small uppercase font-bold">Anche conosciuto come</div>
      <div class="small">${tool['Anche conosciuto come']}</div>
    </div>
    <div class="py-3">
      <div class="small uppercase font-bold">Prerequisiti</div>
      <div class="small">${tool['Prerequisiti necessari']}</div>
    </div>
  </div>
  `.trim()
}
