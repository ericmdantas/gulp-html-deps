const {expect} = require('chai');
const sinon = require('sinon')

const {parse} = require('../')

const HTML_EMPTY_PATH = './test/_fixture/empty.html'
const HTML_SIMPLE_PATH = './test/_fixture/simple.html'
const HTML_COMPLEX_PATH = './test/_fixture/complex.html'

describe('parser', () =>  {
  it('should call the error and end event, html path not specified', () => {
    let _path = ''

    expect(() => parse(_path)).to.throw(Error, /has to be specified/)
  })

  it('should call the error and end event, html path not specified', () => {
    let _path = 'doesnt/exist/anywhere'

    expect(() => parse(_path)).to.throw(Error)
  })

  it('should return an empty array, html is empty', () => {
    let _path = HTML_EMPTY_PATH

    expect(parse(_path)).to.be.an.array
    expect(parse(_path)).to.deep.equal([])
  })

  it('should return 3 scripts and 3 css, html is simple', () => {
    let _path = HTML_SIMPLE_PATH

    expect(parse(_path)).to.be.an.array
    expect(parse(_path)).to.deep.equal([
      'a.js',
      'b.js',
      'c.js',

      'a.css',
      'b.css',
      'c.css',
    ])
  })

  it('should return 5 scripts and 5 css, html is complex', () => {
    let _path = HTML_COMPLEX_PATH

    expect(parse(_path)).to.be.an.array
    expect(parse(_path)).to.deep.equal([
      'a.js',
      'b.js',
      'c.js',
      'd.js',
      'e.js',

      'a.css',
      'b.css',
      'c.css',
      'd.css',
      'e.css',
    ])
  })
})
