
/*
 * GET users listing.
 */

exports.user = function(req, res){
  res.render('index', { title: 'Home - Un huevo de futbol' });
};