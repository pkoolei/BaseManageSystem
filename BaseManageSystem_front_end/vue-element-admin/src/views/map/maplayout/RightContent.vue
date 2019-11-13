<template>
  <div class="el-container">
    <!--{{this.$route.params}}-->
    <baidu-map></baidu-map>
    <!--<router-view></router-view>-->
  </div>

</template>

<script>
import BaiduMap from './BaiduMap'
export default {
  components:{
     BaiduMap
  },
  data() {
    return { msg: '右边内容区' }
  }
}
</script>

<style>
.el-container{
  height: 900px !important;
}
</style>
