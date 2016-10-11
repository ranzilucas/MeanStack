var controller = require('./app/controller/home');
module.exports = function(app){
  app.get('/index', controller.index);
  app.get('/', controller.index);
}
