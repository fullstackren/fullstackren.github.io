const fs = require('fs');
const path = require('path');

// 获取跟目录路径
const rootDir = path.resolve(__dirname, '..');

// 获取跟目录路径下所有文件目录
const dirsList = fs.readdirSync(rootDir);
const blackDirsList = ['.DS_Store', '.git', '.github', '.gitignore', '.vscode', '.vuepress', 'LICENSE', 'README.md'];
const whiteDirsList = [];

dirsList.forEach(item => {
  if(!blackDirsList.includes(item)) {
    whiteDirsList.push(item);
  }
})

console.log(whiteDirsList)