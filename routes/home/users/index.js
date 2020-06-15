const db = require('../../../modules/db')

module.exports = async () => {
    let sql = 'SELECT username, avatar, a_num FROM users'
    let res = db(sql)
    return res
}