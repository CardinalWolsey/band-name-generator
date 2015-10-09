var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app/'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var getRandomWord = require('./lib/getRandomWord');
var Adjective = require('./lib/adjective.js');
//could write the privous line and append '.Adjective'
var Noun = require('./lib/noun.js');
var adjective = new Adjective();

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started on port ' + port);
});

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function (req, res) {
  res.json(getRandomWord(adjective));
});

app.post('/adjective', function (req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});

app.get('/person', function (req, res) {
  res.json(person);
});

function postWord (word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'We already have your awesome word, ' + word + ', in our list.'};
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: 'Thanks for submitting ' + word + '!'};
};
