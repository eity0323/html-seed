// 页面入口文件配置
const path = require('path');
const dirs = require('./base.js');
const glob = require('glob');

const globInstance = glob('!(_)*/!(_)*', {
    cwd: path.resolve(dirs.srcRootDir, 'pages'),
    sync: true,
});

const entry = {};
globInstance.forEach((page) => {
    entry[page] = path.resolve(dirs.pagesDir, page + '/index.js');
});

module.exports = entry;

// { 'home/about': 'E:\\github\\react-seed\\src\\pages\\home\\about\\index.js',
//   'home/index': 'E:\\github\\react-seed\\src\\pages\\home\\index\\index.js',
//   'stats/index': 'E:\\github\\react-seed\\src\\pages\\stats\\index\\index.js' }
