const router = require('koa-router')(),
    user = require('./user'),
    article = require('./articles'),
    classLabel = require('./class_label'),
    music = require('./music'),
    comments = require('./comments')

router.get('/', async (ctx) => {
    ctx.body = '<h1>首页</h1>'
})

router.use('/users', user)
router.use('/article', article)
router.use('/class_label', classLabel)
router.use('/music', music)
router.use('/comments', comments)

module.exports = router.routes()