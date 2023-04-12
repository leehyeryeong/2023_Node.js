const fs = require('fs');
const files = fs.readdirSync(__dirname);

//특정 파일의 전체(절대) 경로
//result = __dirname + '\\' + files[i]
//문자열 합치는 것보다 join을 사용하는 것을 권장
result = path.join(__dirname, files[i]);
console.log(result);

//해당 파일에 대한 정보를 알 수 있음
console.log(fs.stateSync(result));