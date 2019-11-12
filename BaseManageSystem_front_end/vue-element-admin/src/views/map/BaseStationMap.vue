<template>
  <el-container direction="vertical" >
    <!--<layout-header></layout-header>-->
    <el-container>
      <left-search-input />
      <right-content />
    </el-container>
  </el-container>

</template>

<script>
import LeftSearchInput from './maplayout/LeftSearchInput'
import RightContent from './maplayout/RightContent'

export default {
  components: {
    LeftSearchInput,
    RightContent
  },
  data() {
    return {
      msg: '基站分布页面'
    }
  }

}
</script>

<style>

</style>
