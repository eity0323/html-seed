module.exports = {
    ejsBaseUrl: 'src', //ejs根目录
    distUrl: 'dist', //输出根目录
    dataBaseUrl: 'src', //json数据根目录
    pages: [
        { page: 'index.html', ejs: 'index.ejs', data: { title: '首页'} },
        { page: 'about.html', ejs: 'about.ejs', data: { title: '关于我们'} },
        { page: 'business-exchange.html', ejs: 'business-exchange.ejs', data: { title: '行业交流'} },
        { page: 'contact.html', ejs: 'contact.ejs', data: { title: '联系我们'} },
        { page: 'oral-advice.html', ejs: 'oral-advice.ejs', data: { title: '口腔咨询'} },
        { page: 'oral-leading.html', ejs: 'oral-leading.ejs', data: { title: '口腔前沿'} },
        { page: 'product-description.html', ejs: 'product-description.ejs', data: { title: '产品介绍'} },
    ]
}
