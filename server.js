mime = require('mime');
express = require('express');

var app = express.createServer();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

mime.define({'text/cache-manifest': ['manifest']});

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact/?', function(req, res){
  res.render('contact');
});

app.listen(process.env.PORT || 3000);

