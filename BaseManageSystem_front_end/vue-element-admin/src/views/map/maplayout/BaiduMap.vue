<template>
  <div class="el-container">
    <baidu-map class="el-container" ak="QHfyH958vAdIKPMlfY2RlfgaSBdgRWmc" :center="center" :zoom="zoom" @ready="handler">
        <bm-marker  v-for="(item,idx) in points" :position="item" :icon="{url: 'station.png',size: {width: 300, height: 157}}">
       </bm-marker>
      <!--<bm-marker  :position="{lng:113.329,lat:23.121}" >-->
      <!--</bm-marker>-->
      <!--<bm-marker v-for="(item,idx) in this.points" :key="idx" :position="point" >-->
      <!--</bm-marker>-->
      <!--<bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_RHOMBUS" color="blue" size="BMAP_POINT_SIZE_BIG" ></bm-point-collection>-->
      <bm-polygon :path="polygonPath1" stroke-color="purple" fill-color="purple" :stroke-opacity="1" :stroke-weight="0.8" :editing="false" @lineupdate="updatePolygonPath" @click="infoClick1"/>
      <bm-polygon :path="polygonPath2" stroke-color="purple" fill-color="purple" :stroke-opacity="0.8" :stroke-weight="1" :editing="false" @lineupdate="updatePolygonPath" @click="infoClick2"/>
      <bm-polygon :path="polygonPath3" stroke-color="purple" fill-color="purple" :stroke-opacity="0.8" :stroke-weight="1" :editing="false" @lineupdate="updatePolygonPath" @click="infoClick3"/>
      <!--<bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_RHOMBUS" color="blue" size="BMAP_POINT_SIZE_BIG" @click="clickHandler"></bm-point-collection>-->
      <bm-info-window class="container" :position="infoWindowCenter" title="站点信息"  :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
        <!--<p v-text="infoWindow.contents"></p>-->
        <p>基站名：{{infoWindow.contents.baseStationName}}</p>
        <p>方向角：{{infoWindow.contents.areaDirectionAngle}}</p>
      </bm-info-window>
    </baidu-map>
    <router-view></router-view>
  </div>

</template>

