var koa = require('koa');
var app = new koa();
const serve = require("koa-static");
const router = require('koa-router')
const {
  connect,
  initSchema
} = require('./database/init')
const routes = require('./routes/route')
const port = 8070;
// 获取命令行参数
const arguments = process.argv;

app
  .use(serve(__dirname + "/dist/", { extensions: ['html'] }))
  .use(routes.routes())


;(async ()=>{
  await initSchema()
  await connect()
})()


app.listen(port);
