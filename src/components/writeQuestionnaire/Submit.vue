<template>
  <div :class="$style.btn">
<mt-button type="primary" size="large" :class="$style.btn" v-touch:tap="submit">提交问卷</mt-button>
  </div>
</template>

<script>
  export default {
    methods:{
      submit(){
        console.log(123)
      }
    }
  }
</script>

<style lang="stylus" module>
.btn
 width 92%
 margin 20px auto 40px auto
</style>
