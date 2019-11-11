<template>
  <baidu-map class="bm-view" ak="QHfyH958vAdIKPMlfY2RlfgaSBdgRWmc" center="北京" />
</template>

<script>
// https://dafrok.github.io/vue-baidu-map/#/zh/start/usage
import BaiduMap from 'vue-baidu-map/components/map/Map'
export default {
  components: {
    BaiduMap
  },
  data() {
    return { msg: '右边内容区' }
  }
}
</script>

<style>
.bm-view {
    width: 100% !important;
    height: 800px;
  }
</style>
