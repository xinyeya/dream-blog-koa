const app = new (require('koa'))(),
    router = (require('koa-router'))(),
    admin = require('./routes/admin/admin'),
    bodyParser = require('koa-bodyparser')(),
    errorLog = require('./modules/middlewareErr'),
    cors = require('koa2-cors'),
    session = require('koa-session')



// 错误处理中间件
app.use(errorLog);

// 1.主页静态网页 把静态页统一放到public中管理
app.use(require('koa-static')(__dirname + '/public'))

// 解决跨域问题
app.use(cors({
    origin: (ctx) => { //设置允许来自指定域名请求
        // if (ctx.url === '/test') {
        //     return '*'; // 允许来自所有域名请求
        // }
        return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}));

// 设置session
app.keys = ['some secret hurr'];  /* cookie的签名 */
const CONFIG = {
    key: 'koa:sess', /* 默认的cookie签名 */
    maxAge: 86400000,/* cookie的最大过期时间 */
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** 无效属性 */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** 默认签名与否 */
    rolling: false, /** 每次请求强行设置cookie */
    renew: false, /** cookie快过期时自动重新设置*/
};
app.use(session(CONFIG, app));

app.use(bodyParser);

router.use('/admin', admin)

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
console.log('127.0.0.1:3000');