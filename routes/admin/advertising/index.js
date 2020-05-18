const router = require('koa-router')(),
    DB = require('../../../modules/db')

// 查询广告链接
router.get('/', async ctx => {
    let search = ctx.query.search || {}
    let skip = ctx.query.skip || 0
    let limit = ctx.query.limit || 10
    let data = await DB.find('advertising', search, skip, limit)
    console.log(data)
    ctx.body = data
})

// 添加广告
router.post('/add', async ctx => {
    let body = ctx.request.body
    let path = JSON.stringify(ctx.request.files.img_title.path);
    body.img_title = path
    let res = await DB.insert('advertising', body)
    if (res.result.n == 1) {
        ctx.body = '添加成功'
    }else{
        ctx.body = '添加失败'
    }
})

// 修改广告
router.post('/update', async ctx => {
    let body = ctx.request.body
    let id = ctx.query.id
    let path = JSON.stringify(ctx.request.files.img_title.path);
    body.img_title = path

    let data = await DB.update('advertising', {"_id": DB.getObjectId(id)}, body)
    if (data.result.n == 1) {
        ctx.body = '修改成功'
    }else{
        logFile(e)
        ctx.body = '修改失败'
    }
})

// 删除广告
router.delete('/del', async ctx => {
    let id = ctx.query.id

    let data = await DB.remove('advertising', {"_id": DB.getObjectId(id)})
    if (data.result.n == 1) {
        ctx.body = '删除成功'
    }else{
        ctx.body = '删除失败'
    }
})

module.exports = router.routes()