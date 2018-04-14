<template>
  <div :class="$style.btn">
<mt-button type="primary" size="large" :class="$style.btn" v-touch:tap="submit">提交问卷</mt-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods:{
    submit(){
      for (let i=0;i<this.brands.length;i++){
        const brand_item = this.brands[i]
        const wentis = brand_item.wentis;
        if (brand_item.models.length==0){
          alert(`您第${++i}个品牌没添加型号，请添加型号`);
          // return;
        }
        for (let k=0;k<wentis.length;k++){
          const wenti_item = wentis[k]
          if (wenti_item.wtiValue==""){
            alert(`您第${++k}题未填写`);
            return;
          }
        }
      }
      // 如果进行到这里代表用户已经填写完毕,发送请求
      this.$router.replace({   path: '/Viewres'})
    }
  },
  computed:{
    ...mapState({
      brands:state=>state.brands
    })
  }
}
</script>

<style lang="stylus" module>
.btn
 width 92%
 margin 20px auto 40px auto
</style>
