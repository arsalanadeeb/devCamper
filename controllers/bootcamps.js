
const Bootcamp = require('../models/bootcamp');
//@desc GET all bootcamps
//@route GET /api/v1/bootcamps
//access Public
exports.getBootcamps = async (req,res,next)=>{
    const bootcamps = await Bootcamp.find();
    res.status(201).json({
      success:true,
      response:{
        data:bootcamps
      }
    });
}

//@desc GET single bootcamps
//@route GET /api/v1/bootcamps/:id
//access Public
exports.getBootcamp = async (req,res,next)=>{
  const bootcamps = await Bootcamp.findById(req.params.id);
  if(!bootcamps){
    res.status(400).json({
      success:false,
  })
}
  res.status(201).json({
    success:true,
    response:{
      data:bootcamps
    }
  });
}

//@desc Create new bootcamps
//@route POST /api/v1/bootcamps/:id
//access Private
exports.createBootcamp = async (req,res,next)=>{
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
      success: true,
      response: bootcamp,
    });
}
//@desc Update existing bootcamp
//@route PUT /api/v1/bootcamps/:id
//access Private
exports.updateBootcamp = async (req,res,next)=>{
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true,
  });
  if(!bootcamp){
    return res.status(400).json({success:false});
  }
  res.status(200).json({success:true,data:bootcamp});
}

//@desc Delete existing bootcamp
//@route DELETE /api/v1/bootcamps/:id
//access Private
exports.deleteBootcamp = async (req,res,next) => {
try{
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if(!bootcamp){
    return res.status(400).json({success:false});
  }
  res.status(200).json({success:true,data:{}});
}catch(error){
  console.log(error);
  return res.status(400).json({success:false});
}
}