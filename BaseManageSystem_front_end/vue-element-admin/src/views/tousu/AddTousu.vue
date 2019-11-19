<template>
  <div id="form">
    <el-form ref="form" :model="form" label-width="100px">

      <el-form-item label="派单时间">
        <el-col :span="4">
          <el-date-picker v-model="form.sendtime" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="4">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>

      <el-form-item label="要求时限">
        <el-col :span="4">
          <el-date-picker v-model="form.deadline" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="4">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>

      <el-row :gutter="20">
        <el-col :span="6">
      <el-form-item label="网络类型">
        <el-select v-model="form.nettype" placeholder="请选择网络类型">
          <el-option label="LTE" value="LTE" />
          <el-option label="WCDMA" value="WCDMA" />
        </el-select>
      </el-form-item>
          </el-col>
        <el-col :span="6">
      <el-form-item label="处理状态">
        <el-select v-model="form.status" placeholder="请选择活动区域">
          <el-option label="待处理" value="shanghai" />
          <el-option label="处理中" value="beijing" />
          <el-option label="已完成" value="beijing" />
        </el-select>
      </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="责任人">
            <el-input v-model="form.responsible" style="width:200px" />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="责任人电话">
            <el-input v-model="form.responnumber" style="width:250px"/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6">
      <el-form-item label="投诉号码">
        <el-input style="width:250px" v-model="form.phonenumber"  />
      </el-form-item>
        </el-col>
      <el-col :span="6">
      <el-form-item label="工单编号">
        <el-input style="width:250px" v-model="form.WOnumber" />
      </el-form-item>
      </el-col>
        <el-col :span="6">
          <el-form-item label="工单主题" >
            <el-input  v-model="form.WOtheme"  style="width:250px"/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="投诉内容">
        <el-input type="textarea" v-model="form.complaint" style="width:700px"/>
      </el-form-item>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.remarks" style="width:700px"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit()">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>



<script>
  import axios from 'axios';
export default {
  data() {
    return {
      form: {
        sendtime: '',
        phonenumber: '',
        deadline: '',
        nettype: '',
        WOnumber: '',
        status: '',
        WOtheme: [],
        tslongitude: '',
        tslatitude: '',
        complaint: '',
        remarks: '',
        UrgencyLevel: '',
        responsible: '',
        responnumber: '',
        reason: '',
        solution: '',
        reply: ''
      }
    }
  },
  methods: {
    onSubmit() {
      /* json格式提交： */
//      let formData = JSON.stringify(this.form);
//      axios({
//        method: "post",
//        url: "xxxxxxx",
//        headers: {
//          "Content-Type": "multipart/form-data"
//        },
//        withCredentials: true,
//        data: formData
//      }).then((res) => {
//        console.log(res);
//      });
      alert("提交成功！")
    }
  },
  mounted() {
  }
}
</script>


<style scoped>
body{
  background-color: darkgrey;
}
  #form{
    margin-top: 50px;
  }

</style>
