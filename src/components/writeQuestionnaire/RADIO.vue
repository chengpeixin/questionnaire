<template>
  <div :class="$style.radiofull">
    <mt-radio :options="radios"></mt-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radios: [],
      radioVal:{}
    }
  },
  props:{
    info:{
      type:Object,
      required:true
    }
  },
  created(){
    for ( let i=0; i<this.info.items.length; i++){
      const el = this.info.items[i]
      this.radios.push({
        label: `${el.wtiCode}．${el.wtiTextFront}`,
        value: `${el.id}`,
      })
    }
  }
}
</script>

<style lang="stylus" module>
.radiofull{
 width: 60%;
 .mint-radiolist{
   .mint-cell{
    .mint-cell-wrapper{
      background-image: none;
    }
   }
 }
}
.mint-cell-wrapper{
      background-image: none;
}
</style>
