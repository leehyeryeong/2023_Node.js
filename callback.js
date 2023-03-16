function somefunc(callback) {
  console.log("somefunc 실행");

  //somefunc의 기능을 수행하고 난 후에
  //callback()이 실행된다.
  callback();
}

function cb() {
  console.log("callback 함수 실행");
}

somefunc(cb);