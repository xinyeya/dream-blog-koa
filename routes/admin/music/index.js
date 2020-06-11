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
    }else{
        path_status = true
    }

    if (path_status) {
        if (!ctx.request.query.id) {
            let sql = 'INSERT INTO musics (`title`, `music`, `singer`, `images`) VALUES("'+ body.title + '","' + body.music + '","' + body.singer + '","' + body.images + '")'
            let res = await db(sql)
            if (res.affectedRows == 0) {
                ctx.body = {code: 500, msg: '添加失败'}
            }else{
                ctx.body = {code: 200, msg: '添加成功'}
            }
        }else{
            let id = ctx.request.query.id

            let sql = `UPDATE musics SET title='${body.title}', singer='${body.singer}', music='${body.music}', images='${body.images}' WHERE id=${id}`
            let res = await db(sql)

            if (res.affectedRows === 1) {
                ctx.body = {code: 200, msg: '修改成功'}
            }else{
                ctx.body = {code: 500, msg: '修改失败'}
            }
        }
    }
})

// 删除音乐
router.delete('/del', async ctx => {

    if (!ctx.request.body.id) {
        ctx.body = {code: 500, msg: '请选择要删除的音乐'}
        return
    }

    let idArr = ctx.request.body.id

    let sql = `DELETE FROM musics WHERE id in (${idArr})`
    let res = await db(sql)

    if (res.affectedRows) {
        ctx.body = {code: 200, msg: '删除成功'}
    }else{
        ctx.body = {code: 500, msg: '删除失败'}
    }
})

// 显示要修改的数据
router.get('/editshow', async ctx => {
    let id = ctx.request.query.id

    if (!id) {
        ctx.body = {code: 500, msg: '请选择要修改的音乐id'}
        return
    }

    let sql = `SELECT * FROM musics WHERE id=${id}`
    let res = await db(sql)
    if (res) {
        ctx.body = {code: 200, msg: '成功', data: res}
    }else{
        ctx.body = {code: 500, msg: '失败'}
    }
})

// 修改音乐信息
router.put('/update', upload.single('file'), async ctx => {
})

module.exports = router.routes()