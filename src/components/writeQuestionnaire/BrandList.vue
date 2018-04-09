<template>
  <div>
    <Hheader :cname="title"></Hheader>
    <div v-if="isshow">
      <ul>
        <li :class="$style.listItem" v-for="item in list" :key="item.id" v-touch:tap="selectBrand(item)">{{ item.brandName }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hheader from '@/components/core/Hheader'
import brandsData from '@/assets/data/brand.json'
export default {
  props:['show','brandAry','tapState','oldChangeBrand'],
  watch:{
    show:function(newShow,oldShow){
      this.isshow = newShow;
    }
  },
  created(){
  },
  data() {
    return {
      title: '添加品牌',
      isshow:this.show,
      list:brandsData.result[0].allBrands
    }
  },
  components:{
    Hheader
  },
  methods:{
    selectBrand(item){
      return ()=>{
        for (let i=0;i<this.brandAry.length;i++){
          const self = this.brandAry[i]
          if (item.brandName==self.brandName){
            alert('不能选择重复的品牌！')
            return;
          }
        }
        this.isshow = false;
        this.$emit('change',item,this.isshow,this.tapState,this.oldChangeBrand)
      }
    }
  }
}
</script>

<style lang="stylus" module>
.listItem
  height 46px
  font-size 14px
  background #ffffff
  box-sizing border-box
  display flex
  align-items center
  justify-content centeraa
  border-bottom 1px solid #eeeeee
  padding-left 10px


</style>
