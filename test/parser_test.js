const {expect} = require('chai');
const sinon = require('sinon')

const {parse} = require('../')

describe('parser', () =>  {
  it('should call the error and end event, html path not specified', () => {
    let _path = ''
    let _errorCalled = false
    let _endCalled = false

    parse(_path).on('error', () => {
      _errorCalled = true
    }).on('end', () => {
      _endCalled = true
    })

    expect(_errorCalled).to.be.true
    expect(_endCalled).to.be.true
  })
})
