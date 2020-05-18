const fs = require('fs'),
    date = require('silly-datetime')

logFile = (data) => {
    // 写入目录
    let path = process.cwd() + '\\log\\log.txt'

    // 获取当前时间
    let today = date.format(new Date(),'YYYY-MM-DD')
    data = `时间：${today}\n错误：${data}\n\n`
    console.log(data)
    fs.appendFile(path, data, 'utf8',function (error, data) {
        if (error) {
            console.log('写入日志失败了')
        }
    })
}

module.exports = logFile
