const mysql = require('./config')

let db = (sql) => {
    return new Promise((resolve, reject) => {
        mysql.query(sql, (error, results, fields)=>{
            if (error) {
                reject(error)
            }
            resolve(results)
        })
    })
}

module.exports = db