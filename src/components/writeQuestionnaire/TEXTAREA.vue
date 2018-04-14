<template>
  <div>
    <textarea v-for="item in info.items" v-model="val" v-on:input="writewj"></textarea>
  </div>
</template>

<script>
export default {
  data(){
    return {
      val:""
    }
  },
  props:{
    info:{
      type:Object,
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
  methods:{
    writewj(){
      this.$store.commit('addwenti',{
        brandIndex:this.brandIndex,
        index:this.wtindex,
        val:this.val
      })
    }
  }
}
</script>

<style scoped>

</style>
