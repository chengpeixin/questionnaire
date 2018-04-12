<template>
  <div>
    <input type="text" v-for="wtitem in info.items" :key="wtitem.id" :class="$style.ipt" v-model="val">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    info: {
      type: Object,
      required:true
    },
    brandIndex:{
      type:Number,
      required:true
    }
  },
  data() {
    return {
      val: ""
    }
  },
  computed:{
   ...mapState({
      brands:state =>state.brands
   })
  }
}
</script>

<style lang='stylus' module>
.ipt
 height 24px
 box-sizing border-box
 margin 10px 0px
 border 1px solid #999
 padding-left 4px
 border-radius 4px
</style>
