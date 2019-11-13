<template>
  <div class="el-container">
    <baidu-map class="el-container" ak="QHfyH958vAdIKPMlfY2RlfgaSBdgRWmc" :center="circlePath.center" :zoom="zoom" @ready="handler">
        <!--<bm-marker :position="center" >-->
        <!--</bm-marker>-->
      <bm-circle :center="circlePath.center" :radius="circlePath.radius" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" :editing="true" @click="infoClick"></bm-circle>
      <bm-info-window  :position="circlePath.center" title="站点信息" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
        <p v-text="infoWindow.contents"></p>
      </bm-info-window>
    </baidu-map>
    <router-view></router-view>
  </div>

</template>

<script>
  // https://dafrok.github.io/vue-baidu-map/#/zh/start/usage
  import BaiduMap from 'vue-baidu-map/components/map/Map'
  import BmMarker from 'vue-baidu-map/components/overlays/Marker'
  import BmCircle from 'vue-baidu-map/components/overlays/Circle'
  import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'
    export default {
      components: {
        BaiduMap,
        BmMarker,
        BmCircle,
        BmInfoWindow
      },
      data(){
        return {
          msg: 'vue模板页',
          // center:{
          //   lng:113.329,
          //   lat:23.11
          // },
          zoom:15,
          circlePath: {
            center: {
              lng: 113.329,
              lat: 23.11
            },
            radius: 500
          },
          infoWindow: {
            show: false,
            contents:""
          }
        }
      },
      // mounted(){
      //    this.lng=this.$route.params.coordinate[0],
      //    this.lat=this.$route.params.coordinate[1],
      //    this.zoom = 15
      // },
      methods: {
        handler ({BMap, map}) {
          this.circlePath.center.lng = this.$route.params.coordinate.lng,
          this.circlePath.center.lat = this.$route.params.coordinate.lat,
          this.zoom = 15
        },
        infoClick(){
          this.infoWindow.show = !this.infoWindow.show,

          this.infoWindow.contents="地址："+this.$route.params.baseStationName
          //   this.infoWindow.contents="方向角："
        },
        updateCirclePath (e) {
          this.circlePath.center = e.target.getCenter()
          this.circlePath.radius = e.target.getRadius()
        },
        infoWindowClose (e) {
          this.infoWindow.show = false
        },
        infoWindowOpen (e) {
          this.infoWindow.show = true
        },

      }
    }
</script>

<style>
  .bm-view {
    width: 1600px;
    height: 900px;
  }
</style>
