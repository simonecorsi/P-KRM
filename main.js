const path = require('path')
const ENV_PATH = process.env.NODE_ENV === 'production' ? path.resolve('.env') : path.resolve('.env.dev')

require('dotenv').config({ path:  ENV_PATH })
const secrets = require('./server/configs/secrets')

const { NODE_ENV } = process.env || 'dev'
const { SERVER_PORT } = secrets

process.title = secrets.SERVER_NAME

const app = require('./server')


app.listen(SERVER_PORT)
console.log(`Server up on: ${SERVER_PORT}`)