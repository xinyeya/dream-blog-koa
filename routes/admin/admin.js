const router = require('koa-router')(),
    user = require('./user'),
    article = require('./articles'),
    classLabel = require('./class_label'),
    music = require('./music'),
    comments = require('./comments'),
    friend_link = require('./friend_link'),
    advertising = require('./advertising')

router.get('/', async (ctx) => {
    ctx.body = '<h1>首页</h1>'
})

router.use('/user', user)
router.use('/article', article)
router.use('/class_label', classLabel)
router.use('/music', music)
router.use('/comments', comments)
router.use('/friend_link', friend_link)
router.use('/advertising', advertising)

module.exports = router.routes()