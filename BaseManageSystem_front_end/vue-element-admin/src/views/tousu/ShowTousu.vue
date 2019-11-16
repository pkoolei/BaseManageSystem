<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="sendtime"
      label="派单时间"
      width="100">
    </el-table-column>
    <el-table-column
      prop="phonenumber"
      label="投诉号码"
      width="100">
    </el-table-column>
    <el-table-column
      prop="deadline"
      label="客服要求回复时限">
    </el-table-column>
    <el-table-column
      prop="nettype"
      label="网络类型">
    </el-table-column>
    <el-table-column
      prop="WOnumber"
      label="工单编号">
    </el-table-column>
    <el-table-column
      prop="status"
      label="处理状态">
    </el-table-column>
    <el-table-column
      prop="WOtheme"
      label="工单主题">
    </el-table-column>
    <el-table-column
      prop="complaint"
      label="投诉内容"
      width="350">
    </el-table-column>
    <el-table-column
      prop="remarks"
      label="备注"
      width="380">
    </el-table-column>
    <el-table-column
      prop="responsible"
      label="负责人">
    </el-table-column>
    <el-table-column
      prop="responnumber"
      label="负责人电话">
    </el-table-column>
    <el-table-column
      prop="reason"
      label="原因"
      width="380">
    </el-table-column>
    <el-table-column
      prop="solution"
      label="解决方案"
      width="380">
    </el-table-column>
    <el-table-column label="操作"  fixed="right" align="center" width="170" class-name="small-padding fixed-width">
      <template slot-scope="{row}">
        <el-button  size="mini" type="success" @click="editStation(row)">编辑</el-button>
        <el-button  size="mini" type="danger" @click="delStation(row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!--&lt;!&ndash;编辑模态框&ndash;&gt;-->
  <!--<el-dialog :visible.sync="editTable">-->
    <!--<el-table-->
      <!--:data="tableData"-->
      <!--style="width: 100%">-->
      <!--<el-table-column-->
        <!--prop="sendtime"-->
        <!--label="派单时间"-->
        <!--width="100">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="phonenumber"-->
        <!--label="投诉号码"-->
        <!--width="100">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="deadline"-->
        <!--label="客服要求回复时限">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="nettype"-->
        <!--label="网络类型">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="WOnumber"-->
        <!--label="工单编号">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="status"-->
        <!--label="处理状态">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="WOtheme"-->
        <!--label="工单主题">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="complaint"-->
        <!--label="投诉内容"-->
        <!--width="350">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="remarks"-->
        <!--label="备注"-->
        <!--width="380">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="responsible"-->
        <!--label="负责人">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="responnumber"-->
        <!--label="负责人电话">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="reason"-->
        <!--label="原因"-->
        <!--width="380">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="solution"-->
        <!--label="解决方案"-->
        <!--width="380">-->
      <!--</el-table-column>-->
  <!--</el-dialog>-->
  <!--</el-table>-->
</template>

<script>
  export default {
    data() {
      return {
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
              "complaint":"位于旅游古镇，附近很多外地人把联通线路剪断卖给别人了，导致信号问题，已经几个月了，要求处理。",
              "remarks":"经查投诉点(经纬度：22.904490 113.328200)附近2G，3G、4G信号弱，投诉点附近宏站（广州-H-沙湾中华大道-395513-OF），因铁塔站点，物业合同到期，已明确不续约，已拆站，导致投诉点一带信号变弱，需网建重新规划建设，但因工程建设问题，无法确认解决时间，具体情况须咨询网建部门， 请转网建部基站处理组跟进。经我司钟豫粤经理同意，该地区信号问题，短期内无法解决，请客服部直接向用户解释。（根据当地无线环境判断），网络跟踪现状：未规划，责任部门：网络建设部，预计优化解决时间：暂无法确定具体解决时间。回单：李海华 15602206089",
              "responsible":"刘映",
              "responnumber":"15622111619",
              "reason": "网优：经查投诉点(经纬度：22.904490 113.328200)附近2G，3G、4G信号弱，投诉点附近宏站（广州-H-沙湾中华大道-395513-OF），因铁塔站点，物业合同到期，已明确不续约，已拆站，导致投诉点一带信号变弱，需网建重新规划建设，但因工程建设问题，无法确认解决时间，具体情况须咨询网建部门， 请转网建部基站处理组跟进。经我司钟豫粤经理同意，该地区信号问题，短期内无法解决，请客服部直接向用户解释。（根据当地无线环境判断），网络跟踪现状：未规划，责任部门：网络建设部，预计优化解决时间：暂无法确定具体解决时间。回单：李海华 15602206089",
              "solution": "网建：无规划站点，由于公司投资受限，今年暂不安排建设。根据集团召开的投资建设项目专项清理会议精神：各省市公司要加强对投资计划管理，严禁省市公司以各种借口发生计划外投资，对仍不按新的投资管理要求执行，擅自发生计划外投资的地方公司要从严处罚。所有计划外的投资项目建设必须经过公司领导层决策会通过，才可以执行，如需继续规划外站点的建站，请需求部门走流程，谢谢。（网建基站工单处理人：刘南源。电话：18589299750）"
            }
          ]
      }
    }
  }
