#! /usr/bin/env node

const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type':'text/html'});
  res.write('<h1>It works!</h1>');
  res.end();
  res.end();
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

console.log('Listening on port ' + process.argv[2])
server.listen(process.argv[2])
