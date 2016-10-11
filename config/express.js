//config express
var express = require('express');
module.exports = function(){
    var app = express();
    var home = require('./../app/routes/home');

    //variaveis de ambiente
    app.set('port', 3000);
    //middleware
    app.use(express.static('./public'));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    home(app);

    return app;
}