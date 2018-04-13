<template>
  <div>
    <input type="text" v-for="wtitem in info.items" :key="wtitem.id" :class="$style.ipt" v-model="val" v-on:input="setWjdata(wtitem)">
  </div>
</template>

<script>

export default {
  props: {
    info: {
      type: Object,
      required:true
    },
    brandIndex:{
      type:Number,
      required:true
    },
    wtindex:{
      type:Number,
      required:true
    }
  },
  data() {
    return {
      val: ""
    }
  },
  methods:{
    setWjdata(data){
      this.$store.commit('addwenti',{
        brandIndex:this.brandIndex,
        index:this.wtindex,
        val:this.val
      })
    }
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
