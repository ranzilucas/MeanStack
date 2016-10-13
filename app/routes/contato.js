module.exports = function(app){
  var controller = app.controllers.contato;

  app.route('/contatos')
    .get(controller.list)
    .post(controller.save);

  app.route('/contatos/:id')
    .get(controller.findID)
    .delete(controller.remove);;
};
