const router = require('koa-router')(),
    db = require('../../modules/db'),
    getLabel = require('./labels')

router.get('/', async ctx => {
    let res = await getLabel()
    let data = JSON.parse(JSON.stringify(res))
    await ctx.render('index', {
        labelList:data
    })
})

module.exports = router.routes()

