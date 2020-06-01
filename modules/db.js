// const config = require('./config')
const mysql = require('mysql')

var pool  = mysql.createPool({
    host     : 'localhost', //host
    user     : 'root', //数据库用户名
    password : 'root', //密码
    database : 'dream_blog' //数据库名
});

let db = function( sql ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve( err )
            } else {
                connection.query(sql, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = db