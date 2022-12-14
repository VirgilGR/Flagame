let express = require('express');
let app = express();
let port = 3000;

let bodyparser = require('body-parser');

app.set('view engine','ejs');
app.use(express.static(__dirname + '/www'));
app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js',express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/js',express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css',express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css',express.static(__dirname + '/www/css'));
app.use('/views',express.static(__dirname + '/views'));//redirect views
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.listen(port, () => {
    console.log("Le serveur est en route !")
    console.log(`Serveur listening at http://localhost:${port}`)
});

app.get('/',(req,res,next) => {
    // res.sendFile('www/index.html');
    res.render('accueil.ejs');
});

app.get('/index.ejs',(req,res,next) => {
    // res.sendFile('www/index.html');
    res.render('index.ejs');
});