var koa = require('koa');
var app = new koa();
const serve = require("koa-static");
const router = require('./router')
const {
    connect,
  initSchema
} = require('./database/init')
app.use(serve(__dirname + "/dist/", { extensions: ['html'] }));


;(async ()=>{
  await initSchema()
  await connect()
})()


app.listen(8070);
