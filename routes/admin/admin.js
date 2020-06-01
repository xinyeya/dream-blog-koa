const router = require('koa-router')(),
    user = require('./user')

router.get('/', async (ctx) => {
    ctx.body = '<h1>首页</h1>'
})

router.use('/users', user)

module.exports = router.routes()