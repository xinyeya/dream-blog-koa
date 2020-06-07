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
        return
    }

    // 判断
    if (!body.title || body.title == '') {
        ctx.body = '请输入标题'
        return
    }

    if (!body.desc || body.desc == '') {
        ctx.body = '请输入简介'
        return
    }

    if (!body.content || body.content == '') {
        ctx.body = '请输入文章内容'
        return
    }

    if (!body.label || body.label == '' || body.label === []) {
        ctx.body = '请选择标签分类'
        return
    }

    if (g === {}) {
        ctx.body == '请上传封面图片'
        return
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
    body.label = body.label.toString()

    if (path_status) {
        let sql = "INSERT INTO articles (`title`, `desc`, `content`, `images`, `create_time`, `label_id`, `status`) VALUES ('" + body.title + "', '" + body.desc + "', '" + body.content + "', '" + body.images + "', '" + body.create_time + "','" + body.label + "','" + body.status + "')";

        let res = await db(sql)
        if (res.affectedRows === 1) {
            ctx.body = {code: 200, msg: '保存成功'}
        }else{
            ctx.body = {code: 500, msg: '保存失败'}
        }
    }
})

module.exports = router.routes()