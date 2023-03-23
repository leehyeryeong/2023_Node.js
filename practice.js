const http = require('http');

const port = 3000;

const server = http.createServer(function(req, res) {
  //http header
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  //http body(실제 데이터)
  res.end("Hello World");
});

server.listen(port, function() {
  console.log(`listen ${port}`);
});