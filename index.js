const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());

app.use('/', require('./api/routes/index'));

app.listen(3000, () => {
    console.log(`Corriendo en puerto ${3000}...`)
})