const router = require('koa-router')(),
    DB = require('../../../modules/db'),
    md5 = require('md5'),
    upload = require('../../../modules/file')

// 查询用户信息
router.get('/',async ctx => {
    let search = ctx.query.search || ''
    let skips = parseInt(ctx.query.skips) || 0
    let limits = parseInt(ctx.query.limits) || 5

    let columnName = '`id`,`username`,`age`,`sex`,`status`,`desc`,`qq`,`article_num`,`praise`,`create_time`'

    let count = await DB.count('user', 'username', search)
    let data = await DB.find('user', columnName, 'username', search, skips, limits)

    let res = {}
    res.data = data
    res.count = count[0].total
    ctx.body = res
})

// 添加用户
router.post('/add', upload.single('file'), async ctx => {
    let body = ctx.request.body

    // 如果没有填写简介和qq则默认为空
    body.desc = ctx.request.body.desc || null
    body.qq = ctx.request.body.qq || null

    body.password = md5(body.password)

    if (ctx.request.body.age >= 100) {
        body.age = 100
    }

    if (body.avatar === '') {
        body.avatar = 'https://www.baidu.com/link?url=qPe6Y41QK7J5KNFN5x9MIYoQM8Eu62X1wAm9sg_TZhjSZEYzg1aHCUCvZJPnHcoFYvKI5eJC2SrgV3khrFxvDkgO_erBz24LoFLCX2K_Hlg_40foio1-zXKLpJ1C2LoHENbXrIOVqmZ3-6n04B81XVuiMAjRVQLrmuRtAOsckV4vk1K2HKZJcJCoUYDHnhHDvCQz65XmI6PUSGg8znQnTEWO4dokhrF-jan11M2E9GoLf1e97WWPx5VVVHRcFgXrahb80_w_1dZehzuZkVq_oytClKe63GuLGCox9tfQXcN6EgS0EpHu83yKCsjApnYmzKjNBrKKrpx7IOWENaC-APLqmf2PCMmSUwQYdxi3nftT8e_cDXe87eCRGi3szOwKwwVG7BbyiW5O9EJGPsvzeckm_169Yf5y6cHYN171T33Q7-dpFvb5yG8hG9HfyIhq7JiO1qDr-swapIPqjvH7ir3Zqb0INk1QqLB-_qlPQ-IMErq0QF_FK114Rpbf1y6NsS1o1Dk-bzp6CYvnjGWmyhKI2d6HXLgwckd--_dqKZ54bIF9CQWx5OQmLFvFCQ0Xa_ed8ymeGEPDY-DgGwbyH1lVIR5kzzKC9PdIufrWnarP22w3kCDel8bs69WQKZUEHuBanQRuAnWLGPiy_vgBshSmcH_dDrbWEaPn41g6Kqu&timg=https%3A%2F%2Fss0.bdstatic.com%2F94oJfD_bAAcT8t7mm9GUKT-xh_%2Ftimg%3Fimage%26quality%3D100%26size%3Db4000_4000%26sec%3D1589848545%26di%3Ded60710b4bf7d00bd9aa7fc5c07d5281%26src%3Dhttp%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc5440470619c6048395d6ebeff4212025414266a29a0-dIo4KG_fw658&click_t=1589848548931&s_info=1349_625&wd=&eqid=c6da7b5b0053604e000000035ec329e1'
    }

    let keys = "`username`,`password`,`age`,`sex`,`status`,`avatar`,`desc`,`qq`,`create_time`"
    let values = `'${body.username}', '${body.password}', ${body.age}, ${body.sex}, ${body.status}, '${body.avatar}', ${body.desc}, ${body.qq}, now()`
    let res = await DB.insert('user', keys, values)
    if (res) {
        ctx.body = '添加成功'
    }else{
        ctx.body = '添加失败'
    }
})

// // 修改用户信息
// router.post('/update', async ctx => {
//     let body = ctx.request.body
//     let id = ctx.query.id
//     let path = JSON.stringify(ctx.request.files.avatar.path);
//     body.avatar = path
//     body.password = md5(body.password)
//     let data = await DB.update('user', {"_id": DB.getObjectId(id)}, body)
//     if (data.result.n == 1) {
//         ctx.body = '修改成功'
//     }else{
//         logFile(e)
//         ctx.body = '修改失败'
//     }
// })
//
// 删除用户
router.delete('/del', async ctx => {
    let id = ctx.request.body
    id = id.join(',')

    let data = await DB.remove('user', id)
    if (data.result) {
        ctx.body = '删除成功'
    }else{
        ctx.body = '删除失败'
    }
})

module.exports = router.routes()