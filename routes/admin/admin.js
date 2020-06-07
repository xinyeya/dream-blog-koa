const router = require('koa-router')(),
    user = require('./user'),
    label = require('./label'),
    music = require('./music'),
    articles = require('./articles')

router.get('/', async (ctx) => {
    ctx.body = '<h1>首页</h1>'
})

router.use('/users', user)
router.use('/labels', label)
router.use('/musics', music)
router.use('/articles', articles)

module.exports = router.routes()