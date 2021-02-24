module.exports = function todo (tool) {
  // console.log(tool['To-do'])
  const bullet = `
  <svg class="inline mr-4" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 8.92578C4.58172 8.92578 1 5.34406 1 0.925781" stroke="#201D25" stroke-width="2"/>
    <path d="M9 8.92578C4.58172 8.92578 1 12.5075 1 16.9258" stroke="#201D25" stroke-width="2"/>
  </svg>
  `

  return `
  <div class="todo">
    <h3 class="uppercase">To-Do</h3>
    <p>
      ${tool['To-do'].replace(/- /gmi, bullet).replace(/\\n/gi, '<br/><br/>')}
    </p>
  </div>
  `.trim()
}
