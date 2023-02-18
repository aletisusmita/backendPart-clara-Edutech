const models=require("../model/moviesSchema")

const addMovies=async function(req,res){
  try{
  let data=req.body
  let {name,description,category}=data

  if(!name){
    return res.status(400).send({status:false,message:"must required name"})
  }

  if(!description){
    return res.status(400).send({status:false,message:"must required description"})
  }

  if(!category){
    return res.status(400).send({status:false,message:"must required category"})
  }

  let saveData=await models.create(data)   
  return res.status(201).send({status:true,msg:saveData}) 
  }
  catch (err) {
    return res.status(500).send({ status: false, message: err.message })
}
}



module.exports={addMovies}