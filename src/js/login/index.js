require('../../css/main.less');
var objects = [{
    'x': 1,
    'y': 2
}, {
    'x': 2,
    'y': 1
}];
console.log('我是来自login的js', _.differenceWith(objects, [{
    'x': 1,
    'y': 2
}], _.isEqual), $('p').text())
console.log()