const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

//serve para organizar melhor os arquivos, permitindo ligar arquivos especificos sem a necessidade do import
consign()
    .include('./config/passport.js')
	.then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})
