var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var ObjectID = mongo.ObjectID;
var _idProcurado = new ObjectID('580832c4361cdb019f4bdd2f');

MongoClient.connect('mongodb://127.0.0.1:27017/mongodb', function(erro, db) {
    if(erro) throw err;

    db.collection('contatos').findOne({_id : _idProcurado},
    function(erro, contato) {
      if(erro) throw err;
      console.log(contato);
    });
});
