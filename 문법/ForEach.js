const fruits = ['사과', '바나나', '오렌지'];

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//forEach문
fruits.forEach(function(f){
  console.log(f);
});

for(const f of fruits) {
  console.log(f);
}