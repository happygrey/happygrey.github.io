let setCache = function (req, res, next) {
      // for the other requests set strict no caching parameters
      res.set('Cache-control', `no-cache, no-store, must-revalidate`)

    // remember to call next() to pass on the request
    next()
  }
  

var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
app.use(setCache)
app.use(serveStatic(__dirname))
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)