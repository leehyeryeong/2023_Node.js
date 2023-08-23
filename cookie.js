const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get("/set", (req, res) => {
  res.cookie("name", "KY");
  res.cookie("age", 63);
  res.send("쿠키 set");
});

// 쿠기 읽기
app.get("/get", (req, res)=>{
  // 쿠키는 string이다
  const cookie = req.headers.cookie;
  if(cookie) {
    const name = req.cookies.name;
    // name이 존재한다면
    if(name) {
      res.send(`Hello ${name}`);
    }
    else {
      res.send("name이 존재하지 않음");
    }
  }
  else {
    res.send("쿠키가 없어요");
  }
});

app.listen(3000);