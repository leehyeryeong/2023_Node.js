const express = require("express");
const path = require("path");
const expressSession = require("express-session");

const app = express();
app.set("view engine", "ejs");

// 정적인 파일(index.html)을 편하게 가져오기
app.use(express.static(path.join(__dirname, "public")));

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  expressSession({
    secret: "fjs343fd",
    resave: true,
    saveUninitialized: true
  })
);

app.get("/", (req, res) => {
  // 쿠키에 세션 아이디가 있으면
  if(req.session.user) {
    console.log("이미 로그인된 상태");
    return res.render(path.join(__dirname, "views", "loging")
    , {username: req.session.user.id})
  }
  // 없으면 로그인 페이지로
  else {
    res.redirect("index.html");
  }
});

app.listen(3000);