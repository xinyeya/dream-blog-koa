const router = require('koa-router')(),
    getUserInfo = require('./users')
    getLabel = require('./labels')

function parse (data) {
    return JSON.parse(JSON.stringify(data))
}


router.get('/', async ctx => {
    // 获取所有数据标签
    let userInfo = parse(await getUserInfo())
    let labelList = parse(await getLabel())
    console.log(userInfo)
    await ctx.render('index', {
        userInfo,
        labelList
    })
})

module.exports = router.routes()

