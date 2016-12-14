let HtmlPath = require('./lib')
let x = new HtmlPath()

x.on('a', (info) => {
  console.log(info)
})

x.on('e', (err) => {
  console.log(err)
})

x.parse()
