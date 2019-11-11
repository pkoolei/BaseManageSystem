<template>
  <div class="app-container">
    <div>
      <!--查询区-->
      <div class="filter-container">
        <el-form :inline="true">
          <el-form-item>
            <el-select v-model="filterValue" placeholder="请选择查询条件">
              <el-option
                v-for="item in filterOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item value="输入查询值">
            <el-input v-model="filterinput" :placeholder="filterPlaceholder"></el-input>
          </el-form-item>

          <el-form-item>
            <el-date-picker
              v-model="filterDate"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button v-waves type="primary" @click="search">查找</el-button>

          </el-form-item>
          <el-form-item>
            <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
              Export
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <!--展示区-->
      <div class="chart-container" id="01">
        <!--<chart height="100%" width="100%"/>-->
      </div>
    </div>
  </div>
</template>


<script>
  import Chart from '@/components/Charts/LineMarker'
  import waves from '@/directive/waves' // waves directive
  import { parseTime } from '@/utils'
  import echarts from 'echarts'

  export default {

    data() {

      return {
        filterOptions: [{
          value: '网管小区名',
          label: '网管小区名'
        }, {
          value: '小区CI',
          label: '小区CI'
        }],
        filterValue: '',
        filterinput:"",
        downloadLoading: false,
//      时间选择器
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        filterDate: '',

//        模拟数据
        list:[
          {
            "日期":"2019/10/1",
            "基站名称":"广州-H-榄塘村中-394860-OF",
            "小区名称":"广州-H-榄塘村中-394860-1-1-OF",
            "小区双工模式":"CELL_FDD",
            "本地小区标识":1,
            "完整度":"100%",
            "上行吞吐量 (GB)":1.4336,
            "下行吞吐量 (GB)(字节)":17.1008,
            "总流量(GB)":18.5344
          }
        ],
        myChart:""
      }
    },
    methods:{
      search(){
        console.log(this.value2);
      },
      handleDownload() {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ["日期",
            "基站名称",
            "小区名称",
            "小区双工模式",
            "本地小区标识",
            "完整度",
            "上行吞吐量 (GB)",
            "下行吞吐量 (GB)(字节)",
            "总流量(GB)"]
          const filterVal = ["日期",
            "基站名称",
            "小区名称",
            "小区双工模式",
            "本地小区标识",
            "完整度",
            "上行吞吐量 (GB)",
            "下行吞吐量 (GB)(字节)",
            "总流量(GB)"]
          const data = this.formatJson(filterVal, this.list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: 'table-list'
          })
          this.downloadLoading = false
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        }))
      }
    },
    computed:{
      filterPlaceholder(){
        return "请输入"+this.filterValue;
      }
    },
    components:{
     // Chart
    },
    directives: { waves },
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('01'));
      //绘制图表
      this.myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }

</script>


<style>
  .chart-container{
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
  }
</style>
