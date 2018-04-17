const mongoose = require('mongoose')
const Brands = mongoose.model('BrandList')
const QuestionnaireList = mongoose.model('QuestionnaireList')
const brandData = require('./brand.json').result;
const QuestionList = require('./getQuestionnaireList.json').result;
const QuestionnaireData = require('./Questionnaire.json').result;
// 向数据库导入数据
brandData.forEach(async item =>{
  let brand = await Brands.findOne({
    id:item.id
  })

  if (!brand){
    // console.log(`没有这条数据id为:${item.id}`)
    brand = new Brands(item)
    await brand.save()
  }else {
    // console.log(`数据已存在${item.id}`)
  }
});


QuestionList.forEach(async item=>{
  let isQuestionnaire = await QuestionnaireList.findOne({
    id:item.id
  })
  if (!isQuestionnaire){
    item['brand'] = brandData;
    item['questionnaire'] = QuestionnaireData;
    // console.log(`没有这条数据id为${item.id}`)
    isQuestionnaire = new QuestionnaireList(item)
    isQuestionnaire.save();
  }else {
    // console.log(`有这条数据了id为${item.id}`)
  }
})
