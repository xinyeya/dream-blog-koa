const db = require('../../../modules/db'),
    upload = require('../../../modules/file'),
    router = require('koa-router')()

const g = {}

// 查询音乐
router.get('/', async ctx => {
    let body = ctx.request.query

    // 判断是否传递参数
    if (!body.pageIndex || body.pageIndex == '') {
        body.pageIndex = 0
        return
    }

    if (!body.pageSize || body.pageSize == '') {
        body.pageIndex = 10
        return
    }

    // 计算越过多少条
    body.pageIndex = (body.pageIndex - 1) * body.pageSize

    if (!body.title) {
        let sql = `SELECT * FROM musics ORDER BY id DESC LIMIT ${body.pageIndex}, ${body.pageSize}`
        let countSql = 'SELECT count(id) FROM musics'
        let res = await db(sql)
        let count = await db(countSql)
        if (!res) {
            ctx.body = {code: 500, msg: '查询失败'}
        }else{
            ctx.body = {code: 200, msg: '查询成功', data: {res, count}}
        }
    }else{
        let sql = `SELECT * FROM musics WHERE title LIKE '%${body.title}%' ORDER BY id DESC LIMIT ${body.pageIndex}, ${body.pageSize}`
        let countSql = `SELECT count(id) FROM musics WHERE title LIKE '%${body.title}%'`
        let res = await db(sql)
        let count = await db(countSql)
        if (!res) {
            ctx.body = {code: 500, msg: '搜索失败'}
        }else{
            ctx.body = {code: 200, msg: '搜索成功', data: {res, count}}
        }
    }

})

// 添加音乐
router.post('/insert', upload.single('file'), async ctx => {
    let path_status = false
    let body = ctx.request.body

    // 判断头像是否上传了
    if (ctx.req.file !== undefined){
        let path = ctx.req.file.path
        g.path = path.replace(/public/,"").replace(/\\/g,"/")
        ctx.body = '封面上传完成'
    }

    // 判断
    if (!body.title || body.title == '') {
        ctx.body = '请输入标题'
    }

    if (!body.music || body.music == '') {
        ctx.body = '请输入音乐链接'
    }

    if (!body.singer || body.singer == '') {
        ctx.body = '请输入歌手名'
    }

    // 修改头像路径
    if (body.images == ''){
        let images_path = 'http://' + ctx.request.header.host + g.path
        body.images = images_path
        path_status = true
    }

    if (path_status) {
        let sql = 'INSERT INTO musics (`title`, `music`, `singer`, `images`) VALUES("'+ body.title + '","' + body.music + '","' + body.singer + '","' + body.images + '")'
        let res = await db(sql)
        if (res.affectedRows == 0) {
            ctx.body = {code: 500, msg: '添加失败'}
        }else{
            ctx.body = {code: 200, msg: '添加成功'}
        }
    }
})

// 删除音乐
router.delete('/del', async ctx => {
    let body = ctx.request.body
    if (!body.id) {
        ctx.body = {code: 500, msg: '请选择要删除的音乐'}
        return
    }

    let sql = `DELETE FROM musics WHERE id=${body.id}`
    let res = await db(sql)

    if (res.affectedRows == 1) {
        ctx.body = {code: 200, msg: '删除成功'}
    }else{
        ctx.body = {code: 500, msg: '删除失败'}
    }
})

module.exports = router.routes()