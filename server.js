const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

router.post('/login', function (req, res) {
    var name = req.param('name');
    var pwd = req.param('pwd');
    if (name === "john" && pwd === "111") {
        res.json({'message': 'success'});
    }
    else
        res.json({'message': 'wrong'});
});

router.get('/user/:uid', function (req, res) {
    res.json({'uid':parseInt(req.param('uid'))});
});


app.use('/api', router);

app.use('/', function (req, res) {
    res.json({message: 'api index'});
});

app.listen(3000);

console.log('begin');