const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee');
mongoose.connect('mongodb://127.0.0.1:27017/company');

const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {});
})

app.get('/generate', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})