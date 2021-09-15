const path = require('path')
const fs = require('fs-extra')
const pdf = require('pdf-parse')

const downloadsPath = path.join(__dirname, '..', '..', 'downloads')

module.exports = (on, config) => {
  on('task', {
    getPdfContent(pdfName) {
      const pdfPathname = path.join(downloadsPath, pdfName)
      let dataBuffer = fs.readFileSync(pdfPathname)
      return pdf(dataBuffer)
    },
  })

  function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('src/config', `${file}.json`)
    return fs.readJson(pathToConfigFile)
  }
  const file = config.env.environment || 'at22'
  return getConfigurationByFile(file)
}
