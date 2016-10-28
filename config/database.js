var mongoose = require('mongoose');

module.exports = function(uri) {

  mongoose.connect(uri, {server: {poolSize:15}});

  mongoose.connection.on('connected', function(){
    console.log('Mongoose! Conected in ' + uri);
  });

  mongoose.connection.on('disconnected', function(){
    console.log('Mongoose! Disconected in ' + uri);
  });

  mongoose.connection.on('error', function(){
    console.log('Mongoose! Error in connection ' + uri);
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      console.log('Mongoose! Desconectado pelo término da aplicação');
        // 0 indica que a finalização ocorreu sem erros
        process.exit(0);
      });
  });

  //Validar no terminal todos os comandos mongodb
  mongoose.set('debug',true);

}
