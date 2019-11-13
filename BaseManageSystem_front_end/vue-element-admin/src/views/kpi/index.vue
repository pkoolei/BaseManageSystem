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
            <el-input v-model="filterinput" :placeholder="filterPlaceholder" ></el-input>
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
            <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download"
                       @click="handleDownload">
              导出
            </el-button>
          </el-form-item>
        </el-form>
        <el-card class="box-card">
          <div class="text item"> 查询小区结果：</div>
          <div v-for="o in showSeachContent" :key="o" class="text item">
            {{o}}
          </div>
        </el-card>
      </div>
      <!--展示区-->
      <div class="chart-container" id="01">
      </div>
    </div>
  </div>
</template>


<script>
  import Chart from '@/components/Charts/LineMarker'
  import waves from '@/directive/waves' // waves directive
  import {parseTime} from '@/utils'
  import echarts from 'echarts'
  import {fetchList} from '@/api/kpi'

  export default {

    data() {

      return {
        filterOptions: [{
          value: '网管小区名',
          label: '网管小区名'
        }, {
          value: '基站名称',
          label: '基站名称'
        }],
//      查找小区名或者小区CI
        filterValue: '',
//      查找值
        filterinput: "",
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

//        模拟数据无效，已使用mock获取数据
        list: [
//          {
//            日期: "2019/10/1",
//            基站名称: "广州-H-榄塘村中-394860-OF",
//            小区名称: "广州-H-榄塘村中-394860-1-1-OF",
//            小区双工模式: "CELL_FDD",
//            本地小区标识: 1,
//            完整度: "100%",
//            上行吞吐量: 1.4336,
//            下行吞吐量: 17.1008,
//            总流量: 19.5344
//          },
//          {
//            日期: "2019/10/2",
//            基站名称: "广州-H-榄塘村中-394860-OF",
//            小区名称: "广州-H-榄塘村中-394860-1-1-OF",
//            小区双工模式: "CELL_FDD",
//            本地小区标识: 1,
//            完整度: "100%",
//            上行吞吐量: 1.4336,
//            下行吞吐量: 17.1008,
//            总流量: 130.5344
//          },
//          {
//            日期: "2019/10/3",
//            基站名称: "广州-H-榄塘村中-394860-OF",
//            小区名称: "广州-H-榄塘村中-394860-1-1-OF",
//            小区双工模式: "CELL_FDD",
//            本地小区标识: 1,
//            完整度: "100%",
//            上行吞吐量: 1.4336,
//            下行吞吐量: 17.1008,
//            总流量: 118.5344
//          },
//          {
//            日期: "2019/10/4",
//            基站名称: "广州-H-榄塘村中-394860-OF",
//            小区名称: "广州-H-榄塘村中-394860-1-1-OF",
//            小区双工模式: "CELL_FDD",
//            本地小区标识: 1,
//            完整度: "100%",
//            上行吞吐量: 1.4336,
//            下行吞吐量: 17.1008,
//            总流量: 180.5344
//          }
        ],
        filterList: [],
        myChart: "",
        listQuery:{}
      }
    },
    methods: {
      search() {
        let startDate = new Date(Date.parse(this.filterDate[0]));
        let endDate = new Date(Date.parse(this.filterDate[1]));
        fetchList(this.listQuery).then(response => {
          this.list = response.data;
          //条件查询
          this.filterList = this.list.filter(arr => {
            if (this.filterValue == "网管小区名") {
              return arr.小区名称.indexOf(this.filterinput)>=0
                && (Date.parse(arr.日期).valueOf()>startDate.valueOf() && Date.parse(arr.日期).valueOf()<endDate.valueOf())
            }
            if (this.filterValue == "基站名称") {
              return (arr.基站名称.indexOf(this.filterinput)>=0)
                && (Date.parse(arr.日期).valueOf()>startDate.valueOf() && Date.parse(arr.日期).valueOf()<endDate.valueOf())
            }
          });
//按日期排序
          this.filterList.sort((a,b)=>{
            return a.日期> b.日期? 1 : -1;
          })

          let xlabel = [];
          let yvalue = [];
          let dflow = [];
          let dpRb =[];
          let arr = [];
          for (arr of this.filterList) {
            xlabel.push(arr.日期);
            yvalue.push(arr.总流量);
            dflow.push(arr.下行吞吐量);
            dpRb.push(arr.下行PRB利用率)
          }
          ;
          // 基于准备好的dom，初始化echarts实例
          this.myChart = echarts.init(document.getElementById('01'));
          //绘制图表
          this.myChart.setOption({
            title: {
              text: '业务量',
              left:"center"
            },
            legend: {
              x: '10%',
              top: '10%',
              textStyle: {
                color: '#90979c'
              },
              data: ['总流量（GB）', '下行吞吐量（GB）']
            },
            dataZoom: [{
              show: true,
              height: 30,
              xAxisIndex: [
                0
              ],
              bottom: 30,
              start: 10,
              end: 80,
              handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
              handleSize: '110%',
              handleStyle: {
                color: '#d3dee5'

              },
              textStyle: {
                color: '#fff'
              },
              borderColor: '#90979c'

            }, {
              type: 'inside',
              show: true,
              height: 15,
              start: 1,
              end: 35
            }],
            tooltip: {},
            xAxis: {
              data: xlabel
            },
            yAxis: [
              {
                type: 'value',
                name: '流量（GB）',
                axisLabel: {
                  formatter: '{value} GB'
                }
              },
              {
                type: 'value',
                name: 'pRB利用率',
                axisLabel: {
                  formatter: '{value}% '
                }
              }
            ],
            series: [{
              name: '总流量（GB）',
              type: 'bar',
              data: yvalue
            },
              {
                name: '下行吞吐量（GB）',
                type: 'bar',
                data: dflow
              }
              ,
              {
                name:'下行pRB利用率',
                type:'line',
                yAxisIndex:1,
                data:dpRb
              }
              ]
          });
          });
      },
      handleDownload() {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = [
            "日期",
            "基站名称",
            "小区名称",
            "小区双工模式",
            "本地小区标识",
            "完整度",
            "上行吞吐量",
            "下行吞吐量",
            "总流量",
            "下行PRB利用率"]
          const filterVal = ["日期",
            "基站名称",
            "小区名称",
            "小区双工模式",
            "本地小区标识",
            "完整度",
            "上行吞吐量",
            "下行吞吐量",
            "总流量",
            "下行PRB利用率"]
          const data = this.formatJson(filterVal, this.list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: 'xxx小区业务量'
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
      },
    },
    computed: {
      filterPlaceholder() {
        return "请输入" + this.filterValue;
      },
      showSeachContent(){
        let arr = this.filterList.map(a=>a["小区名称"]);
        return Array.from(new Set(arr));
    }
    },
    directives: {waves},
    beforeDestroy() {
      if (!this.myChart) {
        return
      }
      this.myChart.dispose();
      this.myChart = null
    }
  }
</script>


<style scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
  }
  .box-card {
    width: 480px;
  }
</style>
