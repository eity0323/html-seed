// loaders
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var dirs = require('./base.js');

module.exports = {
    preLoaders: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: dirs.srcRootDir,
        loader: 'eslint-loader',
    }],
    // 加载器配置
    loaders: [{
            test: /\.css$/,
            exclude: /(node_modules|bower_components|bootstrap)/,
            loader: ExtractTextPlugin.extract('css?minimize&-autoprefixer!postcss'),
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: { presets: ['es2015'] },
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css?minimize&-autoprefixer!postcss!sass'),
        }, {
            test: /\.html$/,
            loader: 'html',
        }, {
            test: /\.ejs$/,
            loader: 'ejs',
        }, {
            // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
            // 如下配置，将小于8192byte的图片转成base64码
            test: /\.(png|jpg|gif)$/,
            loader: 'url?limit=8192&name=resource/img/[hash].[ext]',
        }, {
            // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            loader: 'file?name=resource/fonts/[name].[ext]',
        },
        // 此loader配置项的目标是NPM中的jquery  先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
        // { test: require.resolve('jquery'), loader: 'expose?$!expose?jQuery' }
    ],
};
