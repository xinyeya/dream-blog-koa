const router = require('koa-router')(),
    DB = require('../../../modules/db')

// 查询音乐信息
router.get('/', async ctx => {
    let search = ctx.query.search || {}
    let skip = ctx.query.skip || 0
    let limit = ctx.query.limit || 10
    const data = await DB.find('music', search, skip, limit)
    ctx.body = data
})

// 添加音乐
router.post('/add', async ctx => {
    let body = ctx.request.body
    let path = JSON.stringify(ctx.request.files.images.path)
    body.images = path
    const res = await DB.insert('music', body)
    if (res.result.n == 1) {
        ctx.body = '添加成功'
    }else{
        ctx.body = '添加失败'
    }
})

// 修改用户音乐
router.post('/update', async ctx => {
    let body = ctx.request.body
    let id = ctx.query.id
    let path = JSON.stringify(ctx.request.files.images.path)
    body.images = path

    const data = await DB.update('music', {"_id": DB.getObjectId(id)}, body)
    if (data.result.n == 1) {
        ctx.body = '修改成功'
    }else{
        logFile(e)
        ctx.body = '修改失败'
    }
})

// 删除音乐
router.delete('/del', async ctx => {
    let id = ctx.query.id

    const data = await DB.remove('music', {"_id": DB.getObjectId(id)})
    if (data.result.n == 1) {
        ctx.body = '删除成功'
    }else{
        ctx.body = '删除失败'
    }
})

module.exports = router.routes()