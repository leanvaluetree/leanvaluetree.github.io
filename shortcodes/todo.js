module.exports = function usefulness (tool) {
  return `
  <div class="todo">
    <h3 class="uppercase">To-Do</h3>
    <p>
      ${tool['To-do'].replace(/\\n/gi, '<br/>')}
    </p>
  </div>
  `.trim()
}
