const app = new (require('koa'))(),
    router = (require('koa-router'))(),
    admin = require('./routes/admin/admin'),
    bodyParser = require('koa-bodyparser')(),
    errorLog = require('./modules/middlewareErr'),
    cors = require('koa2-cors'),
    koajwt = require('koa-jwt'),
    static  = require('koa-static'),
    path = require('path')

const staticPath = './public'

// 错误处理中间件
app.use(errorLog);

// 1.主页静态网页 把静态页统一放到public中管理
app.use(static(
    path.join(__dirname, staticPath)
))

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

app.use(bodyParser);

// 中间件对token进行验证
app.use(async (ctx, next) => {
    // let token = ctx.header.authorization;
    // let payload = await util.promisify(jsonwebtoken.verify)(token.split(' ')[1], SECRET);
    return next().catch((err) => {
        console.log(err)
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                code: 401,
                msg: err.message
            }
        } else {
            throw err;
        }
    })
});

// 排除不验证的请求
const SECRET = 'xinye'; // demo，可更换
app.use(koajwt({ secret: SECRET }).unless({
    // 登录，注册接口不需要验证
    path: [/^\/admin\/login/]
}));

router.use('/admin', admin)

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
console.log('127.0.0.1:3000');