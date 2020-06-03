const router = require('koa-router')(),
    db = require('../../../modules/db')

// 查询所有标签
router.get('/', async ctx => {
    let sql = 'SELECT id, title FROM labels'
    let res = await db(sql)
    if (res) {
        ctx.body = {code: 200, msg: '成功', data: res}
    }else{
        ctx.body = {code: 500, msg: '失败'}
    }
})

// 添加标签
router.post('/insert', async ctx => {
    if (!ctx.request.body.title) {
        ctx.body = ctx.body = {code: 500, msg: '请输入标签名'}
    }
    console.log(ctx.request.body)
    let sql = `INSERT INTO labels (title) VALUES ('${ctx.request.body.title}')`
    let res = await db(sql)
    if (res.affectedRows == 0) {
        ctx.body = {code: 500, msg: '添加失败'}
    }else{
        ctx.body = {code: 200, msg: '添加成功'}
    }
})

// 删除标签
router.delete('/del', async ctx => {
    if (!ctx.request.body.id || ctx.request.body.id == undefined || typeof(ctx.request.body.id) == "number") {
        ctx.body = {code: 500, msg: '请输入id'}
    }

    let sql = `DELETE FROM labels WHERE id=${ctx.request.body.id}`
    let res = await db(sql)
    if (res.affectedRows == 0) {
        ctx.body = {code: 500, msg: '数据不存在'}
    }else{
        ctx.body = {code: 200, msg: '删除成功'}
    }
})

module.exports = router.routes()
