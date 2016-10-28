angular.module('contatooh').controller('ContatosController',
  function(Contato, $scope) {

    $scope.init = function(){
      $scope.contatos = [];
      $scope.filtro = '';
      $scope.mensagem = {texto: ''};
      findAll();
    }();

    $scope.remove = function(entity){
      Contato.delete({id:entity._id}, findAll, error);
    };

    function error(err){
      $scope.mensagem = {
        texto: 'Não foi possível realizar a solicitação.'
      };
      console.log("Não foi possível realizar a solicitação.");
      console.log(err);
    }

    function findAll(){
      Contato.query(function(contatos){
        $scope.contatos = contatos;
        console.log(contatos);
        $scope.mensagem = {};
      }, error);
    }

});
