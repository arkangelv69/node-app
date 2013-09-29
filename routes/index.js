
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('black/page/page', { title: 'Home - Un huevo de futbol' });
};

exports.post = function(req, res){
  var task = new Task(req.body.task);
  task.save(function (err) {
    if (!err) {
      res.redirect('/');
    }
    else {      
      res.redirect('/tasks');
    }
  });
};

exports.team = function(req, res){
  res.render('index', { title: 'Team' });
};