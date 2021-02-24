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
  <div class="properties ovh">
    ${properties.map(p => `
    <div class="property py-3">
      <div class="small-label">${p.name}</div>
      <div class="property-count">${'<div class="filled-circle"></div>'.repeat(p.count)}${'<div class="empty-circle"></div>'.repeat(5 - p.count)}</div>
    </div>
`.trim()).join('\n    ')}
  </div>
  `.trim()
}
