const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const QuestionnaireList_schema = new Schema({
  id:Number,
  wjName:{
    unique: true,
    type:String
  },
  examWjid:Number,
  wjCode:{
    unique: true,
    type:String
  }
})
QuestionnaireList_schema.pre('save',function(next){
  next()
})

mongoose.model('QuestionnaireList', QuestionnaireList_schema)
