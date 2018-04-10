<template>
  <div>
    <Hheader :cname="title"></Hheader>
    <div>
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
  data() {
    return {
      title: '添加品牌',
      list:brandsData.result[0].allBrands,
      ismodify:""
    }
  },
  created(){
    // 用于区分是添加品牌和更改品牌，添加为false,更改为true
    this.ismodify = !!this.$route.params.ismodify;
  },
  methods:{
    selectBrand(item){
      return ()=>{
        const brandData = {
          id:item.id||-1,
          name:item.brandName,
          models:[]
        }
        if (this.ismodify){
          this.$store.commit('modifybrand',brandData)
        }else {
          this.$store.commit('addbrand',brandData)
        }
      }
    }
  },
  components:{
    Hheader
  },
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
