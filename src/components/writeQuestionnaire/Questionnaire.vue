<template>
  <div>
    <ul :class="$style.fulllist">
      <li v-for="(item,index) in wjList" :key="item.id" :class="$style.list">
        <p :class="$style.listtitle">{{index+1}}．{{item.wtName}}</p>
        <div :class="$style.problem" v-for="(wjItem,brandIndex) in brands" :key="wjItem.id">
          <div :class="$style.brandname">{{wjItem.name}}</div>
          <INPUT  v-if="item.wtType=='TEXT'" :info="item" :brandIndex="brandIndex" :wtindex="index"></INPUT>
          <START v-if="item.wtType=='STAR'" :info="item" :brandIndex="brandIndex" :wtindex="index"></START>
          <RADIO v-if="item.wtType=='RADIO'" :info="item" :brandIndex="brandIndex" :wtindex="index"></RADIO>
          <TEXTAREA  v-if="item.wtType=='TEXTAREA'" :info="item" :brandIndex="brandIndex" :wtindex="index"></TEXTAREA>
        </div>
      </li>
    </ul>
    <Submit></Submit>
  </div>
</template>

<script>
import WjData from '@/assets/data/Questionnaire.json'
import { mapState } from 'vuex'
import INPUT from '@/components/writeQuestionnaire/INPUT'
import TEXTAREA from '@/components/writeQuestionnaire/TEXTAREA'
import RADIO from '@/components/writeQuestionnaire/RADIO'
import START from '@/components/writeQuestionnaire/START'
import Submit from '@/components/writeQuestionnaire/Submit'
export default {
  name:"questionnaire",
  data() {
    return {
      wjList: WjData.result
    }
  },
  computed:{
    ...mapState({
      brands:state =>state.brands
    })
  },
  components:{
    INPUT,
    TEXTAREA,
    RADIO,
    START,
    Submit
  }
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
 .problem
  border-bottom 1px solid #eeeeee
  box-sizing border-box
  padding 5px 10px
  display flex
  justify-content space-between
  align-items center
  .brandname
   color #019ddd
</style>
