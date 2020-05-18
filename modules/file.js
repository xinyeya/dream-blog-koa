const multer = require('koa-multer')

const storage = multer.diskStorage({
    destination:'public/uploads/'+new Date().getFullYear() + (new Date().getMonth()+1) + new Date().getDate(),
    destination(req,res,cb){
        cb(null,'public/uploads/'+new Date().getFullYear() + (new Date().getMonth()+1) + new Date().getDate());
    },

    filename(req,file,cb){
        const filenameArr = file.originalname.split('.');
        cb(null,Date.now() + '-' + filenameArr[filenameArr.length-1]);
    }
});

const upload = multer({storage});
module.exports = upload