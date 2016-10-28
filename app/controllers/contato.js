module.exports = function(app){

  var Contato = app.models.contato;
  var controller = {};

  controller.list = function(req, res){
      Contato.find().populate('emergencia').exec().then(function(entities){
          res.json(entities);
      }, function(error){
          console.error(error);
          res.sendStatus(500).end();
      });
  };

  controller.findID = function(req, res){
    var _id = req.params.id;

    Contato.findById(_id).exec().then(function(entity){
      if(!entity) throw new Error("Contato não encontrado.");
      res.json(entity);
    }, function(error){
      console.error(error);
      res.sendStatus(404).end();
    });
  };

  controller.remove = function(req, res){
    var _id = req.params.id;
    Contato.remove({"_id" : _id}).exec().then(function(){
      res.end()
    },function(error){
      console.error(error);
      res.sendStatus(204).end();
    });
  };

  controller.save = function(req, res){
    var _entity = req.body;

    _entity.emergencia = _entity.emergencia || null;

    if(_entity._id){
      Contato.findByIdAndUpdate(_entity._id, _entity).exec().then(
        function(entity){
            res.json(entity);
        }, function(error){
          console.error(error);
          res.sendStatus(500).end();
        }
      );
    }else{
      Contato.create(_entity).then(
        function(entity){
            res.json(entity);
        }, function(error){
          console.error(error);
          res.sendStatus(500).end();
        }
      )
    }
  };

  return controller;
}
