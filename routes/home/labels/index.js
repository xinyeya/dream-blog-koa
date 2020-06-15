const db = require('../../../modules/db')

// 获取所有标签
module.exports = async () =>  {
    let sql = "SELECT title FROM labels"
    let res = await db(sql)
    return res
}
