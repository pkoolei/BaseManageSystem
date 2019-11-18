<template>
  <div class="aa">
  <baidu-map class="aa"   ak="QHfyH958vAdIKPMlfY2RlfgaSBdgRWmc" :center="{lng: 113.374619, lat: 23.133995}" :zoom="15" scrollWheelZoom="true">
    <bml-heatmap :data="data" :max="100" :radius="20">
    </bml-heatmap>
  </baidu-map>
    <!--<router-view></router-view>-->
  </div>
  <!--<div> {{ msg }}</div>-->
</template>

<script>
// https://dafrok.github.io/vue-baidu-map/#/zh/start/usage
import BaiduMap from 'vue-baidu-map/components/map/Map'
import {BmlHeatmap} from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmlHeatmap
  },
  data() {
    return {
      msg: '投诉地图页面',
      data: [
        //天河公园
        {lng: 113.377925, lat: 23.135291, count: 70},
        {lng: 113.379578, lat: 23.13564, count: 70},
        {lng: 113.375769, lat:23.137269, count: 70},
        {lng:113.378248, lat: 23.137202, count: 200},
        //华师
        {lng: 113.357408, lat: 23.144563, count: 115},
        //暨大
        {lng: 113.354605, lat: 23.135391, count: 120},
        {lng:113.354138, lat: 23.13913, count: 70},
        {lng:113.356653, lat: 23.138997, count: 70},
        {lng:113.354246, lat: 23.140592, count: 70},
        {lng:113.354317, lat: 23.135275, count: 70},
        {lng:113.354021, lat: 23.137319, count: 70},
        //体育中心
        {lng: 113.329452, lat: 23.14556, count: 50},
        {lng: 113.328913, lat: 23.143034, count: 50},
        {lng: 113.331752, lat: 23.140908, count: 50},
        {lng: 113.326865, lat: 23.143167, count: 50},
        {lng:113.331357, lat: 23.143765, count: 250},
        {lng: 113.333549, lat: 23.145759, count: 50},
        {lng:113.329129, lat: 23.138066, count: 250},
        {lng: 113.326218, lat: 23.138664, count: 50},
        {lng: 113.330746, lat: 23.138399, count: 50},
        {lng: 113.331249, lat: 23.138033, count: 50},
        {lng: 113.333585, lat:23.137967, count: 110},
        //石牌桥
        {lng:113.337923, lat: 23.137983, count: 250},
        {lng:113.340439, lat: 23.138382, count: 50},
        {lng:113.342738, lat: 23.139312, count: 50},
        {lng:113.346691, lat: 23.139445, count: 50},
        {lng:113.345757, lat: 23.141041, count: 250},
        //珠江新城
        {lng: 113.326039, lat: 23.124856, count: 150},
        {lng: 113.327009, lat: 23.124756, count: 110},
        {lng: 113.326039, lat: 23.123892, count: 75},
        {lng: 113.327081, lat: 23.123294, count: 140},
        {lng: 113.325464, lat: 23.122895, count: 80},
        {lng: 113.329273, lat: 23.124457, count: 50},
        {lng: 113.328338, lat:23.124723, count: 50},
        {lng: 113.330746, lat:23.12449, count: 50},
        {lng: 113.331141, lat:23.123792, count: 50},
        //富力
        {lng: 113.341301, lat:23.13147, count: 70},
        {lng: 113.340582, lat:23.133729, count: 50},
        {lng: 113.342379, lat:23.132732, count: 50},
        {lng: 113.34396, lat:23.131004, count: 50},
        //猎德
        {lng: 113.338938, lat:23.124291, count: 250},
        {lng: 113.3378258, lat:23.125022, count: 50},
        {lng: 113.338507, lat:23.125221, count: 50},
        {lng:113.338328, lat:23.126119, count: 50},
        {lng:113.33629, lat:23.123892, count: 50},
        {lng:113.336279, lat:23.123942, count: 50},
        //潭村
        {lng:113.352799, lat:23.123094, count: 200},
        {lng:113.348056, lat:23.123227, count: 50},
        {lng:113.351649, lat:23.124756, count: 50},
        {lng:113.350859, lat:23.124224, count: 50},
        // ...此处添加更多的数据集
      ]
    }
  }
}
</script>

<style>
  .aa{
    height: 800px !important;
    width: 1200px;
  }
</style>
