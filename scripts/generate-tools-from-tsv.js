#!/usr/bin/env node
const fsp = require('fs').promises
const path = require('path')

async function main () {
  console.log('generate-tools-from-tsv')
  const dataPath = path.resolve(__dirname, '..', '_data')
  const tsvContents = await fsp.readFile(path.resolve(dataPath, 'tools.tsv'), { encoding: 'utf8' })
  const tsvByLines = tsvContents.split('\n')
  const header = tsvByLines.splice(0, 1)[0]
  const fields = header.split('\t').map(t => t.replace('\r', ''))
  const json = tsvByLines
    .map(tsvLineToObject(fields))
    .filter(t => t['Nome tool'] && !['4', '5'].includes(t['ID']))
    .map(addPermalink)

  console.log(json)
  await fsp.writeFile(path.resolve(dataPath, 'tools.json'), JSON.stringify(json, null, 2), { encoding: 'utf8' })
  console.log('successfully saved _data/tools.json')
}

main()
  .then(() => process.exit(0))
  .catch((err) => console.error(err) && process.exit(1))

function tsvLineToObject (fields) {
  return line => line
    .split('\t')
    // .map(l => l.replace('\r', ''))
    .reduce((acc, curr, index) => ({ ...acc, [fields[index]]: curr }), {})
}

function addPermalink (tool) {
  const normalized = tool['Nome tool'].toLowerCase().trim().replace(/\s/gi, '-').replace(/\//gi, '-')
  return {
    ...tool,
    normalized,
    image: normalized + '.svg',
    url: '/' + normalized + '/'
  }
}
