import Mock from 'mockjs'

const List = [];
const count = 100;

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    "日期|+1": "@date('yyyy/MM/dd')",
    "基站名称|1": ["广州-H-榄塘村中-394860-OF","广州-H-榄塘村中-394861-OF"],
    "小区名称|1": ["广州-H-榄塘村中-394860-1-1-OF","广州-H-榄塘村中-394861-1-1-OF","广州-H-横沙城西-393714-1-2-OF"],
    小区双工模式: "CELL_FDD",
    本地小区标识: 1,
    完整度: "100%",
    "上行吞吐量|1-100.1-10":1,
    "下行吞吐量|1-100.1-10":1,
    "总流量|1-100.1-10": 1,
    "下行PRB利用率|0-100":1
  }))
}

export default [
  {
    url: '/kpi/kpi_flow-1-1',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: List
      }
    }
  }]
