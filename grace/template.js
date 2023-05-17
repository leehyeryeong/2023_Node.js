const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

//index.js에 넘겨줄 data
const index = {
  name: 'leehyeryeong',
  here: '한국'
};

const server = http.createServer(function(req, res) {
  console.log(req.url);

  res.setHeader('Content-Type', 'text/html');
  if(req.url === '/') {
    //renderFile(ejs 대상 경로, ejs에 넘겨줄 데이터)
    ejs.renderFile(path.join(__dirname, 'template', 'index.ejs'), 
    {name: index.name, here: index.here})
    .then((data) => res.end(data));
  }
  else if(req.url === '/food') {
    fs.createReadStream(path.join(__dirname, 'html', 'food.html')).pipe(res);
  }
  else {
    fs.createReadStream(path.join(__dirname, 'html', '404.html')).pipe(res);
  }
});

server.listen(3333);