</script>



<style scoped>

</style>



<!--<!DOCTYPE html>-->
<!--<html lang="en">-->
<!--<head>-->
  <!--<meta charset="UTF-8" />-->
  <!--<meta name="viewport" content="width=device-width, initial-scale=1.0" />-->
  <!--<meta http-equiv="X-UA-Compatible" content="ie=edge" />-->
  <!--<link-->
    <!--rel="stylesheet"-->
    <!--href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"-->
  <!--/>-->

  <!--<script lang="javascript" src="dist/xlsx.full.min.js"></script>-->
  <!--<script src="https://cdn.bootcss.com/vue/2.4.2/vue.min.js"></script>-->
  <!--<script src="https://unpkg.com/element-ui/lib/index.js"></script>-->
  <!--<title>Document</title>-->
<!--</head>-->
<!--<body>-->
<!--<input type="file" οnchange="importf(this)" />-->
<!--<div id="app">-->
  <!--<el-table-->
    <!--:data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"-->
    <!--style="width: 100%"-->
  <!--&gt;-->
    <!--<el-table-column-->
      <!--v-for="(item,key,index) in tableData[0]"-->
      <!--:key="index"-->
      <!--:prop="key"-->
      <!--:label="key"-->
      <!--width="180"-->
    <!--&gt;</el-table-column>-->
  <!--</el-table>-->
  <!--<el-pagination-->
    <!--@size-change="handleSizeChange"-->
    <!--@current-change="handleCurrentChange"-->
    <!--:current-page="currentPage"-->
    <!--:page-sizes="[15, 20, 30, 40]"-->
    <!--:page-size="pagesize"-->
    <!--layout="total, sizes, prev, pager, next, jumper"-->
    <!--:total="tableData.length"-->
  <!--&gt;-->
  <!--</el-pagination>-->
<!--</div>-->
<!--<script>-->
  <!--var vue = new Vue({-->
    <!--el: "#app",-->
    <!--data: {-->
      <!--tableData: [],-->
      <!--currentPage: 1,-->
      <!--pagesize: 15-->
    <!--},-->
    <!--methods: {-->
      <!--// 初始页currentPage、初始每页数据数pagesize和数据data-->
      <!--handleSizeChange: function(size) {-->
        <!--this.pagesize = size;-->
        <!--console.log(this.pagesize); //每页下拉显示数据-->
      <!--},-->
      <!--handleCurrentChange: function(currentPage) {-->
        <!--this.currentPage = currentPage;-->
        <!--console.log(this.currentPage); //点击第几页-->
      <!--}-->
    <!--}-->
  <!--});-->

  <!--function importf(obj) {-->
    <!--//导入-->
    <!--if (!obj.files) {-->
      <!--return;-->
    <!--}-->
    <!--var f = obj.files[0];-->
    <!--console.log(f);-->
    <!--var reader = new FileReader();-->
    <!--var jsonobject_0;-->
    <!--var result = [];-->
    <!--reader.onload = function(e) {-->
      <!--var data = e.target.result;-->
      <!--//获取xlsx对象-->
      <!--var workbook = XLSX.read(data, {-->
        <!--type: "binary"-->
      <!--});-->

      <!--jsonobject_0 = XLSX.utils.sheet_to_json(-->
        <!--workbook.Sheets[workbook.SheetNames[0]]-->
      <!--);-->
      <!--vue.$data.tableData = jsonobject_0;-->
      <!--console.log(jsonobject_0);-->
    <!--};-->
    <!--reader.readAsBinaryString(f);-->
  <!--}-->
