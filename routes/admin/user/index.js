const router = require('koa-router')(),
    db = require('../../../modules/db'),
    md5 = require('md5'),
    upload = require('../../../modules/file')

// 查询用户信息
router.get('/',async ctx => {
    let res = await db('SELECT username, `desc`, qq, a_num, p_num, h_num FROM users')
    if (res) {
        data = {code: 200, msg: '成功', data: res}
    }else{
        data = {code: 500, msg: '失败', data: res}
    }
    ctx.body = data
})

// // 修改用户信息
// router.post('/update', async ctx => {
//     let body = ctx.request.body
//     let id = ctx.query.id
//     let path = JSON.stringify(ctx.request.files.avatar.path);
//     body.avatar = path
//     body.password = md5(body.password)
//     let data = await DB.update('user', {"_id": DB.getObjectId(id)}, body)
//     if (data.result.n == 1) {
//         ctx.body = '修改成功'
//     }else{
//         logFile(e)
//         ctx.body = '修改失败'
//     }
// })
//
// // 删除用户
// router.delete('/del', async ctx => {
//     let id = ctx.request.body
//     id = id.join(',')
//
//     let data = await DB.remove('user', id)
//     if (data.result) {
//         ctx.body = '删除成功'
//     }else{
//         ctx.body = '删除失败'
//     }
// })

module.exports = router.routes()