<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="派单时间">
        <el-col :span="11">
          <el-date-picker v-model="form.sendtime" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>

      <el-form-item label="投诉号码">
        <el-input v-model="form.phonenumber" />
      </el-form-item>

      <el-form-item label="客服要求回复时限">
        <el-col :span="11">
          <el-date-picker v-model="form.deadline" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>

      <el-form-item label="网络类型">
        <el-select v-model="form.nettype" placeholder="请选择网络类型">
          <el-option label="LTE" value="LTE" />
          <el-option label="WCDMA" value="WCDMA" />
        </el-select>
      </el-form-item>

      <el-form-item label="工单编号">
        <el-input v-model="form.WOnumber" />
      </el-form-item>

      <el-form-item label="处理状态">
        <el-select v-model="form.status" placeholder="请选择活动区域">
          <el-option label="待处理" value="shanghai" />
          <el-option label="处理中" value="beijing" />
          <el-option label="已完成" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="工单主题">
        <el-input v-model="form.WOtheme" />
      </el-form-item>

      <el-form-item label="投诉内容">
        <el-input v-model="form.complaint" />
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="form.remarks" />
      </el-form-item>

      <el-form-item label="责任人">
        <el-input v-model="form.responsible" />
      </el-form-item>

      <el-form-item label="责任人电话">
        <el-input v-model="form.responnumber" />
      </el-form-item>

      <el-form-item label="问题原因">
        <el-input v-model="form.reason" />
      </el-form-item>

      <el-form-item label="解决方案">
        <el-input v-model="form.solution" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>



<script>
export default {
  data() {
    return {
      form: {
        sendtime: '',
        phonenumber: '',
        deadline: '',
        nettype:'',
        WOnumber: '',
        status: '',
        WOtheme: [],
        complaint:'',
        remarks:'',
        responsible:'',
        responnumber:'',
        reason: '',
        solution: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  },
  mounted(){

  }
}
</script>


<style scoped>
body{
  background-color: darkgrey;
}
</style>
