const express = require('express')
const multer = require('multer')
const bodyParser = require("body-parser");
const path = require('path')
const json_db = require('./json_db')

const app = express()
const port = 3000

// Настройка CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/upload'),
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
})

const getError = (res, e) => {
  console.error(e)
  res.status(500).json({
    error: 'Произошла ошибка при обработке запроса',
    message: e.message
  })
}

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const image = req.file && req.file.originalname
    const { login, password } = req.body
  
    await json_db.writeToTable('test', { image, login, password })
    const db = await json_db.getTable('test')
    res.json(db)
  } catch(e) {
    getError(e)
  }
})

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`)
})