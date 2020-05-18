const router = require('koa-router')(),
    DB = require('../../../modules/db')

// 查询友链
router.get('/', async ctx => {
    let search = ctx.query.search || {}
    let skip = ctx.query.skip || 0
    let limit = ctx.query.limit || 10
    let data = await DB.find('friend_link', search, skip, limit)
    ctx.body = data
})

// 添加友链
router.post('/add', async ctx => {
    let body = ctx.request.body
    let res = await DB.insert('friend_link', body)
    if (res.result.n == 1) {
        ctx.body = '添加成功'
    }else{
        ctx.body = '添加失败'
    }
})

// 修改友链信息
router.post('/update', async ctx => {
    let body = ctx.request.body
    let id = ctx.query.id

    let data = await DB.update('friend_link', {"_id": DB.getObjectId(id)}, body)
    if (data.result.n == 1) {
        ctx.body = '修改成功'
    }else{
        logFile(e)
        ctx.body = '修改失败'
    }
})

// 删除友链
router.delete('/del', async ctx => {
    let id = ctx.query.id

    let data = await DB.remove('friend_link', {"_id": DB.getObjectId(id)})
    if (data.result.n == 1) {
        ctx.body = '删除成功'
    }else{
        ctx.body = '删除失败'
    }
})

module.exports = router.routes()