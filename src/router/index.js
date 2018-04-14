import Vue from 'vue'
import Router from 'vue-router'
import QuestionnaireList from '@/components/QuestionnaireList/QuestionnaireList'
import FillQuestionnaire from '@/components/writeQuestionnaire/FillQuestionnaire'
import BrandList from '@/components/writeQuestionnaire/BrandList'
import Viewres from '@/components/Viewres/Viewres'

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
    },
    {
      path:'/BrandList',
      name:'BrandList',
      component: BrandList
    },
    {
      path: '/Viewres',
      name: 'Viewres',
      component: Viewres
    },
  ]
})
