
const express=require('express');
const app=express();
const task=require('./routes/task');
// middleware
app.use(express.json())
app.use('/task',task)

app.listen(3000,()=>{
  console.log(" server is up and listening .. ");

})
