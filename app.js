var express = require("express");
var app= express();
var port = 3000;
var blogPosts =[];
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

app.get('/list', function(req, res){

	res.render('list', {blogPosts: blogPosts});
});

app.get('/', function(req, res){
	res.render('index', {blogPosts: blogPosts});
});

app.post('/create', function(req, res){
	var d = new Date();
	var newEntry = {
		            'title': req.body.title,
		            'content':req.body.content,
	                'datetime': d
	    };
	blogPosts.push(newEntry);
    res.render('index', {blogPosts: blogPosts});    
});

app.listen(port, function(){
	console.log("app on port 3000");
});

