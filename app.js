
/**
 * Module dependencies.
 */
var express = require('express')
  , home = require('./routes')
  , aligment = require('./routes/aligment')
  , team = require('./routes/team')
  , calendar = require('./routes/calendar')
  , classification = require('./routes/classification')
  , stadium = require('./routes/stadium')
  , card = require('./routes/card')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , passport = require('passport')
  , stylus = require('stylus');

mongoose.connect('mongodb://node:.node.@paulo.mongohq.com:10037/app18060630');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

function validatePresenceOf(value) {
  return value && value.length;
}

var Task = new Schema({
  task : { type: String, validate: [validatePresenceOf, 'a task is required'] }
});

var Task = mongoose.model('Task', Task);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//routes
app.get('/', home.index);
app.post('/', home.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
