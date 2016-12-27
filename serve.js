var express = require('express');
var path = require('path');
var app = express();
//var server = require('http').createServer(app);
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});
app.use(express.static(path.join(__dirname,'public')));
var server = app.listen('8888', function () {
   console.log(path.join(__dirname,'asset'));
});
var io = require('socket.io').listen(server);
io.on('connection', function (socket) {
    //console.log('用户连接');
    io.on('m', function (obj) {
        console.log(obj)
        io.sockets.emit('m',obj);
    });
    io.on('m1', function (obj) {
        io.sockets.emit('m1',obj);
    });
});