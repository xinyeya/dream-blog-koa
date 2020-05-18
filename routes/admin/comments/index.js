const router = require('koa-router')(),
    DB = require('../../../modules/db')

// 查询所有评论
router.get('/', async ctx => {
    let search = ctx.query.search || {}
    let skip = ctx.query.skip || 0
    let limit = ctx.query.limit || 10
    const data = await DB.find('comments', search, skip, limit)
    ctx.body = data
})

// 删除音乐
router.delete('/del', async ctx => {
    let id = ctx.query.id

    const data = await DB.remove('comments', {"_id": DB.getObjectId(id)})
    if (data.result.n == 1) {
        ctx.body = '删除成功'
    }else{
        ctx.body = '删除失败'
    }
})

module.exports = router.routes()