const router = require('koa-router')(),
    user = require('./user'),
    label = require('./label')

router.get('/', async (ctx) => {
    ctx.body = '<h1>首页</h1>'
})

router.use('/users', user)
router.use('/labels', label)

module.exports = router.routes()