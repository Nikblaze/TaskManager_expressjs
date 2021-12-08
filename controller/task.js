const getAllTask=(req,res)=>{
  res.send('all item for getAllTask')
}
const createTask=(req,res)=>{
  res.json(req.body)
}
const getTask=(req,res)=>{
  res.json({id:req.params.id})
}
const updateTask=(req,res)=>{
  res.send('all item for updateTask')
}
const deleteTask=(req,res)=>{
  res.send('all item for deleteTask')
}
module.exports={
  getAllTask,
  createTask,
  updateTask,
  getTask,
  deleteTask
}
