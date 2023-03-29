const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req, res) {
  let url = req.url;

  if(url === '/') {
    url = '/index.html';
  }
  if(url === '/favico.ico') {
    return res.writeHead(404);
  }
  res.writeHead(200);
  //__dirname = 'E:\3307 이혜령\2023_Node.js' + url: /index.html
  const htmlCode = fs.readFileSync(__dirname + url);

  res.end(htmlCode);
});

app.listen(3333);