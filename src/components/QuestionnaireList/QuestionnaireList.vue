<template>
<div>
  <Hheader :cname="title"></Hheader>
  <Seat><p :class="$style.prompt">请先填写本院设备售后调查问卷，系统会自动为您生成报告</p></Seat>
  <List></List>
</div>
</template>

<script>
import Hheader from '@/components/core/Hheader'
import Seat from '@/components/core/Seat'
import List from '@/components/QuestionnaireList/List'
export default {
  name: 'QuestionnaireList',
  data () {
    return {
      title:"选择产品线"
    }
  },
  created(){
    Array.prototype.isKey=function(key){
      if (this.indexOf(key)!=-1){
        return true;
      }else {
        return false;
      }
    }
  },
  methods:{},
  components:{
    Hheader,
    Seat,
    List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" module>
.div
 display block
 background red
 opacity 1
.prompt
 height 30px
 color #f64b42
 font-size 12px
 display flex
 align-items center
 justify-content center
</style>
