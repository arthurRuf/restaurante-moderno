const multer = require('multer');
const path = require('path');

module.exports = {
storage: multer.diskStorage({
    //entender em varios SO
    destination: path.resolve(__dirname ,'..','..','uploads'),
    filename: (req, file, callback)=>{
        const ext = path.extname(file.originalname );
        const name = path.basename(file.originalname, ext);

        callback(null, `${name}-${Date.now()}${path.extname(ext)}`);

    },

}),

};