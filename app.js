
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , _ = require('underscore')
  , MongoStore = require('connect-mongo')(express)
  , async = require('async')

var cms = require('./lib/cms');


cms.add('home_infopics',{
	
	fields:{
		name:{type:'string'},
		description:{type:'string', multi:true},
		image:{type:'image', maintain_ratio:false,  crop_height:150, crop_width:240, sizes:[{prefix:"medium", width:240, height:180,}, {prefix:"mediumbig", width:370, height:370}]}		
	}
});

cms.add('jobs_posts',{
	
	fields:{
		name:{type:'string'},
		description:{type:'string', multi:true, rtl:true},
		image:{type:'image', maintain_ratio:false,  crop_height:230, crop_width:370, sizes:[{prefix:"medium", width:240, height:180,}, {prefix:"mediumbig", width:370, height:370}]},
		expiry:{type:'string', datepicker:true},
		documents:{type:'string'}
	}
});

var app = express();

// all environments
app.set('port', process.env.PORT || 3099);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.cookieParser("herro"));
app.use(express.json());
app.use(express.urlencoded());
//app.use(connect.multipart());
app.use(express.session({secret:"herro",store: new MongoStore({url:'mongodb://127.0.0.1:27017/rol'}), cookie: { maxAge: 600000000 ,httpOnly: false, secure: false}}));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

cms.listen(app);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
	async.auto({
		infopics:function(fn){
			cms
			.home_infopics
			.find()
			.limit(4)
			.lean()
			.exec(fn);
		}
	}, 
	function(err, page){
		if(err) throw err;
		res.render('index', page);
	});
});
app.get('/company-info', function(req,res){
	res.render('company-info');
});
app.get('/contact', function(req,res){
	res.render('contact');
});
app.get('/jobs', function(req,res){
	async.auto({
		posts:function(fn){
			cms
			.jobs_posts
			.find()
			.lean()
			.exec(fn);
		}
	}, 
	function(err, page){
		if(err) throw err;
		res.render('jobs', page);
	});
});
app.get('/press', function(req,res){
	res.render('press');
});
app.get('/login', function(req,res){
	res.render('login');
});
app.get('/packages', function(req,res){
	res.render('packages');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
