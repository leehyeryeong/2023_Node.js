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
    //스트리밍 방식으로 index의 html 코드들을 전송(대용량 처리에 유리)
    //파일 입출력: 파일을 한꺼번에 처리함
    //스트림: 파일을 부분적으로 쪼개서 실시간으로 처리함
    ejs.renderFile(path.join(__dirname, 'template', 'index.ejs'), 
    {name: index.name, here: index.here}, 
    function(err, data) {
      res.end(data);
    });
  }
  else if(req.url === '/food') {
    fs.createReadStream(path.join(__dirname, 'html', 'food.html')).pipe(res);
  }
  else {
    fs.createReadStream(path.join(__dirname, 'html', '404.html')).pipe(res);
  }
});

server.listen(3333);