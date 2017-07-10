// server.js
// where your node app starts

// init project
var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'assets/' });
var app = express();



// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



app.post("/dreams", upload.single("myFile"), function (req, res) {
  console.log(req.file);
  var fileSize = {"size": req.file.size}
  res.json(fileSize);

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
