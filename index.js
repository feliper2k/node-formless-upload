var express = require('express')
var multer  = require('multer')
var upload = multer({
    dest: 'uploads/'
});

var app = express();

app.use(express.static('.'));

app.post('/upme', upload.single('myData'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.status('200').end(JSON.stringify(req.file));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
