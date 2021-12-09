const express=require('express');
const app=express();
const task=require('./routes/task');

const connectDB = require('./db/connect')
require('dotenv').config()
// middleware
app.use(express.json())
app.use('/task',task)

const start = async () =>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(3000,()=>{
      console.log("Server is listening .. ");
    })

  } catch (e) {
    console.log(e);
  }
}
start()
