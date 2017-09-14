const path = require('path');
const pageArr = require('./pageArr.config.js');
var pagesDir = 'src'
const configEntry = {};
const libdir = './src/js/lib/';
//依项目情况使用 jq 还是 zepto
configEntry.vendors = [
    `${libdir}/jquery.2.1.0.js`,
    `${libdir}/lodash.js`,
    // `${libdir}/zepto.js`
];
pageArr.forEach((page) => {
    configEntry[page] = path.resolve(pagesDir, 'js/' + page);
});
module.exports = configEntry