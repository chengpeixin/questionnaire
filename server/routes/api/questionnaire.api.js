const mongoose = require('mongoose')
const Question = mongoose.model('QuestionnaireList')
const URL = require('url');
class Questionnaire{
  static async getbrand(ctx){
    const url = ctx.request.url,
    params = URL.parse(url);
    console.log(params.query)
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
      data: data
    }
  }
}

module.exports = Questionnaire;
