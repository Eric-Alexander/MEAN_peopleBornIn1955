var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname+'/client'));

app.use(express.static(__dirname+'/bower_components'));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

var server = app.listen(8000, function(){
	console.log('+x+x+x+  I am listening to you, sir  +x+x+x+x+');
})