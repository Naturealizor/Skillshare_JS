// global.__basedir = __dirname
// const yourModule = require(__basedir + '/path/to/module.js')


// var msg = 'Hello World'
// console.log(msg)

// script to reveal file path
var path = require('path')
var appDir = path.dirname(require.main.filename)
console.log(appDir)
// , " ", appDir
