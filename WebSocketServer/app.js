var server = require('websocket').server, http = require('http');

var socket = new server({
  httpServer: http.createServer().listen(1337)
});

socket.on('request', function (request) {
  var connection = request.accept(null, request.origin);
  var msg = {
    route_id: 10,
    status: "onroute",
    deliveries: 9,
    completed_at: "2017-01-01T17:20:00"
  }
  connection.send(JSON.stringify(msg))
  

  connection.on('close', function (connection) {
    console.log('connection closed');
  });
});