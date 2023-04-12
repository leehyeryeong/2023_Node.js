const arr = ['apple', 'banana', 'cherry', 'apple'];

// data: 데이터, index: 데이터에 해당하는 idx(생략가능)
arr.forEach(function(data, index) {
  //console.log(`${index} : ${data}`);
});

// return 값이 true에 해당하는 idx 반환. 없으면 -1을 반환
const cherryIndex = arr.findIndex(data => data === 'cherry');
//console.log(cherryIndex);

// 3번 index부터 'cherry'에 해당하는 idx를 찾음, 없으면 -1
const a = arr.indexOf('cherry', 3);
console.log(a);

// 배열 끝부분에 data 추가
arr.push('grape');
// console.log(arr);

// 배열 끝부분의 데이터를 꺼냄
const x = arr.pop();
// console.log(x);
// console.log(arr);