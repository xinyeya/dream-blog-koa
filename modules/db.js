const mysql = require('./config')

class Db {

    // 单例
    // 解决多次实例化无共享的问题
    static  getInstance () {
        if (!Db.instance){
            Db.instance = new Db()
        }
        return Db.instance
    }

    constructor() {
        this.dbClient = '' // 属性，放db对象
        this.connect() // 实例化的时候就连接数据库
    }

    // 连接
    connect(){
        return new Promise((resolve, reject) => {
            if (!this.dbClient){ // 解决数据库多次连接的问题
                mysql.connect()
            }
        })
    }

    // 查询条数
    count (collectionName, searchName, search) {
        return new Promise((resolve, reject) => {
            let sql = ''
            if (search == 1) {
                sql = `select count(id) as total from ${collectionName}` //sql语句
            }else{
                sql = `select count(id) as total from ${collectionName} where ${searchName} like '%${search}%'` //sql语句
            }

            mysql.query(sql, function (error, results) {
                if(error) {
                    reject(error);
                }
                resolve(results) //返回查询数据库的结果
            })
        })
    }

    // 查询
    find (collectionName, columnName, searchName, search, skips, limits) {
        return new Promise((resolve, reject) => {
            let sql = ''
            if (search == 1) {
                sql = "select " + columnName + " from " + collectionName + " limit " + skips + "," + limits //sql语句
            }else{
                sql = "select " + columnName + " from " + collectionName + " where " + searchName + " like " + "\'%" + search + "%\'" + " limit " + skips + "," + limits //sql语句
            }
            console.log(sql)
            mysql.query(sql, (error, results, fields) => {
                if(error) {
                    reject(error);
                }
                resolve(results) //返回查询数据库的结果
            })
        })
    }

    // 添加
    insert (collectionName, keys, values) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO ' + collectionName + " (" + keys + ") VALUES (" + values + ");"
            mysql.query(sql, (error, results, fields)=>{
                if (error) {
                    reject(error)
                }
                resolve(results)
            })
        })
    }

    // 删除
    remove (collectionName, id) {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM ${collectionName} WHERE id IN (${id});`
            mysql.query(sql, (error, results, fields)=>{
                if (error) {
                    reject(error)
                }
                resolve(results)
            })
        })
    }
}

module.exports = Db.getInstance()