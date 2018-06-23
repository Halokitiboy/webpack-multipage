window.$ = require('jquery');
window.jQuery = require('jquery');
// require('../../../node_modules/jquery-weui/dist/lib/zepto');

//使用bootstrap
// require('bootstrap'); 

//使用（微信）weui
require('../../../node_modules/jquery-weui/dist/js/jquery-weui.min');
// require('../../../node_modules/jquery-weui/dist/js/city-picker.min');
// require('../../../node_modules/jquery-weui/dist/js/swiper.min');
//加载头部和尾部
require('../include/footer');
require('../include/header');
//工具库
window._ = require('lodash');
console.log(`环境为：${process.env.NODE_ENV}`)