<template>
  <div style="background:#F6F6F6;">
    <Hheader :cname="title"></Hheader>
    <Seat><p :class="$style.info1">设备基本信息（请至少添加一个品牌）</p></Seat>
    <BrandOrModel></BrandOrModel>
    <mt-button :style="this.style.btn" type="primary" size="large" v-touch:tap="addBrand">添加品牌</mt-button>
    <Seat><p :class="$style.info1">售后服务</p></Seat>
    <Questionnaire></Questionnaire>
  </div>
</template>

<script>
import Hheader from '@/components/core/Hheader'
import Seat from '@/components/core/Seat'
import BrandOrModel from '@/components/writeQuestionnaire/BrandOrModel'
import Questionnaire from '@/components/writeQuestionnaire/Questionnaire'

export default {
  name:'FillQuestionnaire',
  data() {
    return {
      title: '填写问卷',
      style:{
        btn:`width:92%;width 92%; margin: 0 auto 10px auto;`
      }
    }
  },
  methods:{
    addBrand(){
      this.$router.push('BrandList')
    }
  },
  components:{
    Hheader,
    Seat,
    BrandOrModel,
    Questionnaire
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
