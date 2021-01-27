module.exports = function todo (tool) {
  return `
  <div class="todo">
    <h4 class="uppercase">To-Do</h4>
    <p>
      ${tool['To-do'].replace(/\\n/gi, '<br/>')}
    </p>
  </div>
  `.trim()
}
