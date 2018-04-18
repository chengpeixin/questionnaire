<template>
  <div>
    <ul>
      <li :class="$style.notload" v-for="item in skeleton"></li>
    </ul>
    <ul :class="$style.full">
      <li :class="$style.listItem" v-for="(item,index) in dataList" :key="item.id" v-touch:tap="tapgo(item)" >
        <span :class="$style.wjname">{{item.wjName}}</span>
        <span v-if="item.examWjid==0" :class="$style.toWrite">填写报告</span>
        <span v-else :class="$style.lock">查看问卷</span>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '@/assets/data/getQuestionnaireList'

export default {
  data() {
    return {
      isload:true,
      skeleton:5,
      dataList:[]
    }
  },
  created(){
    const that = this
    this.$http.get('http://xinpeicheng.com:8070/api/getproblem').then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    // 模拟ajax加载
    // setTimeout(function() {
      that.ajax_load()
    // }, 2000);
  },
  methods:{
    ajax_load:function(){
      this.skeleton = 0;
      this.dataList = data.result
    },
    tapgo(data){
      return ()=>{
        if (data.examWjid==0){
          this.$router.push({path:'/FillQuestionnaire',params:{ userId: 123 },query:{id:data.id}})
        }else {
          this.$router.push({path:'/Viewres'})
        }
      }
    }
  }
}
</script>

<style lang="stylus" module>
.notload
 height 60px
 background rgb(180, 188, 204)
 margin 10px 10px 0 10px
 border-radius 6px
 box-shadow 0 10px 10px 0 #ECECEC
 animation: w-opacity 2s infinite linear

.listItem
 height 60px
 margin 10px 10px 0 10px
 border-radius 6px
 box-shadow 1px 1px 1px 1px #ECECEC
 display flex
 align-items center
 justify-content space-between
 .wjname
  float left
  width 70%
  height 100%
  font-size 14px
  padding-left 14px
  display flex
  align-items center
  box-sizing border-box
 .toWrite
  float right
  width 90px
  height 60%
  color #F5A623
  font-size 14px
  display flex
  align-items center
  justify-content center
  border-left 1px solid #eeccee
  box-sizing border-box
 .lock
  float right
  width 90px
  height 60%
  color #019DDD
  font-size 14px
  display flex
  align-items center
  justify-content center
  border-left 1px solid #eeccee
  box-sizing border-box


.full
 padding-bottom 30px


@keyframes w-opacity
 0%
  opacity 1
 10%,90%
  opacity .9
 20%,80%
  opacity .8
 30%,70%
  opacity .7
 40%,60%
  opacity .6
 50%
  opacity .5
 to
  opacity .95

</style>
