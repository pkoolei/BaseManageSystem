<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="请输入基站名称" class="filter-item" @keyup.enter.native="handleFilter" />
    </div>
    <el-table :data="baseStationInfo">
      <el-table-column prop="baseStationName" @click="" />
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/coordinate'
export default {
  data() {
    return {
      listQuery: {
        baseStationName: ''
      },
      baseStationInfo: []
    }
  },
  mounted() {
    // 初始获取所有基站数据列表
    fetchList(this.listQuery).then(res => {
      console.log(res.data)
      this.baseStationInfo = res.data.baseStationList
    })
  }
}
</script>

<style>

</style>
