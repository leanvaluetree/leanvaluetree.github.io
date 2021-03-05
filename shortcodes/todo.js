module.exports = function todo (tool) {
  return `
  <div class="todo">
    <h3>To-do</h3>
    <ul class="list-with-arrows">
      ${tool['To-do']
        .replace(/- /gmi, '')
        .split(/\\n/)
        .filter(Boolean)
        .map(c => `<li>${c}</li>`).join('')}
    </ul>
  </div>
  `.trim()
}
