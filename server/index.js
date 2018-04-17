var koa = require('koa');
var app = new koa();
const serve = require("koa-static");
const router = require('koa-router')
const mongoose = require('mongoose')

require('./database/init').connect()
require('./database/init').initSchema()
require('./data/')

const routes = require('./routes/route')
const port = 8070;
// 获取命令行参数
const arguments = process.argv;

app
  .use(serve(__dirname + "/dist/", { extensions: ['html'] }))
  .use(routes.routes())
app.listen(port);
