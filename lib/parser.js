const fs = require('fs')
const htmlparser = require('htmlparser2')
const EventEmitter = require('events')
const util = require('util')

exports.parse = function(pathToHtml) {
  let _ee = new EventEmitter()

  if (!pathToHtml) {
    _ee.emit('error', 'Path to the html file has to be specified.')
    _ee.emit('end')

    return _ee
  }

  if (fs.existsSync(pathToHtml)) {
    _ee.emit('error', 'Path to the html file has to be specified.')
    _ee.emit('end')

    return _ee
  }

  let _html = fs.readFileSync(pathToHtml).toString()

  let _handler = new htmlparser.DomHandler((err, dom) => {
    if (!!err) {
      _ee.emit('error', err)
      _ee.emit('end')

      return
    }

    _ee.emit('end', dom)
  })

  let _parser = new htmlparser.Parser(_handler)

  _parser.write(_html)
  _parser.done()

  return _ee
}
