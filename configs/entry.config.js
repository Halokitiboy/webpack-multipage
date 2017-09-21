const path = require('path');
const pageArr = require('./pageArr.config.js');
var pagesDir = 'src'
const configEntry = {};
const libdir = './src/js/lib/';
configEntry['vendors'] = `${libdir}/public.js`;
pageArr.forEach((page) => {
    configEntry[page] = `./src/js/${page}`;
});
module.exports = configEntry