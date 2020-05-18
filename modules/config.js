const mysql = require('mysql')

var config = mysql.createConnection({
    host     : 'localhost', //host
    user     : 'root', //数据库用户名
    password : 'root', //密码
    database : 'dream_blog' //数据库名
});

module.exports = config