<template>
  <div>
    <ul>
      <li v-for="item in brands" :class="$style.listItem">
        <div :class="$style.listBrandName">
          <span :class="$style.brandName">{{item.brandName}}</span>
          <p>
            <button v-touch:tap="rmBrand(item)">删除</button>
            <button v-touch:tap="reviseBrand(item)">更改品牌</button>
          </p>
        </div>
        <div :class="$style.listRight">

        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props:['brands'],
  data() {
    return {
      key: 'value'
    }
  },
  methods:{
    rmBrand(item){
      return ()=>{
        this.$emit('rmBrand',item,'REMOVE')
      }
    },
    reviseBrand(item){
      return ()=>{
        this.$emit('reviseBrand',item,'CHANGE')
      }
    }
  }
}

</script>

<style lang="stylus" module>
.listItem
 width 92%
 height 100px
 font-size 14px
 margin 14px auto 0px auto
 background #ffffff
 border 1px solid #eeeeee
 border-left 6px solid #019ddd
 border-radius 10px
 box-sizing border-box
 box-shadow 0px 4px 2px 0px #eeeeee
 margin-bottom 14px

.listBrandName
 height 50%
 width 92%
 margin 0 auto
 display flex
 align-items center
 justify-content space-between
 border-bottom 1px solid #eeeeee
 .brandName
  width 30%
  height 100%
  display flex
  align-items center
  box-sizing border-box
  padding-left 4px
 p
  width 70%
  height 100%
  display flex
  align-items center
  button
   width 40%
   height 50%
   color #019ddd
   font-size 14px
   margin 0 10px 0 10px
   border-radius 4px
   background #ffffff
   border 1px solid #019ddd
.listRight
 width 100%
 height 50%
 p
  width 100%
  display flex
  justify-content center
  button
   width 50%
   height 50%
   color #019ddd
   font-size 14px
   border-radius 4px
   border 1px solid #019ddd
   margin 14px 10px 0px 10px
   background #ffffff
</style>
