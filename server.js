const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var startTimeArr;
var wordArr;


app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json())

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/words', function (req, res) {
  startTimeArr = req.body.startTimeArr;
  wordArr = req.body.wordArr;
  res.end();
});

app.get('/words', function (req, res) {
  res.json({
    startTimeArr: startTimeArr,
    wordArr: wordArr,
  })
})

// DO NOT REMOVE THIS LINE :)
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 1337);
