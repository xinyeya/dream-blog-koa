const router = require('koa-router')(),
    jsonwebtoken = require('jsonwebtoken'),
    db = require('../../../modules/db')

const SECRET = 'xinye'; // demo，可更换
// 登录接口签发token, 为了简便不使用router
router.post('/', async (ctx, next) => {
    if(ctx.path === '/admin/login' && ctx.method === 'POST'){
        // 获取用户信息
        let sql = "SELECT * FROM users WHERE id=1"
        let res = await db(sql)
        let body = res[0]
        // 判断用户名密码是否匹配，为简单起见，直接使用常量
        let checkUser = ctx.request.body.username == body.username && ctx.request.body.password == body.password;
        if (checkUser) {
            let userToken = {name: body.username, id: body.id};
            body.token = jsonwebtoken.sign(
                userToken,  // 加密userToken, 等同于上面解密的userToken
                SECRET,
                {expiresIn: '24h'}  // 有效时长24小时
            )

            let data = body
            ctx.body = {
                code: 200,
                msg: '登录成功',
                data: data
            }
        }else{
            // 登录失败, 用户名密码不正确
            ctx.body = {
                code: 400,
                msg: '用户名密码不匹配'
            }
        }
    }
})

module.exports = router.routes()