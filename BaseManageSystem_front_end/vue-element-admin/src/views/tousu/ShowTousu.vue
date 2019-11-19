<template>
  <div >
    <!-- 表头搜索按钮区域-->
    <div class="filter-container" style="margin: 50px">
      <el-input v-model="findQuery.tsnumber" placeholder="--请输入投诉号码--" style="width: 200px;" class="filter-item"
                @keyup.enter.native="handleFilter"></el-input>
      <el-button  type="success" @click="handleFilter">搜索投诉信息</el-button>
    </div>

    <!--表格数据-->
  <div id="tousutable">
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="sendtime" label="派单时间" width="100"></el-table-column>
    <el-table-column prop="phonenumber" label="投诉号码" width="100"></el-table-column>
    <el-table-column prop="deadline" label="客服要求回复时限"></el-table-column>
    <el-table-column prop="nettype" label="网络类型"></el-table-column>
    <el-table-column prop="WOnumber" label="工单编号"></el-table-column>
    <el-table-column prop="status" label="处理状态"></el-table-column>
    <el-table-column prop="WOtheme" label="工单主题"></el-table-column>
    <el-table-column prop="tslongitude" label="精度"></el-table-column>
    <el-table-column prop="tslatitude" label="纬度"></el-table-column>
    <el-table-column prop="complaint" label="投诉内容" width="350"></el-table-column>
    <el-table-column prop="remarks" label="备注" width="380"></el-table-column>
    <el-table-column prop="responsible" label="负责人"></el-table-column>
    <el-table-column prop="responnumber" label="负责人电话"></el-table-column>
    <el-table-column prop="reason" label="原因" width="380"></el-table-column>
    <el-table-column prop="solution" label="解决方案" width="380"></el-table-column>
    <el-table-column label="操作"  fixed="right" align="center" width="170" class-name="small-padding fixed-width">
      <template slot-scope="{row}">
        <el-button  size="mini" type="success" @click="editStation(row)">编辑</el-button>
        <el-button  size="mini" type="danger" @click="delStation(row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
    <!--编辑模态框-->
    <el-dialog :visible.sync="editTable">
      <el-form :model="editForm" label-width="80px">
        <el-form-item label="责任人"><el-input v-model="editForm.responsible"  style="width:220px" placeholder="填写编号"></el-input></el-form-item>
        <el-form-item label="责任人电话"><el-input v-model="editForm.responnumber"  style="width:220px" placeholder="填写编号"></el-input></el-form-item>
        <el-form-item label="工单状态"><el-input v-model="editForm.status"  style="width:220px" placeholder="填写编号"></el-input></el-form-item>
        <el-form-item label="问题原因"><el-input v-model="editForm.reason"  style="width:500px" placeholder="填写编号"></el-input></el-form-item>
        <el-form-item label="解决方案"><el-input v-model="editForm.solution"  style="width:500px" placeholder="填写编号"></el-input></el-form-item>
        <el-form-item label="初步回复"><el-input v-model="editForm.reply"  style="width:500px" placeholder="填写编号"></el-input></el-form-item>
        <el-form-item> <el-button type="primary" @click="savaEdit()">保存修改</el-button> <el-button type="primary" @click="editTable=false">取消修改</el-button></el-form-item>
    </el-form>
    </el-dialog>

    <!--分页-->
    <pagination v-show="total>0" :total="total" :page.sync="findQuery.page" :limit.sync="findQuery.limit"  />
  </div>

</template>

