var http = require('http');
var connect = require('connect');

var app = connect();
app.use(function(req, res) {
    res.end('Hello!');
});

http.createServer(app).listen(3000);