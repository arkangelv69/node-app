
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home - Un huevo de futbol' });
};

exports.team = function(req, res){
  res.render('index', { title: 'Team' });
};