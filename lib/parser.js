const fs = require('fs')
const htmlparser = require('htmlparser2')

exports.parse = function(pathToHtml) {
  if (!pathToHtml) {
    throw new Error(`Path to the html file has to be specified.`)
  }

  if (!fs.existsSync(pathToHtml)) {
    throw new Error(`The file doesn't exist.`)
  }

  let _html = fs.readFileSync(pathToHtml).toString()

  let _handler = new htmlparser.DomHandler((err, dom) => {
    if (!!err) {
      throw new Error(err)
    }
  })

  let _parser = new htmlparser.Parser(_handler)

  _parser.write(_html)
  _parser.done()

  return _handler.dom
}
