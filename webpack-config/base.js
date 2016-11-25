var path = require('path');

var dirs = {};
// 项目根目录
dirs.rootDir = path.resolve(__dirname, '../');
// 项目业务代码根目录
dirs.srcRootDir = path.resolve(dirs.rootDir, './src');
// 存放所有不能用npm管理的第三方库
dirs.vendorDir = path.resolve(dirs.rootDir, './vendor');
// 存放由各种不常改变的js/css打包而来的dll
dirs.dllDir = path.resolve(dirs.rootDir, '.tmp/dll');
// 生成文件目录
dirs.buildDir = path.resolve(dirs.rootDir, './build');
// pages目录
dirs.pagesDir = path.resolve(dirs.srcRootDir, './pages');


// dirs.pagesDir = path.resolve(dirs.srcRootDir, './pages'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
// dirs.publicDir = path.resolve(dirs.srcRootDir, './public-resource'); // 存放各个页面使用到的公共资源
// dirs.logicDir = path.resolve(dirs.publicDir, './logic'); // 存放公用的业务逻辑
// dirs.libsDir = path.resolve(dirs.publicDir, './libs'); // 与业务逻辑无关的库都可以放到这里
// dirs.configDir = path.resolve(dirs.publicDir, './config'); // 存放各种配置文件
// dirs.componentsDir = path.resolve(dirs.publicDir, './components'); // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
// dirs.layoutDir = path.resolve(dirs.publicDir, './layout'); // 存放UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路


module.exports = dirs;
