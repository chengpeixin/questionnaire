<template>
  <div>
    <Hheader :cname="title"></Hheader>
  </div>
</template>

<script>
import Hheader from '@/components/core/Hheader'
export default {
  data() {
    return {
      title: "查看问卷"
    }
  },
  components:{
    Hheader
  }
}
</script>

<style scoped>

</style>
