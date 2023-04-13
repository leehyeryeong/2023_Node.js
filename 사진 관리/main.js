const fs = require('fs');
const path = require('path');

//dirPath에 있는 모든 파일 목록의 배열(하위경로까지)
function getAllFiles(dirPath, arrOfFiles) {
  //dirPath에 있는 모든 파일 목록의 배열(하위경로는 불가)
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const destPath = dirPath + "\\" + file;
    
    //폴더(디렉토리)라면 해당 폴더에 있는 모든 파일 목록들을 체크한다
    if(fs.statSync(destPath).isDirectory()) {
      getAllFiles(destPath, arrOfFiles);
    } else {
    //파일이라면 파일 목록에 추가
      arrOfFiles.push(destPath);
    }
  });

  return arrOfFiles;
}

//해당 디렉토리가 존재하는지 유효성 검사
function getDuplication(baseDir) {
  if(!fs.existsSync(baseDir)) {
    console.log('폴더가 존재하지 않음');
    return;
  }

  const dulpicatedDir = path.join(baseDir, 'duplicated');

  if(!fs.existsSync(dulpicatedDir))
    fs.mkdirSync(dulpicatedDir);

  const arrayOfFiles = getAllFiles(baseDir, []);

  //중복된 파일들(절대 경로) list
  const duplicatedFiles = [];
}

// const files = getAllFiles(__dirname + "\\base", []);
// console.log(files.join('\n'));

getDuplication(path.join(__dirname, 'base'));