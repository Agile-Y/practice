"use strict";

var express = require('express');

var path = require('path');

var router = require('./router.js');

var bodyParser = require('body-parser');

var app = express(); // 启动静态资源服务

app.use(express["static"]('./public')); // 处理请求参数

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); // 配置路由

app.use(router); // 监听端口

app.listen(3000, function () {
  console.log('running...');
});