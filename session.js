const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true
  })
);

app.get("/", (req, res) => {
  if(req.session.user) {
    res.send(`안녕하세요 ${req.session.user}님`);
  }
  else {
    res.send("로그인이 필요합니다.");
  }
})

app.get("/login", (req, res) => {
  req.session.user = "KY";
  res.redirect("/");
})

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
})

app.listen(3000);