<!--</script>-->
<!--</body>-->
<!--</html>-->
<!--————————————————-->
<!--版权声明：本文为CSDN博主「執念有叁」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。-->
<!--原文链接：https://blog.csdn.net/Handsome3618/article/details/86546647-->

<!--<!DOCTYPE html>-->
<!--<html class="over_hidd">-->
<!--<head>-->
  <!--<meta charset="UTF-8">-->
  <!--<title>vue+element后台系统"</title>-->
  <!--<meta name="Author" content="Lee">-->
  <!--<meta name="Keywords" content="vue+element后台系统">-->
  <!--<link rel="stylesheet" href="css/public.css" />-->
  <!--<link rel="stylesheet" href="css/element.css" />-->
<!--</head>-->
<!--<body class="over_hidd">-->
<!--<div id="app" class="over_hidd">-->
  <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
    <!--<el-form-item label="活动名称" prop="name">-->
      <!--<el-input v-model="ruleForm.name"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="活动区域" prop="region">-->
      <!--<el-select v-model="ruleForm.region" placeholder="请选择活动区域">-->
        <!--<el-option label="区域一" value="shanghai"></el-option>-->
        <!--<el-option label="区域二" value="beijing"></el-option>-->
      <!--</el-select>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="活动时间" required>-->
      <!--<el-col :span="11">-->
        <!--<el-form-item prop="date1">-->
          <!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>-->
        <!--</el-form-item>-->
      <!--</el-col>-->
      <!--<el-col class="line" :span="2">-</el-col>-->
      <!--<el-col :span="11">-->
        <!--<el-form-item prop="date2">-->
          <!--<el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>-->
        <!--</el-form-item>-->
      <!--</el-col>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="即时配送" prop="delivery">-->
      <!--<el-switch v-model="ruleForm.delivery"></el-switch>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="颜色值" prop="color">-->
      <!--<el-color-picker-->
        <!--v-model="ruleForm.color"-->
        <!--show-alpha-->
        <!--:predefine="predefineColors">-->
      <!--</el-color-picker>-->
    <!--</el-form-item>-->
    <!--<div>-->
      <!--<span v-for="key in ruleForm.upload">{{key.url}}</span><br/>-->
    <!--</div>-->
    <!--<el-form-item label="上传图片" prop="upload">-->
      <!--<el-upload-->
        <!--v-model="ruleForm.upload"-->
        <!--action="https://jsonplaceholder.typicode.com/posts/"-->
        <!--list-type="picture-card"-->
        <!--:on-preview="handlePictureCardPreview"-->
        <!--:on-success="uploadImg"-->
        <!--:on-remove="handleRemove" multiple>-->
        <!--<i class="el-icon-plus"></i>-->
      <!--</el-upload>-->
      <!--<el-dialog :visible.sync="dialogVisible">-->
        <!--<img width="100%" :src="dialogImageUrl" alt="">-->
      <!--</el-dialog>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="活动性质" prop="type">-->
      <!--<el-checkbox-group v-model="ruleForm.type">-->
        <!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
        <!--<el-checkbox label="地推活动" name="type"></el-checkbox>-->
        <!--<el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
        <!--<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
      <!--</el-checkbox-group>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="特殊资源" prop="resource">-->
      <!--<el-radio-group v-model="ruleForm.resource">-->
        <!--<el-radio label="线上品牌商赞助"></el-radio>-->
        <!--<el-radio label="线下场地免费"></el-radio>-->
      <!--</el-radio-group>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="活动形式" prop="desc">-->
      <!--<el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item>-->
      <!--<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>-->
      <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
    <!--</el-form-item>-->
  <!--</el-form>-->
