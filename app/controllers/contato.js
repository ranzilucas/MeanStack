module.exports = function(){
  var controller = {};
  var ID_INC = 3;
  var entities = [
    {_id: 1, nome: 'Contato Exemplo1', email: 'contato1@empresa.com.br'},
    {_id: 2, nome: 'Contato Exemplo2', email: 'contato2@empresa.com.br'},
    {_id: 3, nome: 'Contato Exemplo3', email: 'contato3@empresa.com.br'}
  ];

  controller.list = function(req, res){
      res.json(entities);
  };

  controller.findID = function(req, res){
    var id = req.params.id;
    var entity = entities.filter(function(entity){
      return entity._id == id;
    })[0];
    entity ? res.json(entity) : res.status(404).send("Não Encontrado.")
  };

  controller.remove = function(req, res){
    var id = req.params.id;
    entities = entities.filter(function(entity){
      return entity._id != id;
    });
    res.sendStatus(204).end();
  };

  controller.save = function(req, res){
    console.log('save');
    var entity = req.body;
    entity = entity._id ? update(entity) : add(entity);
    res.json(entity);
  };

  function add(e) {
   e._id = ++ID_INC;
   entities.push(e);
   return e;
  }

  function update(entity) {
   entities = entities.map(function(e) {
     if(e._id == entity._id) {
       e = entity;
     }
     return e;
   });
   return entity;
  }

  return controller;
}
