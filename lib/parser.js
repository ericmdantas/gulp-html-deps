const fs = require('fs')
const htmlparser = require('htmlparser2')
const EventEmitter = require('events')

class HtmlPath extends EventEmitter {
  constructor(pathToHtml) {
    super()
    this._parseHtml(pathToHtml)
  }

  _parseHtml(pathToHtml) {
    //let html = fs.readFileSync(pathToFile).toString()

    let handler = new htmlparser.DomHandler((err, dom) => {
      if (!!err) {
        return this.emit('e', err)
      }

      return this.emit('a', dom)
    })

    let parser = new htmlparser.Parser(handler)

    parser.write('<h1>1</h1>')
    parser.done()
  }
}

module.exports = HtmlPath
