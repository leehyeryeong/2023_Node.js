const cathy = {
  "name": "cathy",
  "age": 3,
  "skills": ["자바스크립트", "인공지능", "자바", "리액트", "코볼"]
};

console.log(cathy);
console.log(cathy.name);

//기존의 속성값을 key/value 형태로 쉽게 바꿀 수 있다.
cathy["name"] = "만복이";
console.log(cathy["name"]);

//JavaScript는 기존에 없던 속성도 추가할 수 있다.
cathy["성별"] = "female";
console.log(cathy.성별);