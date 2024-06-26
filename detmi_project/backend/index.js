require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

const app = express()
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
app.use(cors())
app.use(express.json())

app.use('/api', router)
app.use(errorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server is running',PORT))
    } catch (e){
        console.log(e)
    }
}

start()
