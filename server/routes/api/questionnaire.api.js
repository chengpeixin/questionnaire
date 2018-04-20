const mongoose = require('mongoose')
const Question = mongoose.model('QuestionnaireList')
const URL = require('url');
class Questionnaire{
  static async getbrand(ctx){
    const params = ctx.request.body;
    console.log(params)
    if (!params.id){
      ctx.body = {
        data:['无数据']
      }
      return;
    }
    const result = await Question.findOne({
      id:params.id
    })
    console.log(result)
    const data = await result.brand;
    ctx.body = {
      data
    }
  }
  static async getproblem(ctx){
    //返回操作
    const result = await Question.find({})
    const data = []
    result.forEach(item => {
      data.push({
        id: item.id,
        wjName: item.wjName,
        examWjid: item.examWjid,
        wjCode: item.wjCode
      })
    })
    ctx.body = {
      data
    }
  }
}

module.exports = Questionnaire;
