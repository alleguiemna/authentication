const express = require('express')
const connectDB = require('./config/connectDB')
const app = express()
const user = require('./routes/user')

app.use(express.json())
connectDB()
app.use('/user',user)

const PORT = process.env.PORT ||5000
app.listen(PORT,(err) => err ? console.log(err) : console.log(`port running on port ${PORT}`))