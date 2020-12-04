module.exports = function info (tool) {
  return `
  <div class="info ovh">
    <div class="half">
      <div class="small uppercase mb-small">Anche conosciuto come</div>
      <div class="small">${tool['Anche conosciuto come']}</div>
    </div>
    <div class="half">
      <div class="small uppercase mb-small">Prerequisiti</div>
      <div class="small">${tool['Prerequisiti necessari']}</div>
    </div>
    <div class="half">
      <div class="small uppercase mb-small">Esempi di tool</div>
      <div class="small">${tool['Esempi di tool']}</div>
    </div>
    <div class="half">
      <div class="small uppercase mb-small">Dream team</div>
      <div class="small">${tool['Dream team']}</div>
    </div>
    <div class="half">
      <div class="small uppercase mb-small">Ti serviranno</div>
      <div class="small">${tool['Ti serviranno']}</div>
    </div>
    <div class="half">
      <div class="small uppercase mb-small">Metriche</div>
      <div class="small">${tool.Metriche}</div>
    </div>
    <div class="half">
      <div class="small uppercase mb-small">Difficoltà maggiori</div>
      <div class="small">${tool['Difficoltà maggiori']}</div>
    </div>
    <div class="half">
      <div class="small uppercase mb-small">Fase</div>
      <div class="small">${tool.Fase}</div>
    </div>
  </div>
  `.trim()
}