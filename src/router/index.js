import Vue from 'vue'
import Router from 'vue-router'
import QuestionnaireList from '@/components/QuestionnaireList/QuestionnaireList'
import FillQuestionnaire from '@/components/writeQuestionnaire/FillQuestionnaire'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuestionnaireList',
      component: QuestionnaireList
    },
    {
      path:'/FillQuestionnaire',
      name:'FillQuestionnaire',
      component: FillQuestionnaire
    }
  ]
})
