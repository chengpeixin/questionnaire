<template>
  <div>
      <img v-for="(item,index) in info.items" :class="$style.star" v-touch:tap="select(index)" :src="starNumber(index)">
  </div>
</template>

<script>
import img1 from '@/assets/img/star1.png'
import img2 from '@/assets/img/star2.png'
  export default {
    props:{
      info:{
        type:Object,
        required:true
      }
    },
    data() {
      return {
        notselect: img1,
        isselect:img2,
        number:-1
      }
    },
    methods:{
      select(index){
        return (e)=>{
          this.number = index;
        }
      },
      starNumber(index){
        if(this.number>=index){
          return this.isselect;
        }else {
          return this.notselect;
        }
      }
    }
  }
</script>

<style lang="stylus" module>
.star
 width 26px
 height 24px
 display inline-block
 margin 0 2px
 padding 2px 0px
</style>
