module.exports = function usefulness (tool) {
  // let properties = tool['Proprietà']
  // properties = properties.match(/([\w\s]+\s\*+)/gi)
  // if (!Array.isArray(properties) || properties.length === 0) return ''
  // properties = properties.map(p => p.trim())
  // properties = properties.map(p => {
  //   const name = p.match(/[\w\s]+/)[0].trim()
  //   const count = p.match(/\*+/)[0].length
  //   return {
  //     name,
  //     count
  //   }
  // })
  return `
  <div class="usefulness">
    <h3 class="uppercase">Perfetto se...</h3>
    <p>
      ${tool['Perfetto se...']}
    </p>
  </div>
  `.trim()
}
