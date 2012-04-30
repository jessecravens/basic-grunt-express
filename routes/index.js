
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.tests = function(req, res){
  res.render('tests', { title: 'Express Tests' })
};