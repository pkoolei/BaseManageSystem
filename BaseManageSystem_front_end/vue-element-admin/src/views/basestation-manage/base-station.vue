<template>   
    <div>
      <!-- 表头搜索按钮区域-->
      <div class="filter-container">
      <el-input v-model="findQuery.PhyName" placeholder="--请输入物理站名--" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"></el-input>
      </div>

      <!--表格数据-->
      <el-table v-loading="listLoading" :data="pageData" :key="idx">
        <el-table-column sortable width="100" prop="id" label="编号"></el-table-column>
        <el-table-column prop="name" label="物理站名"></el-table-column>
        <el-table-column prop="place" label="站点地址"></el-table-column>
        <el-table-column prop="rate" label="传输速率"></el-table-column>
        <el-table-column prop="time" label="创建时间"></el-table-column>
        <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button  size="mini" type="success" @click="editStation(row)">编辑</el-button>
            <el-button  size="mini" type="danger" @click="delStation(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--编辑模态框-->
      <el-dialog :visible.sync="editTable">
          <el-form :model="editForm" label-width="80px">
              <el-form-item label="编号"><el-input v-model="editForm.id" disabled style="width:220px" placeholder="填写编号"></el-input></el-form-item>
            <el-form-item label="日期"><el-date-picker v-model="editForm.time" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker></el-form-item>
            <el-form-item label="物理站名"> <el-input v-model="editForm.name" style="width: 300px" placeholder="请输入物理站名"></el-input></el-form-item>
            <el-form-item label="流量"><el-input v-model="editForm.rate" style="width: 220px" placeholder="请输入站点流量" ></el-input></el-form-item>
            <el-form-item label="地址"><el-input v-model="editForm.place" style="width:400px" placeholder="请输入站点地址"></el-input></el-form-item>
            <el-form-item> <el-button type="primary" @click="savaEdit()">保存修改</el-button> <el-button type="primary" @click="editTable=false">取消修改</el-button></el-form-item>
          </el-form>
      </el-dialog>

      <!--分页-->
      <pagination v-show="total>0" :total="total" :page.sync="findQuery.page" :limit.sync="findQuery.limit"  />
    </div>
</template>

<script>
  import { getList,deleteStation} from '@/api/base-station'
  import Pagination from '@/components/Pagination'
    export default {
        data() {
          return{
            listLoading:true,//    查询数据
            findQuery:{
              PhyName:'', //站点物理名
              limit:'20',//每页显示的数目
              page:'0',//页码数
            },
            total:'0',
            baseData:[],//    后台获取的所有数据
      //      pageData:[],//分页数据
            editTable:false,  //控制编辑框是否弹出
             editForm:{    //修改编辑框 修改的数据
               id:0,
               name:'',
               place:'',
               time:'',
               rate:0.00,
             },//编辑form中的数据
             editID:-1    //判断该列数据时候是编辑状态  并且记录当时编辑ID数目
          }
          },
      components:{
        Pagination
      },

      methods:{
          //删除按钮方法
        /**
         *目前用前端删除 后台删除已经注释了，后期再做修改
         **/
          delStation(row){
            this.$confirm('是否删除？','提示',{
              confirmButtonText:'确定',
              cancelButtonText:'取消',
              type:'warning'
            }).then(()=>{
//          deleteStation({id:row.id}).then(res=>{
//           this.$message({
//           message:'删除成功！',
//           type:'success'
//         })
         let idx=this.baseData.findIndex(item=>item.id==row.id
         );
       //  console.log('idx'+idx)
         this.baseData.splice(idx,1);
         this.pageData();
//         }
//         )
            }).catch(()=>{
              this.$message({
                message:'删除成功！',
                type:'success'
//                type:'info',
//                message:'取消删除'
              });
            })
          },
        /**
         * 前端编辑按钮响应,启动编辑模态对话框
         ***/
        editStation(row){
          this.editTable=!this.editTable;
          console.log("编辑");
          this.baseData.forEach(news=>{
            if(news.id==row.id){
              this.editID=row.id;
            }
            this.editForm=row;
           // console.log(this.editFrom);
          })
          console.log(row);
          console.log(this.editForm);



        },
        /**
         * 模态对话框中保存按钮确认
         * */
        savaEdit(){
          this.editTable=!this.editTable;
          let index=-1;
          this.baseData.forEach((item,idx)=>{
            if(item.id==this.editID){
              index=idx;
            }
          })
          this.baseData.splice(index,1,this.editForm);
          this.editID=-1;
        }
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
