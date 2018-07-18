const express = require('express')
const app = express()
var path = require('path');

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(express.static('public/css'))
app.use(express.static('public/js'))
//app.use(express.static('public/static/media'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})