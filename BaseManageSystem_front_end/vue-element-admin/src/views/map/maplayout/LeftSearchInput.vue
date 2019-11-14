<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.baseStationName" placeholder="请输入基站名称" class="filter-item" @keyup.enter.native="handleFilter" />
    </div>
    <el-table :data="pageData" >
          <el-table-column >
            <template slot-scope="scope">
              <router-link :to="{name:'RightContent',params:{id:scope.row.id,baseStationName:scope.row.baseStationName,coordinate:scope.row.coordinate,directionAngle:scope.row.directionAngle}}">
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
        id:0,
        baseStationName: ''
      },
      baseStationInfo: [],
      pageData:[]
    }
  },
  mounted() {
    // 初始获取所有基站数据列表
    fetchList(this.listQuery).then(res => {
      console.log(res.data)
      this.baseStationInfo = res.data.baseStationList
      this.getList();
    })
  },
  methods:{

    getList(){
      let  {id,baseStationName}  = this.listQuery;
      let filterData = [];
      filterData=this.baseStationInfo.filter(res=>{
        //针对基站名称进行过滤
      if(baseStationName && res.baseStationName.indexOf(baseStationName)==-1)
              return false;
      return true;
      })

      console.log("过滤数据",filterData)
      this.pageData = filterData;
      // //设置数据总数为过滤后的总数据量
      let total=filterData.length;
      console.log("----------------",total)

    },
    handleFilter() {
      this.getList();
    }
  }
}
</script>

<style scoped>
.app-container{
  width: 225px !important;
}
</style>
