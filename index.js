const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
app.use(bodyParser.urlencoded({ extended: false}))
const port = 3000

userRoute(app)

app.get('/', (req, res) => res.send('Ola mundo pelo Express.'))

app.listen(port, () => console.log('API rodando na porta 3000'))