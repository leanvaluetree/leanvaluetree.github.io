module.exports = function properties (tool) {
  let properties = tool['Proprietà']
  properties = properties.match(/([\w\s]+\s\*+)/gi)
  if (!Array.isArray(properties) || properties.length === 0) return ''
  properties = properties.map(p => p.trim())
  properties = properties.map(p => {
    const name = p.match(/[\w\s]+/)[0].trim()
    const count = p.match(/\*+/)[0].length
    return {
      name,
      count
    }
  })
  return `
  <div class="properties">
    ${properties.map(p => `
    <div class="half">
      <div class="property-name">${p.name}</div>
    </div>
`.trim()).join('\n    ')}
  </div>
  `.trim()
}
