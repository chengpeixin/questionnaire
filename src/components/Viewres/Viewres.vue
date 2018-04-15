<template>
  <div>
    <Hheader :cname="title"></Hheader>
    <canvas id="myChart" width="400" height="400"></canvas>
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
  },
  methods:{
    drawLine(){
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ];
      const chart = new this.$f2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio // 指定分辨率
      });
      chart.source(data);
      chart.interval().position('genre*sold').color('genre');
      chart.render();
    }
  },
  mounted(){
    this.drawLine()
  }
}
</script>

<style scoped>

</style>
