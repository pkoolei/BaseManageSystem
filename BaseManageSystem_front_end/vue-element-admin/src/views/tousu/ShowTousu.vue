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
      width="250">
    </el-table-column>
    <el-table-column
      prop="remarks"
      label="备注"
      width="280">
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
      width="280">
    </el-table-column>
    <el-table-column
      prop="solution"
      label="解决方案"
      width="280">
    </el-table-column>
  </el-table>
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

