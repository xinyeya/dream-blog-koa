const logFile = require('./log')
module.exports = async (ctx, next) => {
    try {
        ctx.error = (code, message) => {
            if (typeof code === 'string') {
                message = code;
                code = 500;
            }
            ctx.throw(code || 500, message || '服务器错误');
        };
        await next();
    } catch (e) {
        // 写入日志
        logFile(e.stack)
        let status = e.status || 500;
        let message = e.message || '服务器错误';
        ctx.response.body = { status, message };
    }
}