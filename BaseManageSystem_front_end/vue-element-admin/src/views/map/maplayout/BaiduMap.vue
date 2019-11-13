<template>
  <div class="el-container">
    <baidu-map class="el-container" ak="QHfyH958vAdIKPMlfY2RlfgaSBdgRWmc" :center="center" :zoom="zoom" @ready="handler">
        <bm-marker :position="center" >
        </bm-marker>
    </baidu-map>
    <router-view></router-view>
  </div>

</template>

<script>
  // https://dafrok.github.io/vue-baidu-map/#/zh/start/usage
  import BaiduMap from 'vue-baidu-map/components/map/Map'
  import BmMarker from 'vue-baidu-map/components/overlays/Marker'
    export default {
      components: {
        BaiduMap,
        BmMarker
      },
      data(){
        return {
          msg: 'vue模板页',
          center:{
            lng:113.329,
            lat:23.11
          },
          zoom:15
        }
      },
      // mounted(){
      //    this.lng=this.$route.params.coordinate[0],
      //    this.lat=this.$route.params.coordinate[1],
      //    this.zoom = 15
      // },
      methods: {
        handler ({BMap, map}) {
          this.center.lng = this.$route.params.coordinate.lng,
          this.center.lat = this.$route.params.coordinate.lat,
          this.zoom = 15,
          console.log("经纬度",this.center.lng)
        }
      }
    }
</script>

<style>
  .bm-view {
    width: 1600px;
    height: 900px;
  }
</style>
