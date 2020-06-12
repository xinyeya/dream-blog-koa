const db = require('../../../modules/db'),
    upload = require('../../../modules/file'),
    router = require('koa-router')()

const g = {}

// 添加文章
router.post('/insert', upload.single('file'), async ctx => {
    let path_status = false
    let body = ctx.request.body

    // 判断头像是否上传了
    if (ctx.req.file !== undefined){
        let path = ctx.req.file.path
        g.path = path.replace(/public/,"").replace(/\\/g,"/")
        ctx.body = '封面上传完成'
        return false
    }

    // 判断
    if (!body.title || body.title == '') {
        ctx.body = '请输入标题'
        return false
    }

    if (!body.desc || body.desc == '') {
        ctx.body = '请输入简介'
        return false
    }

    if (!body.content || body.content == '') {
        ctx.body = '请输入文章内容'
        return false
    }

    if (!body.label_id || body.label_id == '' || body.label_id === []) {
        ctx.body = '请选择标签分类'
        return
    }

    if (g === {}) {
        ctx.body == '请上传封面图片'
        return false
    }

    if (!body.status || body.status == '') {
        body.status = 0
    }

    // 修改封面路径
    if (body.images == ''){
        let images_path = 'http://' + ctx.request.header.host + g.path
        body.images = images_path
        path_status = true
    }else{
        path_status = true
    }

    // 获取当前时间
    body.create_time = new Date().toLocaleDateString()
    body.label_id = body.label_id.toString()

    if (path_status) {
        let sql = "INSERT INTO articles (`title`, `desc`, `content`, `images`, `create_time`, `label_id`, `status`) VALUES ('" + body.title + "', '" + body.desc + "', '" + body.content + "', '" + body.images + "', '" + body.create_time + "','" + body.label_id + "','" + body.status + "')";

        let res = await db(sql)
        if (res.affectedRows === 1) {
            ctx.body = {code: 200, msg: '保存成功'}
        }else{
            ctx.body = {code: 500, msg: '保存失败'}
        }
    }
})

// 查询文章信息
router.get('/', async ctx => {
    if (ctx.request.query.search) {
        let {pageIndex, pageSize, search} = ctx.request.query
        pageIndex = (pageIndex - 1) * pageSize
        let sql = "SELECT `id`, `title`, `desc`, `create_time`, `status` FROM articles WHERE title LIKE "+ "'%" + search + "%'"  +" ORDER BY id ASC LIMIT " + pageIndex + "," + pageSize
        let count_sql = "SELECT count(id) FROM articles WHERE title LIKE " + "'%" + search + "%'"
        let res = await db(sql)
        let count = await db(count_sql)
        if (res) {
            ctx.body = {code: 200, msg: '搜索成功', data: {res, count}}
        }else{
            ctx.body = {code: 500, msg: '搜索失败'}
        }
    }else{
        let {pageIndex, pageSize} = ctx.request.query
        pageIndex = (pageIndex - 1) * pageSize
        let sql = "SELECT `id`, `title`, `desc`, `create_time`, `status` FROM articles ORDER BY id ASC LIMIT " + pageIndex + "," + pageSize
        let count_sql = "SELECT count(id) FROM articles"
        let res = await db(sql)
        let count = await db(count_sql)
        if (res) {
            ctx.body = {code: 200, msg: '成功', data: {res, count}}
        }else{
            ctx.body = {code: 500, msg: '失败'}
        }
    }
})

// 修改文章状态
router.put('/state', async ctx => {
    let { id, status } = ctx.request.body

    if (!id || id == '') {
        ctx.body = {code: 500, msg: '请选择要修改状态的文章的id'}
        return false
    }

    let sql = "UPDATE articles SET `status`=" + status + " WHERE id=" + id
    let res = await db(sql)
    if (res.affectedRows) {
        ctx.body = {code: 200, msg: '状态修改成功'}
    }else{
        ctx.body = {code: 500, msg: '状态修改失败'}
    }
})

// 删除文章
router.delete('/del', async ctx => {

    if (!ctx.request.body.id) {
        ctx.body = {code: 500, msg: '请选择要删除的文章'}
        return false
    }

    let idArr = ctx.request.body.id

    let sql = `DELETE FROM articles WHERE id in (${idArr})`
    let res = await db(sql)

    if (res.affectedRows) {
        ctx.body = {code: 200, msg: '删除成功'}
    }else{
        ctx.body = {code: 500, msg: '删除失败'}
    }
})

// 查询单个音乐
router.get('/editshow', async ctx => {
    if (!ctx.request.query.id || ctx.request.query.id == '' || ctx.request.query.id == 'undefined') {
        ctx.body = {code: 500, msg: '请选择要修改的文章id'}
        return false
    }

    let id = ctx.request.query.id

    let sql = "SELECT `id`,`title`,`desc`,`content`,`images`,`label_id` FROM articles WHERE id="+ id

    let res = await db(sql)

    if(res) {
        ctx.body = {code: 200, msg: '成功', data: res}
    }else{
        ctx.body = {code: 500, msg: '失败'}
    }
})

// 修改数据
router.put('/update', upload.single('file'), async ctx => {
    let path_status = false
    let body = ctx.request.body

    // 判断头像是否上传了
    if (ctx.req.file !== undefined){
        let path = ctx.req.file.path
        g.path = path.replace(/public/,"").replace(/\\/g,"/")
        ctx.body = '封面上传完成'
        return false
    }

    // 判断
    if (!body.id || body.id == '' || body.id == 'undefined') {
        ctx.body = '请选择要修改的id'
        return false
    }

    if (!body.title || body.title == '') {
        ctx.body = '请输入标题'
        return false
    }

    if (!body.desc || body.desc == '') {
        ctx.body = '请输入简介'
        return false
    }

    if (!body.content || body.content == '') {
        ctx.body = '请输入文章内容'
        return false
    }

    if (!body.label_id || body.label_id == '' || body.label_id === []) {
        ctx.body = '请选择标签分类'
        return
    }

    if (g === {}) {
        ctx.body == '请上传封面图片'
        return false
    }

    if (!body.status || body.status == '') {
        body.status = 0
    }

    // 修改封面路径
    if (body.images == ''){
        let images_path = 'http://' + ctx.request.header.host + g.path
        body.images = images_path
        path_status = true
    }else{
        path_status = true
    }

    // 获取当前时间
    body.create_time = new Date().toLocaleDateString()
    body.label_id = body.label_id.toString()

    if (path_status) {
        let sql = "UPDATE articles SET `title`='" + body.title + "', `desc`='" + body.desc + "', `content`='" + body.content + "',`images`='" + body.images + "',`create_time`='" + body.create_time + "', `label_id`='" + body.label_id + "', `status`=" + body.status + " WHERE id=" + body.id

        let res = await db(sql)
        if (res.affectedRows === 1) {
            ctx.body = {code: 200, msg: '修改成功'}
        }else{
            ctx.body = {code: 500, msg: '修改失败'}
        }
    }
})

module.exports = router.routes()