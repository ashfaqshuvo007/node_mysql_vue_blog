const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
//Load Config
dotenv.config({ path: './config/config.env' })


const app = express()
const PORT = process.env.PORT || 5000

//User CORS
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))


//DB Connection
const db = require('./db_config/db_config')
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }')
})


//Routes
require('./route/user.route')(app)


//Start server
app.listen(
    PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT} `)
)