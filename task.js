const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
  res.send(" this is home page ");
})
router.all('*',(req,res)=>{
  console.log("all router");
})

// return the router in the export
module.exports = router