<!--</div>-->
<!--</body>-->
<!--<script type="text/javascript" src="js/vue.js" ></script>-->
<!--<script type="text/javascript" src="js/element.js" ></script>-->
<!--<script>-->
  <!--new Vue({-->
    <!--el: '#app',-->
    <!--data() {-->
      <!--return {-->
        <!--dialogImageUrl: '',-->
        <!--dialogVisible: false,-->
        <!--predefineColors: [-->
          <!--'#ff4500',-->
          <!--'#ff8c00',-->
          <!--'#ffd700',-->
          <!--'#90ee90',-->
          <!--'#00ced1',-->
          <!--'#1e90ff',-->
          <!--'#c71585',-->
          <!--'rgba(255, 69, 0, 0.68)',-->
          <!--'rgb(255, 120, 0)',-->
          <!--'hsv(51, 100, 98)',-->
          <!--'hsva(120, 40, 94, 0.5)',-->
          <!--'hsl(181, 100%, 37%)',-->
          <!--'hsla(209, 100%, 56%, 0.73)',-->
          <!--'#c7158577'-->
        <!--],-->
        <!--ruleForm: {-->
          <!--color:'rgba(255, 69, 0, 0.68)',-->
          <!--name: '',-->
          <!--region: '',-->
          <!--date1: '',-->
          <!--date2: '',-->
          <!--delivery: false,-->
          <!--type: [],-->
          <!--resource: '',-->
          <!--desc: '',-->
          <!--upload:[]-->
        <!--},-->
        <!--rules: {-->
          <!--name: [-->
            <!--{ required: true, message: '请输入活动名称', trigger: 'blur' },-->
            <!--{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }-->
          <!--],-->
          <!--region: [-->
            <!--{ required: true, message: '请选择活动区域', trigger: 'change' }-->
          <!--],-->
          <!--date1: [-->
            <!--{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }-->
          <!--],-->
          <!--date2: [-->
            <!--{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }-->
          <!--],-->
          <!--type: [-->
            <!--{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }-->
          <!--],-->
          <!--resource: [-->
            <!--{ required: true, message: '请选择活动资源', trigger: 'change' }-->
          <!--],-->
          <!--desc: [-->
            <!--{ required: true, message: '请填写活动形式', trigger: 'blur' }-->
          <!--],-->
          <!--upload:[-->
            <!--{type: 'array'}-->
          <!--]-->
        <!--}-->
      <!--};-->
    <!--},-->
    <!--methods: {-->
      <!--submitForm(formName) {-->
        <!--this.$refs[formName].validate((valid) => {-->
          <!--if (valid) {-->
            <!--this.$message({-->
              <!--showClose: true,-->
              <!--message: '提交成功！',-->
              <!--type: 'success'-->
            <!--});-->
            <!--console.log(this.ruleForm)-->
          <!--} else {-->
            <!--this.$message.error('提交失败');-->
            <!--return false;-->
          <!--}-->
        <!--});-->
      <!--},-->
      <!--resetForm(formName) {-->
        <!--this.$refs[formName].resetFields();-->
      <!--},-->
      <!--handleRemove(file, fileList) {//删除图片-->
        <!--var self = this;-->
        <!--console.log(self.ruleForm.upload)-->
        <!--for(var i in self.ruleForm.upload){-->
          <!--if(fileList.response.id==this.ruleForm.upload[i].id){-->
            <!--delete this.ruleForm.upload[i];-->
          <!--}-->
        <!--}-->
      <!--},-->
      <!--handlePictureCardPreview(file) {-->
        <!--this.dialogImageUrl = file.url;-->
        <!--this.dialogVisible = true;-->
      <!--},-->
      <!--uploadImg(response, file, fileList){//长传成功-->
        <!--this.ruleForm.upload = [];-->
        <!--for(var i in fileList){-->
          <!--this.ruleForm.upload.push({-->
            <!--id:response.id,-->
            <!--url:fileList[i].url-->
          <!--});-->
        <!--}-->

      <!--}-->
    <!--}-->
  <!--})-->
<!--</script>-->
<!--</html>-->
