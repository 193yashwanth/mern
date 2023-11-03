const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    
})

mongoose.connect("mongodb://localhost:27017/task_db", console.log('mongoose is connected'));

app.listen(3001, ()=>console.log('server is running'))