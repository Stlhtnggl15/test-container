var io = require('socket.io').listen(7777);
var count = 0

io.sockets.on('connection', function(socket) {
    count++;
    io.sockets.emit('message', { count: count });

    io.sockets.on('disconnect', function(){
        count--;
        io.sockets.emit('message', { count: count });
    })
});