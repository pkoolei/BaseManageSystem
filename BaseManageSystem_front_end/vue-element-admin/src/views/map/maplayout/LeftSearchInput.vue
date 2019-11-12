<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="请输入基站名称" class="filter-item" @keyup.enter.native="handleFilter" />
    </div>
    <el-table :data="baseStationInfo" >
          <el-table-column >
            <template slot-scope="scope">
              <router-link :to="{name:'RightContent',params:{id:scope.row.id,baseStationName:scope.row.baseStationName,coordinate:scope.row.coordinate}}">
                <a>{{scope.row.baseStationName}}</a>
              </router-link>
              <!--<a :href="scope.row.baseStationName" target="_blank" class="buttonText">{{scope.row.baseStationName}}</a>-->
            </template>
          </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { fetchList } from '@/api/coordinate'
export default {
  data() {
    return {
      msg:'sss',
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
.app-container{
  width: 225px !important;
}
</style>
