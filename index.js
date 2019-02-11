const express = require('express');
const ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var messenger = require('./models/model.messenger.js');

const fileUpload = require('express-fileupload');
var cloudinary = require('cloudinary');

mongoose.connect('mongodb://admin:admin123@ds331145.mlab.com:31145/hpny', { useNewUrlParser: true });

const app = express();
var post = 3333;
cloudinary.config({
    cloud_name: 'aptechaaa',
    api_key: '526575171756629',
    api_secret: 'eZ2NHOdPR_pXU9rThNe1W6ewEfQ'
});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/',function (req, res) {
    res.render('client/home');
});

app.post('/',function (req, res)  {
        messenger.create(req.body);
        res.redirect('/show')
});

app.get('/show',function (req, res) {
    messenger.find().exec(function (err, messenger) {
        res.render('client/show', {messenger: messenger});
    });
});

app.listen(post, () => console.log("Chạy thành Công ở cổng " + post));