<script>
  import Pagination from '@/components/Pagination'
  export default {
    data() {
      return {
        listLoading:true,//    查询数据
        findQuery:{
         tsnumber:'', //投诉号码
          limit:'20',//每页显示的数目
          page:'0',//页码数
        },
        total:'0',
//        baseData:[],//    后台获取的所有数据
        editTable:false,  //控制编辑框是否弹出
        editForm:{    //修改编辑框 修改的数据
          responsible:'',
          responnumber:'',
          reason:'',
          solution:'',
          reply:'',
          status:''
        },//编辑form中的数据
        editID:-1,    //判断该列数据时候是编辑状态  并且记录当时编辑ID数目
        tableData:
          [
            {
              "sendtime": "2019-11-11 10:52:30",
              "phonenumber": "13023092706",
              "deadline":"2019-11-11 16:48:29",
              "nettype":"LTE",
              "WOnumber":"XT20191437519",
              "status": "待处理",
              "WOtheme":"广东广州天河区车碑街道车碑大塘街40-1号",
              "tslongitude":'113.393547',
              "tslatitude":'23.122133',
              "complaint":"无法上网，无法拨打电话，拨打10010反映后一直没有处理，不满，现用户恢复信号正常使用。",
              "remarks":"已通知室分运维跟进处理用户反映经查投诉点（23.124791，113.387738）室分*(广州-H-天河车陂村北D-262379-SMF)信号问题，属于*（维护）问题，跟进部门为*（网建），请广州网络建设部跟进处理。回单：莫发有 13580068450",
              "responsible":"项崴",
              "responnumber":"18620011655",
              "reason": "室分*（车陂村北），该站点已移交，请转运维跟进，谢谢。（网发室分工单处理组-练欣欣 02022995721",
              "solution": "室分*（车陂村北），该站点已移交，请转运维跟进，谢谢。（网发室分工单处理组-练欣欣 02022995721"
            },
            {
              "sendtime": "2019-11-11 10:32:50",
              "phonenumber": "17620153542",
              "deadline":"2019-11-11 21:00:00",
              "nettype":"LTE",
              "WOnumber":"XT20191437508",
              "status": "待处理",
              "WOtheme":"广州市番禺区华龙镇金山大道金雁佳园",
              "tslongitude":'113.316547',
              "tslatitude":'23.122733',
              "complaint":"客户来电反映信号不好，经核查上网功能正常非限速非流量封项，已按网优口径解释，客户不接受，经核查属服务补救范畴，在线承诺为感谢客户支持联通赠送元话费，话费三个工作日到帐，到帐后短信通知，客户接受，已生成服务补救工单请协助录入赠款，谢谢！ 客户不接受，要求处理（用户提及投诉工信部），已在线承诺客户24小时专人回复，请跟进，谢谢！",
              "remarks":"前期我部已到投诉点附近测试（23.037267 113.477350），经测试，投诉点室内2/3/4G脱网，室外2/3/4G信号正常，投诉点处于新建楼盘里面，无室分覆盖，地下停车场较深入和封闭，室外信号难以覆盖，鉴于投诉点使用人数较多，我部已提交室分（广州市番禺区化龙镇金山大道东633号的金雁佳园小区）需求，请网建部门评估是否规划建设改善信号。  回单：李海华  15602206089",
              "responsible":"项崴",
              "responnumber":"18620011655",
              "reason": "用户反映位置因公司投资资源受限，今年暂不安排建设，谢谢。（网发室分工单处理组-练欣欣 02022995721）",
              "solution": "用户反映位置因公司投资资源受限，今年暂不安排建设，谢谢。（网发室分工单处理组-练欣欣 02022995721）"
            },
            {
              "sendtime": "2019-11-11 09:45:48",
              "phonenumber": "13268323692",
              "deadline":"2019-11-11 21:00:00",
              "nettype":"LTE",
              "WOnumber":"XT20191437494",
              "status": "待处理",
              "WOtheme":"广州市番禺区沙湾镇北村西安里永兴巷4号",
              "tslongitude":'113.333547',
              "tslatitude":'23.902133',
              "complaint":"位于旅游古镇，附近很多外地人把联通线路剪断卖给别人了，导致信号问题，已经几个月了，要求处理。",
              "remarks":"经查投诉点(经纬度：22.904490 113.328200)附近2G，3G、4G信号弱，投诉点附近宏站（广州-H-沙湾中华大道-395513-OF），因铁塔站点，物业合同到期，已明确不续约，已拆站，导致投诉点一带信号变弱，需网建重新规划建设，但因工程建设问题，无法确认解决时间，具体情况须咨询网建部门， 请转网建部基站处理组跟进。经我司钟豫粤经理同意，该地区信号问题，短期内无法解决，请客服部直接向用户解释。（根据当地无线环境判断），网络跟踪现状：未规划，责任部门：网络建设部，预计优化解决时间：暂无法确定具体解决时间。回单：李海华 15602206089",
              "responsible":"刘映",
              "responnumber":"15622111619",
              "reason": "网优：经查投诉点(经纬度：22.904490 113.328200)附近2G，3G、4G信号弱，投诉点附近宏站（广州-H-沙湾中华大道-395513-OF），因铁塔站点，物业合同到期，已明确不续约，已拆站，导致投诉点一带信号变弱，需网建重新规划建设，但因工程建设问题，无法确认解决时间，具体情况须咨询网建部门， 请转网建部基站处理组跟进。经我司钟豫粤经理同意，该地区信号问题，短期内无法解决，请客服部直接向用户解释。（根据当地无线环境判断），网络跟踪现状：未规划，责任部门：网络建设部，预计优化解决时间：暂无法确定具体解决时间。回单：李海华 15602206089",
              "solution": "网建：无规划站点，由于公司投资受限，今年暂不安排建设。根据集团召开的投资建设项目专项清理会议精神：各省市公司要加强对投资计划管理，严禁省市公司以各种借口发生计划外投资，对仍不按新的投资管理要求执行，擅自发生计划外投资的地方公司要从严处罚。所有计划外的投资项目建设必须经过公司领导层决策会通过，才可以执行，如需继续规划外站点的建站，请需求部门走流程，谢谢。（网建基站工单处理人：刘南源。电话：18589299750）"
            }
          ]
      }
    },
    components:{
      Pagination//分页器
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



<style scoped>
#tousutable{
  margin: 50px;
}
</style>

