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

  //base 폴더에 있는 
  const arrayOfFiles = getAllFiles(baseDir, []);

  //중복된 파일들(절대 경로) list
  const duplicatedFiles = [];

  //file: 파일의 절대 경로(string)
  arrayOfFiles.forEach(function(file, idx) {
    //절대 경로에서 파일 이름만 추출
    const fileName = path.basename(file);

    //같은 파일명을 가진 경로의 idx, 없으면 -1을 반환
    const dulicatedIdx = arrayOfFiles.findIndex(function(otherFile, otherIdx) {
      if(otherIdx > idx && otherFile.includes(fileName)) {
        return true;
      } else {
        return false;
      }
    });

    //중복된 파일이 존재한다면
    if(dulicatedIdx > -1) {
      const dulpicatedFile = arrayOfFiles[dulicatedIdx];
      console.log(file);
      console.log(duplicatedFiles);

      duplicatedFiles.push(file);
      duplicatedFiles.push(dulpicatedFile);
    }
  });

  return duplicatedFiles;
}

// const files = getAllFiles(__dirname + "\\base", []);
// console.log(files.join('\n'));

const files = getDuplicated(path.join(__dirname, 'base'));
console.log(files.join('\n'));