const router = require('koa-router')(),
    user = require('./user'),
    label = require('./label'),
    music = require('./music'),
    articles = require('./articles'),
    login = require('./login')

router.use('/login', login)
router.use('/users', user)
router.use('/labels', label)
router.use('/musics', music)
router.use('/articles', articles)

module.exports = router.routes()