<template>
  <div>
    <ul>
      <li v-for="item in this.$store.state.brands" :class="$style.listItem">
        <div :class="$style.listBrandName">
          <span :class="$style.brandName">{{item.name}}</span>
          <p>
            <button v-touch:tap="rmBrand(item)">删除</button>
            <button v-touch:tap="modifyBrand(item)">更改品牌</button>
          </p>
        </div>
        <div :class="$style.listRight">
          添加型号
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  methods:{
    rmBrand(item){
      return ()=>{
        this.$store.commit('rmbrand', item)
      }
    },
    modifyBrand(item){
      return ()=>{
        for (let i=0;i<this.$store.state.brands.length;i++){
          const el = this.$store.state.brands[i]
          if (el.name == item.name){
            this.$store.commit('changeindex',i)
            this.$router.push({name:'BrandList', params: { 'ismodify': true ,qutionId:this.$route.query.id}})
          }
        }
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
 font-size 12px
 color #999
 display flex
 align-items center
 justify-content center
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
