<template>
<div :class="$style.bidF">
  <div :class="$style.bid">
    <div :class="$style.bidNav">
      <span v-touch:tap="back"><</span>
      <h2>{{cname}}</h2>
      <strong><slot></slot></strong>
    </div>
  </div>
</div>

</template>

<script>
  export default {
    props:{
      cname:{
        type:String,
        default:"帅死了"
      }
    },
    methods:{
      back:function(){
        history.back()
      }
    }
  }
</script>

<style lang="stylus" module>
.bidF
 height 50px
.bid
  width 100%
  height 50px
  position fixed
  box-sizing border-box
  background-color #019ddd
  z-index 999
  .bidNav
   height 100%
   display flex
   span
    position absolute
    height 100%
    width 20%
    display flex
    align-items center
    padding-left 0.26666667rem
    left 0
   h2
    width 100%
    display flex
    align-items center
    justify-content center
    color #FFFFFF
    font-size 18px
    font-weight normal
   strong
    width 20%
    height 100%
    color #FFFFFF
    font-size 18px
    font-weight normal
    position absolute
    right 0
    display flex
    align-items center
</style>
