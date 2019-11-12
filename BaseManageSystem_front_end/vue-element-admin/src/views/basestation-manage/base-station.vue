<template>   
    <div class="app-container">
      <!-- 表头搜索按钮区域-->
      <div class="filter-container">
      <el-input v-model="findQuery.PhyName" placeholder="--请输入物理站名--" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"></el-input>
      </div>

      <!--表格数据-->
      <el-table v-loading="listLoading" :data="pageData">
        <el-table-column sortable width="100" prop="id" label="编号"></el-table-column>
        <el-table-column prop="name" label="物理站名"></el-table-column>
        <el-table-column prop="place" label="站点地址"></el-table-column>
        <el-table-column prop="rate" label="传输速率"></el-table-column>
        <el-table-column prop="time" label="创建时间"></el-table-column>
        <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button  size="mini" type="danger" >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <pagination v-show="total>0" :total="total" :page.sync="findQuery.page" :limit.sync="findQuery.limit"  />
    </div>
</template>
<script>


  import { getList } from '@/api/base-station'
  import Pagination from '@/components/Pagination'

    export default {
        data() {
          return{
            listLoading:true,
            //    查询数据
            findQuery:{
              PhyName:'', //站点物理名
              limit:'20',//每页显示的数目
              page:'0',//页码数
            },
            total:'0',//
          //    后台获取的所有数据
            baseData:[],
      //      pageData:[],//分页数据
          }
          },
      components:{
        Pagination
      },

      mounted(){
          this.listLoading=true;
          //调用api中的getList得到所有数据
            getList(this.findQuery).then(res=>{
              console.log(res.data.item);
              this.baseData=res.data.item;
            })
        this.listLoading=false;
      },
      computed:{
      pageData(){

          let {limit,PhyName,page}=this.findQuery;
          //数据过滤
          let filterData=[];
          //对物理站名过滤
          filterData=this.baseData.filter(item=>{
            if(PhyName && item.name.indexOf(PhyName)==-1) return false;
            return true;
          })
          console.log("数目");
          console.log(filterData.length);
          this.total=filterData.length;

          //对检索过后的数据进行分页处理
           let pageData=filterData.filter((item,idx)=>{
            return idx>=limit*(page-1)&& idx<limit*page;
          })
        return pageData;
       }
        }
    }
</script>
<style>

</style>
