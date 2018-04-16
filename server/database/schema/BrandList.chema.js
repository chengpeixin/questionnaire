const mongoose = require('mongoose')
const Schema = mongoose.Schema

const brand_schema = new Schema({
  id:{
    unique:true,
    type:Number
  },
  brandChi:String,
  brandEng:String,
  brandName:String,
  brandOther:{
    default:"暂无",
    type:String
  }
})

brand_schema.pre('save',function(next){
  next()
})
mongoose.model('BrandList', brand_schema)
