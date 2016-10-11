module.exports = function(){
  var controller = {};
  controller.index = function(req, res){
    //return page index.ejs
    res.render('index', {name: 'lucas'});
  };
  return controller;
}
