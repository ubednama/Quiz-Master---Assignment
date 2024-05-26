const express = require('express')
require('express-async-errors')

const { ServerConfig } = require('./config');
const routes = require('./routes');
const connectDB = require('./db/db.connect');

const app = express();
const PORT = ServerConfig.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.use('/', routes)

const startServer = async() => {
    try {
        await connectDB()
        app.listen(PORT, ()=> {
            console.log(`Server is running on Port ${PORT}`)
        })
    } catch (error) {
        console.error(error)
    } 
}   

startServer();