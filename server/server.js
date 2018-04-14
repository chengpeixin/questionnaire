var koa = require('koa');
var app = new koa();
const serve = require("koa-static");
const router = require('./router')

app.use(serve(__dirname + "/dist/", { extensions: ['html'] }));


app.listen(8070);
