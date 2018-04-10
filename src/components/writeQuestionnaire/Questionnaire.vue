<template>
  <div>
    <ul :class="$style.fulllist">
      <li v-for="(item,index) in wjList" :key="item.id" :class="$style.list">
        <p :class="$style.listtitle">{{index+1}}．{{item.wtName}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import WjData from '@/assets/data/Questionnaire.json'
export default {
  name:"questionnaire",
  data() {
    return {
      wjList: WjData.result
    }
  },
  created(){
    console.log(this.list)
  },
  methods:{}
}
</script>

<style lang="stylus" module>
.fulllist
 .list
  width 92%
  margin 20px auto 0 auto
  border 1px solid #eeeeee
  border-radius 4px
  background #ffffff
 .listtitle
  font-size 14px
  line-height 22px
  padding 10px
  box-sizing border-box
  border-bottom 1px solid #eeeeee
</style>
