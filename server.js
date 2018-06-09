const express = require('express');
const app = express();
app.use(express.static('dist'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/dist/index/" + "index.html");
})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(`Example app listening at http://localhost:${port}`)
})