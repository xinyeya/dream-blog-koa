const router = require('koa-router')(),
    db = require('../../../modules/db'),
    md5 = require('md5'),
    upload = require('../../../modules/file')

const g = {}

// 查询用户信息
router.get('/', async (ctx) => {
    let res = await db('SELECT username, `desc`, qq, a_num, avatar, p_num, h_num FROM users')
    if (res) {
        data = {code: 200, msg: '成功', data: res}
        ctx.body = data
    }else{
        data = {code: 500, msg: '失败', data: res}
        ctx.body = data
    }
})

// 修改用户信息
router.post('/update', upload.single('file'), async ctx => {
    if (ctx.req.file !== undefined){
        let path = ctx.req.file.path
        g.path = path.replace(/public/,"").replace(/\\/g,"/")
    }

    // 判断用户名是否为空
    let body = ctx.request.body
    if (body.username == '') {
        ctx.body = {code: 500, msg: '失败', data: '请输入用户名'}
    }

    // 修改头像路径
    if (body.avatar){
        let avatar_path = 'http://' + ctx.request.header.host + g.path
        body.avatar = avatar_path
    }

    // 修改用户数据
    if (!body.password) {
        let res = db("UPDATE users SET username='"+ body.username + "', `desc`='" + body.desc + "', avatar='"+ body.avatar +"',qq='" + body.qq + "' WHERE id=1")
        if (res) {
            ctx.body = {code: 200, msg: '修改成功'}
        }else{
            ctx.body = {code: 500, msg: '修改失败'}
        }
    }else{
        body.password = md5(body.password)
        console.log(body.avatar)
        let res = db("UPDATE users SET username='"+ body.username + "'," + "`password`='" + body.password + "', `desc`='" + body.desc + "', avatar='"+ body.avatar +"',qq='" + body.qq + "' WHERE id=1")
        if (res) {
            ctx.body = {code: 200, msg: '修改成功'}
        }else{
            ctx.body = {code: 500, msg: '修改失败'}
        }
    }
})

module.exports = router.routes()