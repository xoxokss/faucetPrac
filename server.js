var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  res.render('pages/index', {
    one: "this is one",
    two: "this is two"
  })
});
app.post('/address', function (req, res) {
  const walletAddress = req.body
  console.log(walletAddress)
  res.send(walletAddress)
})

// about page
app.get('/about', function (req, res) {
  res.render('pages/about');
});

app.listen(8003);
console.log('Server is listening on port 8003');
