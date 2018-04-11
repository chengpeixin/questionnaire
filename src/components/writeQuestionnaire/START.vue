<template>
  <div>
    <span v-for="item in info.items" :class="$style.star" v-touch:tap="select()"><img :src="notselect"></span>
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
        isselect:img2
      }
    },
    methods:{
      select(){
        return (e)=>{
          console.log('点击了')
        }
      }
    }
  }
</script>

<style lang="stylus" module>
.star
 width 24px
 height 24px
 display inline-block
 padding 10px 4px
 img
  width 100%
</style>
