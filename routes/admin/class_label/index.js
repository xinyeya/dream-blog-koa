const router = require('koa-router')(),
    DB = require('../../../modules/db'),
    logFile = require('../../../modules/log')

// 查询分类
router.get('/', async ctx => {
    try {
        let search = ctx.query.search || {}
        let skip = ctx.query.skip || 0
        let limit = ctx.query.limit || 10

        let data = await DB.find('class_label', search, skip, limit)
        ctx.body = data
    }catch (e) {
        logFile(e)
        ctx.body = '服务器错误'
    }
})

// 添加分类
router.post('/add', async ctx => {
    try {
        let body = ctx.request.body
        let res = await DB.insert('class_label', body)
        if (res.result.n == 1) {
            ctx.body = '添加成功'
        }else{
            ctx.body = '添加失败'
        }
    }catch (e) {
        logFile(e)
        ctx.body = '服务器错误'
    }
})

// 修改分类名称
router.post('/update', async ctx => {
    try {
        let body = ctx.request.body
        let id = ctx.query.id
        let data = await DB.update('class_label', {"_id": DB.getObjectId(id)}, body)
        if (data.result.n == 1) {
            ctx.body = '修改成功'
        }else{
            logFile(e)
            ctx.body = '修改失败'
        }
    }catch (e) {
        ctx.body = '服务器错误'
    }
})

// 删除分类
router.delete('/del', async ctx => {
    try {
        let id = ctx.query.id

        let data = await DB.remove('class_label', {"_id": DB.getObjectId(id)})
        if (data.result.n == 1) {
            ctx.body = '删除成功'
        }else{
            ctx.body = '删除失败'
        }
    }catch (e) {
        logFile(e)
        ctx.body = '服务器错误'
    }
})

module.exports = router.routes()