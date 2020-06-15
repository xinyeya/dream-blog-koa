const router = require('koa-router')(),
    getLabel = require('./labels')

function parse (data) {
    return JSON.parse(JSON.stringify(data))
}

router.get('/', async ctx => {
    // 获取所有数据标签
    let labelList = parse(await getLabel())
    await ctx.render('index', {
        labelList
    })
})

module.exports = router.routes()

