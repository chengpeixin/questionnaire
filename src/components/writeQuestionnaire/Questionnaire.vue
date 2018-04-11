<template>
  <div>
    <ul :class="$style.fulllist">
      <li v-for="(item,index) in wjList" :key="item.id" :class="$style.list">
        <p :class="$style.listtitle">{{index+1}}．{{item.wtName}}</p>
        <div :class="$style.problem" v-for="wjItem in brands" :key="wjItem.id">

          <div :class="$style.brandname">
            {{wjItem.name}}
          </div>
          <div v-if="item.wtType=='TEXT'" :class="$style.brandwt">
            <INPUT v-for="wtitem in item.items" :key="wtitem.id"></INPUT>
          </div>
          <div v-if="item.wtType=='STAR'" :class="$style.brandwt">
            {{item.wtType}}
          </div>
          <div v-if="item.wtType=='RADIO'" :class="$style.brandwt">
            {{item.wtType}}
          </div>
          <div v-if="item.wtType=='TEXTAREA'" :class="$style.brandwt">
            <TEXTAREA></TEXTAREA>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import WjData from '@/assets/data/Questionnaire.json'
import { mapState } from 'vuex'
import INPUT from '@/components/writeQuestionnaire/INPUT'
import TEXTAREA from '@/components/writeQuestionnaire/TEXTAREA'
import RADIO from '@/components/writeQuestionnaire/RADIO'
export default {
  name:"questionnaire",
  data() {
    return {
      wjList: WjData.result
    }
  },
  created(){
    console.log(this.wjList)
  },
  methods:{},
  computed:{
    ...mapState({
      brands:state =>state.brands
    })
  },
  components:{
    INPUT,
    TEXTAREA
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
  padding 0 10px
  display flex
  justify-content space-between
  align-items center
  .brandname
   color red
  .brandwt
   color blue
</style>
