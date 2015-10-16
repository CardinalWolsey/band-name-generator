var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app/'));
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var getRandomWord = require('./lib/getRandomWord');
var postWord = require('./lib/postWord.js');

var Adjective = require('./lib/adjective.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');

var adjective = new Adjective();
var noun = new Noun();
var verb = new Verb();

app.listen(port, function() {
  console.log('server started on port ' + port);
});

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function (req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/noun', function (req, res) {
  res.json(getRandomWord(noun));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.post('/adjective', function (req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});

app.post('/noun', function (req, res) {
  var word = postWord(req.body.word, noun);
  res.json(word);
});

app.post('/verb', function (req, res) {
  var word = postWord(req.body.word, verb);
  res.json(word)
});



