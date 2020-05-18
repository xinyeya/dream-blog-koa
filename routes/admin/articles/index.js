const router = require('koa-router')(),
    DB = require('../../../modules/db'),
    logFile = require('../../../modules/log')

// 查询文章内容
router.get('/', async ctx => {
    try {
        let search = ctx.query.search || {}
        let skip = ctx.query.skip || 0
        let limit = ctx.query.limit || 10

        let data = await DB.find('article', search, skip, limit)
        ctx.body = data
    }catch (e) {
        logFile(e)
        ctx.body = '服务器错误'
    }
})

// 添加文章
router.post('/add', async ctx => {
    try {
        let body = ctx.request.body
        // 封面路径
        let path = JSON.stringify(ctx.request.files.cover.path);
        console.log(path)
        body.cover = path

        let res = await DB.insert('article', body)
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

// 修改文章内容
router.post('/update', async ctx => {
    try {
        let body = ctx.request.body

        // 文章id
        let id = ctx.query.id

        // 封面路径
        let path = JSON.stringify(ctx.request.files.cover.path);
        body.cover = path

        let data = await DB.update('article', {"_id": DB.getObjectId(id)}, body)
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

// 删除文章
router.delete('/del', async ctx => {
    try {
        let id = ctx.query.id

        let data = await DB.remove('article', {"_id": DB.getObjectId(id)})
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