const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
const productsRoutes = require('./routes/productsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const path = require('node:path')
const dotenv = require('dotenv')
dotenv.config()
console.log('DB:', process.env.DB); // This will print the connection string or undefined

app.listen(process.env.PORT,()=>{
    console.log('Server Started at:'+process.env.PORT );
})

mongoose.connect(process.env.DB)
.then(()=>{
    console.log('DB Connected');
})

app.use(express.static(path.join(__dirname,'')))
app.use(express.json())
app.use(cookieParser())

app.use('/users',usersRoutes)
app.use('/products',productsRoutes)