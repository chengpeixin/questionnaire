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
// import brandsData from '@/assets/data/brand.json'
import { mapState } from 'vuex'
import WjData from '@/assets/data/Questionnaire.json'

export default {
  data() {
    return {
      title: '添加品牌',
      list:brandsData.result[0].allBrands,
      ismodify:"",
      wjList: WjData.result,
      qutionId:this.$route.params.qutionId
    }
  },
  created(){
    // 用于区分是添加品牌和更改品牌，添加为false,更改为true
    this.ismodify = !!this.$route.params.ismodify;
    this.getBrand()
  },
  methods:{
    selectBrand(item){
      return ()=>{
        let wentis = []
        for (let k=0;k<this.wjList.length;k++){
          wentis.push({
            wtId: this.wjList[k].id,
            wtiValue:""
          })
        }
        const brandData = {
          id:item.id||-1,
          name:item.brandName,
          wentis,
          models:[]
        }
        if (this.ismodify){
          this.$store.commit('modifybrand',brandData)
        }else {
          this.$store.commit('addbrand',brandData)
        }
      }
    },
    getBrand(){
      const that = this
      this.$http.post('/api/getbrand',{id:this.qutionId}).then(res=>{
        that.list = res.data.data;
      }).catch(err=>{
        alert('获取参数错误，请重试')
        alert(err)
      })
    }
  },
  computed:{
    ...mapState({
      brands:state =>state.brands
    })
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