<script>
  // https://dafrok.github.io/vue-baidu-map/#/zh/start/usage
  import { fetchList } from '@/api/coordinate'
  import BaiduMap from 'vue-baidu-map/components/map/Map'
  import BmMarker from 'vue-baidu-map/components/overlays/Marker'
  import BmCircle from 'vue-baidu-map/components/overlays/Circle'
  import BmPolygon from 'vue-baidu-map/components/overlays/Polygon'
  import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'
  import BmPointCollection from 'vue-baidu-map/components/overlays/PointCollection'
    export default {
      components: {
        BaiduMap,
        BmPolygon,
        BmMarker,
        BmCircle,
        BmPointCollection,
        BmInfoWindow
      },
      data(){
        return {
          msg: 'vue模板页',
          listQuery: {
            id:0,
            baseStationName: '',
            // coordinate:
          },
          baseStationInfo: [],
          points: [],
          point:{
            lng:0,
            lat:0
          },
          center:{
            lng:113.329,
            lat:23.11
          },
          infoCenter:[],
          infoWindowCenter:{
            lng:0,
            lat:0
          },
          zoom:15,
          polygonPath1: [],
          polygonPath2: [],
          polygonPath3: [],
          directionAngle:[],
          message:"11111",
          infoWindow: {
            show: false,
            contents:{
              baseStationName:"",
              areaDirectionAngle:0
            }
          }
        }
      },
      mounted(){
        // 初始获取所有基站数据列表
        fetchList(this.listQuery).then(res => {
          this.baseStationInfo = res.data.baseStationList
          let point = this.point
          point = this.baseStationInfo.coordinate
            for(let i=0; i <this.baseStationInfo.length;i++){
              point = this.baseStationInfo[i].coordinate
               this.points.push(point)
              // this.polygonPath1.push(point)
              // this.polygonPath2.push(point)
              // this.polygonPath3.push(point)
            }
            console.log("接收坐标",this.points)
          })
          this.zoom = 15
      },
      methods: {
        handler ({BMap, map}){
          this.center.lng = this.$route.params.coordinate.lng,
          this.center.lat = this.$route.params.coordinate.lat,
          // this.center.lng = this.$route.params.lng,
          // this.center.lat = this.$route.params.lat,
          this.directionAngle = this.$route.params.directionAngle,
            // console.log("方位角数据",this.$route.params.directionAngle)
          this.infoWindow.contents.baseStationName = this.$route.params.baseStationName,
          // this.infoWindow.contents.areaDirectionAngle = this.$route.params.directionAngle
          this.zoom = 15
          let areaNums = this.directionAngle.length;
          let x0 = this.$route.params.coordinate.lng;
          let y0 =  this.$route.params.coordinate.lat;
          let r = 0.003;

          if(areaNums == 1){
            let angel_1 = (this.directionAngle[0]/180)*Math.PI;
            let x1,x2,y1,y2;

            let x1_offset = r*Math.sin(angel_1-Math.PI/6);
            let y1_offset = r*Math.cos(angel_1-Math.PI/6);
            let x2_offset = r*Math.sin(angel_1+Math.PI/6);
            let y2_offset = r*Math.cos(angel_1+Math.PI/6);

            x1=x0+x1_offset;
            y1=y0+y1_offset;
            x2=x0+x2_offset;
            y2=y0+y2_offset;

            this.polygonPath1=[{lng: x0, lat: y0},{lng: x1, lat: y1},{lng: x2, lat: y2}]
            this.infoCenter=[{lng: x1, lat: y1}]
          }
          if(areaNums == 2){
            let x1,x2,x3,x4,y1,y2,y3,y4;
            let angel_1 = (this.directionAngle[0]/180)*Math.PI;
            let angel_2 = (this.directionAngle[1]/180)*Math.PI;

            let x1_offset = r*Math.sin(angel_1-Math.PI/6);
            let y1_offset = r*Math.cos(angel_1-Math.PI/6);
            let x2_offset = r*Math.sin(angel_1+Math.PI/6);
            let y2_offset = r*Math.cos(angel_1+Math.PI/6);
            let x3_offset = r*Math.sin(angel_2-Math.PI/6);
            let y3_offset = r*Math.cos(angel_2-Math.PI/6);
            let x4_offset = r*Math.sin(angel_2+Math.PI/6);
            let y4_offset = r*Math.cos(angel_2+Math.PI/6);

            x1=x0+x1_offset;
            y1=y0+y1_offset;
            x2=x0+x2_offset;
            y2=y0+y2_offset;
            x3=x0+x3_offset;
            y3=y0+y3_offset;
            x4=x0+x4_offset;
            y4=y0+y4_offset;

            this.polygonPath1=[{lng: x0, lat: y0},{lng: x1, lat: y1},{lng: x2, lat: y2}]
            this.polygonPath2=[{lng: x0, lat: y0},{lng: x3, lat: y3},{lng: x4, lat: y4}]
            this.infoCenter=[{lng: x1, lat: y1},{lng: x3, lat: y3}]

          }
          if(areaNums == 3){
            let x1,x2,x3,x4,x5,x6,y1,y2,y3,y4,y5,y6;
            let angel_1 = (this.directionAngle[0]/180)*Math.PI;
            let angel_2 = (this.directionAngle[1]/180)*Math.PI;
            let angel_3 = (this.directionAngle[2]/180)*Math.PI;

            let x1_offset = r*Math.sin(angel_1-Math.PI/6);
            let y1_offset = r*Math.cos(angel_1-Math.PI/6);
            let x2_offset = r*Math.sin(angel_1+Math.PI/6);
            let y2_offset = r*Math.cos(angel_1+Math.PI/6);
            let x3_offset = r*Math.sin(angel_2-Math.PI/6);
            let y3_offset = r*Math.cos(angel_2-Math.PI/6);
            let x4_offset = r*Math.sin(angel_2+Math.PI/6);
            let y4_offset = r*Math.cos(angel_2+Math.PI/6);
            let x5_offset = r*Math.sin(angel_3-Math.PI/6);
            let y5_offset = r*Math.cos(angel_3-Math.PI/6);
            let x6_offset = r*Math.sin(angel_3+Math.PI/6);
            let y6_offset = r*Math.cos(angel_3+Math.PI/6);

            x1=x0+x1_offset;
            y1=y0+y1_offset;
            x2=x0+x2_offset;
            y2=y0+y2_offset;
            x3=x0+x3_offset;
            y3=y0+y3_offset;
            x4=x0+x4_offset;
            y4=y0+y4_offset;
            x5=x0+x5_offset;
            y5=y0+y5_offset;
            x6=x0+x6_offset;
            y6=y0+y6_offset;

            this.polygonPath1=[{lng: x0, lat: y0},{lng: x1, lat: y1},{lng: x2, lat: y2}];
            this.polygonPath2=[{lng: x0, lat: y0},{lng: x3, lat: y3},{lng: x4, lat: y4}];
            this.polygonPath3=[{lng: x0, lat: y0},{lng: x5, lat: y5},{lng: x6, lat: y6}];
            this.infoCenter=[{lng: x1, lat: y1},{lng: x3, lat: y3},{lng: x5, lat: y5}]
          }
        },
        infoClick1(){
          this.infoWindow.show = !this.infoWindow.show
          this.infoWindow.contents.baseStationName=this.infoWindow.contents.baseStationName
          this.infoWindow.contents.areaDirectionAngle=this.directionAngle[0]
          this.infoWindowCenter=this.infoCenter[0]
        },
        infoClick2(){
          this.infoWindow.show = !this.infoWindow.show
          this.infoWindow.contents.baseStationName=this.infoWindow.contents.baseStationName
          this.infoWindow.contents.areaDirectionAngle=this.directionAngle[1]
          this.infoWindowCenter=this.infoCenter[1]
        },
        infoClick3(){
          this.infoWindow.show = !this.infoWindow.show
          this.infoWindow.contents.baseStationName=this.infoWindow.contents.baseStationName
          this.infoWindow.contents.areaDirectionAngle=this.directionAngle[2]
          this.infoWindowCenter=this.infoCenter[2]
        },
        updateCirclePath (e) {
          this.circlePath.center = e.target.getCenter()
          this.circlePath.radius = e.target.getRadius()
        },
        updatePolygonPath (e) {
          this.polygonPath1 = e.target.getPath(),
          this.polygonPath2 = e.target.getPath(),
          this.polygonPath3 = e.target.getPath()
        },
        // addPolygonPoint () {
        //   this.polygonPath.push({lng: 0, lat: 0})
        // },
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
