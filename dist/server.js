let setCache = function (req, res, next) {
    // for the other requests set strict no caching parameters
    res.set('Cache-control', 'no-cache, no-store, must-revalidate');

    // remember to call next() to pass on the request
    next()
};

const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
app = express()
app.use(setCache)
app.use(serveStatic(__dirname))
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)