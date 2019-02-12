const express = require('express');
const ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var messenger = require('./models/model.messenger.js');

const fileUpload = require('express-fileupload');
var cloudinary = require('cloudinary');

mongoose.connect('mongodb://chailo:chailo123@ds163014.mlab.com:63014/mydb', { useNewUrlParser: true });

const app = express();
var post = 4000;

cloudinary.config({
    cloud_name: 'xuanhung2401',
    api_key: '882796476526336',
    api_secret: 'gOOT_72AMyn9TQz1Hd4MxyGRjxY'
});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/',function (req, res) {
    res.render('client/home');
});

app.post('/',function (req, res) {
    var mes = {
        nguoinhan: req.body.nguoinhan,
        nguoigui: req.body.nguoigui,
        messenger: req.body.messenger
    };

    if (req.files && req.files.thumbnail != undefined) {
        var fileGettingUploaded = req.files.thumbnail.data;
        cloudinary.uploader
            .upload_stream(function (result,error) {
                var imageUrl = result.url;
                mes.thumbnail = imageUrl;
                messenger.create(mes);
                res.redirect("/show");
// res.send("Lưu sản phẩm thành công.");
// console.log(cloudinary.image(result.public_id, {format: "jpg", crop: "fill", width: 120, height: 80}));
            })
            .end(fileGettingUploaded);
    } else {
        console.log("Have no file");
        mes.thumbnail = "https://www.touchtaiwan.com/images/default.jpg";
        messenger.create(mes);
        res.send("Lưu sản phẩm thành công.");
    }
});

app.get('/show',function (req, res) {
    messenger.find().exec(function (err, messenger) {
        res.render('client/show', {messenger: messenger});
    });
});

app.listen(post, () => console.log("Chạy thành Công ở cổng " + post));