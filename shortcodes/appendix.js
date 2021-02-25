module.exports = function info (tool) {
  return `
  <div class="appendix flex flex-wrap">
    <div class="w-full lg:w-1/2 border text-white border-white py-24 border-l-0 border-t-0">
      <div class="mx-auto w-3/4 align-middle">
        <h4 class="mb-1 mt-0">Tools</h4>
        <div class="small">${tool['Esempi di tool'].replace(/\\n/gi, '<br/>')}</div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 border text-white border-white py-24 border-l-0 border-r-0 border-t-0">
      <div class="mx-auto w-3/4 align-middle">
        <h4 class="mb-1 mt-0">Metriche</h4>
        <div class="small">${tool.Metriche.replace(/\\n/gi, '<br/>')}</div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 border text-white border-white py-24 border-t-0 border-l-0">
      <div class="mx-auto w-3/4 align-middle">
        <h4 class="mb-1 mt-0">Necessario</h4>
        <div class="small">${tool['Ti serviranno'].replace(/\\n/gi, '<br/>')}</div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 border text-white border-white py-24 border-t-0 border-l-0 border-r-0">
      <div class="mx-auto w-3/4 align-middle">
        <h4 class="mb-1 mt-0">Ostacoli</h4>
        <div class="small">${tool['Difficoltà maggiori'].replace(/\\n/gi, '<br/>')}</div>
      </div>
    </div>
  </div>
  `.trim()
}
