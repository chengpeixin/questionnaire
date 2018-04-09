<template>
  <div style="background:#F6F6F6;">
    <Hheader :cname="title" v-if="!showBrandList"></Hheader>
    <BrandList v-if="showBrandList" :show="showBrandList" :brandAry="addBrandList"@change="getBrand" :tapState="tapState" :oldChangeBrand="oldChangeBrand"></BrandList>
    <Seat v-if="!showBrandList"><p :class="$style.info1"> 设备基本信息（请至少添加一个品牌）</p></Seat>
    <BrandOrModel v-if="!showBrandList" :brands="addBrandList" @rmBrand="rmBrand" @reviseBrand="reviseBrand"></BrandOrModel>
    <mt-button v-if="!showBrandList" :style="this.style.btn" type="primary" size="large" v-touch:tap="addBrand">添加品牌</mt-button>
    <Seat v-if="!showBrandList"><p :class="$style.info1">售后服务</p></Seat>
  </div>
</template>

<script>
import Hheader from '@/components/core/Hheader'
import BrandList from '@/components/writeQuestionnaire/BrandList'
import Seat from '@/components/core/Seat'
import QuestionnaireData from '@/assets/data/Questionnaire.json'
import BrandOrModel from '@/components/writeQuestionnaire/BrandOrModel'
export default {
  name:'FillQuestionnaire',
  data() {
    return {
      title: '填写问卷',
      data:QuestionnaireData,
      addBrandList:[],
      style:{
        btn:`width:92%;width 92%; margin: 0 auto 10px auto;`
      },
      showBrandList:false,
      tapState:'',
      oldChangeBrand:{}
    }
  },
  created:function(){
    this.geturl()
  },
  methods:{
    geturl(){
      const ids = this.$route
    },
    addBrand(){
      this.showBrandList = !this.showBrandList;
      this.tapState = 'ADD';
    },
    getBrand(newBrand,showss,state,oldBrand){
      // 添加品牌和更改品牌逻辑
      if (state=="ADD"){
        this.addBrandList.push(newBrand)
      }else if (state=="CHANGE"){
        for (let i=0;i<this.addBrandList.length;i++){
          const el = this.addBrandList[i]
          if (el==oldBrand){
            this.$set(this.addBrandList,i,newBrand)
          }
        }
      }
      this.showBrandList = showss;
      console.log(this.addBrandList)
    },
    rmBrand(rmInfo){
      if (confirm('品牌删除后，填写的题目数据将被清空，是否还要清除？')){
        for (let i = 0; i < this.addBrandList.length; i++) {
          var el= this.addBrandList[i];
          if (el==rmInfo){
            this.addBrandList.splice(i,1)
          }
        }
      }
    },
    reviseBrand(reviseInfo,state){
      this.showBrandList = true
      this.tapState = state;
      this.oldChangeBrand=reviseInfo
    }
  },
  components:{
    Hheader,
    BrandList,
    Seat,
    BrandOrModel
  }
}
</script>

<style lang="stylus" module>
.info1
 font-size 15px
 color #019DDD
 height 18px
 width 92%
 line-height 18px
 margin 10px auto
 padding-left 10px
 box-sizing border-box
 border-left 4px solid #019ddd


.addBrand
 width 92%
 width 92%
 margin 0 auto 10px auto
</style>
