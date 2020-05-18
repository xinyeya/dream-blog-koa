const router = require('koa-router')(),
    DB = require('../../../modules/db'),
    md5 = require('md5'),
    upload = require('../../../modules/file')

// 查询用户信息
router.get('/', async ctx => {
    let search = ctx.query.search || ''
    let skips = parseInt(ctx.query.skips) || 0
    let limits = parseInt(ctx.query.limits) || 5

    let count = await DB.count('user', 'username', search)
    let data = await DB.find('user', 'username', search, skips, limits)

    let res = {}
    res.data = data
    res.count = count[0].total
    ctx.body = res
})

// 添加用户
// router.post('/add', upload.single('file'), async ctx => {
//     let body = ctx.request.body
//     ctx.body = ctx.request.body;
//
//     if (body.password){
//         body.password = md5(body.password)
//         let res = await DB.insert('user', body)
//         if (res.result.n == 1) {
//             ctx.body = '添加成功'
//         }else{
//             ctx.body = '添加失败'
//         }
//     }
// })
//
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
//     let _id = ctx.request.body
//     let id = []
//     for (key in _id){
//         id.push(DB.getObjectId(_id[key]))
//     }
//     let data = await DB.remove('user', {"_id": {$in: id}})
//     if (data.result.n == 1) {
//         ctx.body = '删除成功'
//     }else{
//         ctx.body = '删除失败'
//     }
// })

module.exports = router.routes()