const str = "Hello World";

console.log(str.length);              //11, 띄어쓰기 포함

//문자열 쪼개기(본체는 변하지 않음)
console.log(str.slice(1, 5));         //ello
console.log(str.slice(1));            //ello World
console.log(str.slice(-2));           //ld

//문자열 대체(본체는 변하지 않음)
a = str.replace('world', 'everyone'); //Hello everyone
console.log(a);

//대소문자로 변환
console.log(str.toUpperCase());       //HELLO WORLD
console.log(str.toLowerCase());       //hello world

//문자열 포함 여부
console.log(str.includes('World'));   //true
console.log(str.includes('hello'));   //false(h가 대문자여야 함)

console.log(str);