const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());

app.listen(3000, () => {
    console.log(`Corriendo en puerto ${3000}...`)
})