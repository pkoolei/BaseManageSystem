<template>
  <div class="chart-container">
    <div ref="chart" style="height: 100%;width: 100%"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import resize from '@/components/Charts/mixins/resize'

  export default {
    data() {
      return {
        chart:null,
        option:{
          legend: {},
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: [
              ['product', '花都', '天河', '白云', '越秀', '增城', '黄埔','南沙','从化'],
              ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,24.5,42.5],
              ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1,87.6,26.9],
              ['Primary', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5,59.7,45.6],
              ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1,75.2,63.1]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              label: {
                formatter: '{b}: {@花都} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '花都',
                tooltip: '花都'
              }
            }
          ]
        }
      };
    },
    methods: {


    },
    mounted(){
      this.chart=echarts.init(this.$refs.chart);

      this.chart.on('updateAxisPointer', (event)=> {
        console.log('event:');

        var xAxisInfo = event.axesInfo[0];

        console.log(xAxisInfo);
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          this.chart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
        },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });

      this.chart.setOption(this.option);
    }
  };
</script>

<style scoped>
  .chart-container{
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
  }
</style>
