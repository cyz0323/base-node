var express = require('express');
//cookie扩展包
var cookieParser = require('cookie-parser');
//基础工具包
var util = require('util');
//文件读取
var fs = require('fs');

var app = express();
//本地静态资源的指定
app.use("/public", express.static("public"));
//cookie使用的接入
app.use(cookieParser());

//首页地址的指定
app.get("/index.html", function(req, res){
	res.sendFile( __dirname + "/index.html");
})

//全局访问
app.get("/", function(req, res){
	res.send("Hello World!");
});

//cookie发送的测试
app.get("/cookie", function(req, res){
	console.log("Cookies: "+util.inspect(req.cookies));
});

//文件读取
app.get('/getJSON', function(req, res){
	fs.readFile( __dirname + "/" + "test.json", "utf-8", function(err, data){
		console.log(data);
		res.end(data);
	});
});

//端口的开启
var server = app.listen(8082, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})