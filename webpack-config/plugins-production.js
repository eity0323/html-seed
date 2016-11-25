var plugins = require('./plugins.js');
var webpack = require('webpack');

// definePlugin 接收字符串插入到代码当中
var DefinePlugin = new webpack.DefinePlugin({
    IS_PRODUCTION: true,
});
// js代码压缩
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
    },
});

plugins.push(DefinePlugin);
plugins.push(UglifyJsPlugin);

module.exports = plugins;
