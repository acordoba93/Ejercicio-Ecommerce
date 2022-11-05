const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/usuarios');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });

module.exports = uploadFile;













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
