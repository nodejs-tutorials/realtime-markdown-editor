var express = require('express');
var app     = express();


app.set('view engine','ejs');

app.use(express.static(__dirname+'/public'));

app.get('/', function (req,res) {
    res.render('pad');

});

var port = process.env.PORT || 8000;
app.listen(port);

console.log('Server is started: http://localhost:8000');