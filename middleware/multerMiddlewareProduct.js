const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname + "/../public/images"));
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + "" + file.originalname)
    },
});

const upload = multer({storage : storage});

module.exports = upload;












/*const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null, path.join(__dirname + '/../../public/img/users'));
   },
   
   filename: (req, file, cb)=>{
       cb(null, 'user-'+ file.fieldname +  Date.now() + path.extname(file.originalname)); 
       }
});

const uploadfile = multer({ storage: storage });

module.exports = uploadfile;*/
