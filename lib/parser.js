const fs = require('fs')
const htmlparser = require('htmlparser2')
const EventEmitter = require('events')

class HtmlPath extends EventEmitter {
  constructor(pathToHtml) {
    super()
    this._pathToHtml = pathToHtml;
  }

  parse() {
    //let html = fs.readFileSync(this._pathToHtml).toString()

    let handler = new htmlparser.DomHandler((err, dom) => {
      if (!!err) {
        return this.emit('e', err)
      }

      return this.emit('a', dom)
    })

    let parser = new htmlparser.Parser(handler)

    parser.write('<div><h1>1</h1><span>xyz</span></div>')
    parser.done()
  }
}

module.exports = HtmlPath
