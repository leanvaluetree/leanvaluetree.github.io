const fsp = require('fs').promises
const path = require('path')

async function main () {
  console.log('generate-tools-from-tsv')
  const tsvContents = await fsp.readFile(path.resolve(__dirname, '_data', 'tools.tsv'), { encoding: 'utf8' })
  const tsvByLines = tsvContents.split('\n')
  const header = tsvByLines.splice(0, 1)[0]
  // console.log(tsvByLines)
  // console.log(header)
  const fields = header.split('\t').map(t => t.replace('\r', ''))
  // console.log(header, fields)
  const json = tsvByLines
    .map(tsvLineToObject(fields))
    .filter(t => t['Nome tool'])
    .map(addPermalink)

  // console.log(json)
  await fsp.writeFile(path.resolve(__dirname, '_data', 'tools.json'), JSON.stringify(json, null, 2), { encoding: 'utf8' })
}

main()
  .then(() => process.exit(0))
  .catch((err) => console.error(err) && process.exit(1))

function tsvLineToObject (fields) {
  return line => line
    .split('\t')
    .map(l => l.replace('\r', ''))
    .reduce((acc, curr, index) => ({ ...acc, [fields[index]]: curr }), {})
}

function addPermalink (tool) {
  return {
    ...tool,
    url: '/' + tool['Nome tool'].toLowerCase().replace(/\s/gi, '-').replace(/\//gi, '-') + '/'
  }
}
