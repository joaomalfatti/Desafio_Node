const multer = require('multer');
const path = require('path');

// Definir onde o arquivo será armazenado temporariamente
const upload = multer({
  dest: path.join(__dirname, '..', '..', 'uploads/'),
});

router.post('/import', upload.single('file'), taskController.importTasksFromCSV);
