const path = require('path');
const Arr= require ('./pageArr.config.js');
var pagesDir = 'src'
const configEntry = {};
const libdir = './src/js/lib/';
configEntry['vendors'] = `${libdir}/public.js`;
Arr['jsArr'].forEach((page) => {
    configEntry[page] = `./src/js/${page}`;
});
module.exports = configEntry