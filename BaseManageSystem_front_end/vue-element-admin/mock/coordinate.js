import Mock from 'mockjs'

const List=[
  {
    id: 1,
    baseStationName: '广州塔',
    coordinate:{
      lng:113.329,
      lat:23.110
    },
    wireHeight:[28,22,26],
    downDipAngle:[15,18,10],
    areaName:['F广州塔1','F广州塔2','F广州塔3'],
    directionAngle:[0,90,180],

  },{
    id: 2,
    baseStationName: '广州大剧院',
    coordinate:{
      lng:113.329,
      lat:23.121
    },
    wireHeight:[24,23,26],
    downDipAngle:[10,11,9],
    areaName:['F广州大剧院1','F广州大剧院2','F广州大剧院3'],
    directionAngle:[45,135,225]
  },{
    id: 3,
    baseStationName: '广东美术馆',
    coordinate:{
      lng:113.314,
      lat:23.114
    },
    wireHeight:[13,12,24],
    downDipAngle:[10,7,9],
    directionAngle:[90,180,270],
    areaName:['F广州海珠广东美术馆1','F广州海珠广东美术馆2','F广州海珠广东美术馆3']
  },{
    id: 4,
    baseStationName: '琶醍',
    coordinate:{
      lng:113.345,
      lat:23.113
    },
    wireHeight:[15,18,26],
    downDipAngle:[12,7,6],
    directionAngle:[135,225,315],
    areaName:['F广州海珠珠江琶醍1','F广州海珠珠江琶醍2','F广州海珠珠江琶醍3']
  },{
    id: 5,
    baseStationName: '海心沙',
    coordinate:{
      lng:113.330,
      lat:23.117
    },
    wireHeight:[22,25],
    downDipAngle:[9,10],
    directionAngle:[180,0],
    areaName:['F广州海珠海心沙1','F广州海珠海心沙2'],
  },
  {
    id: 6,
    baseStationName: '长河酒店',
    coordinate:{
      lng:113.341238,
      lat:23.118973
    },
    wireHeight:[28],
    downDipAngle:[12],
    areaName:['F广州猎德长河酒店1',],
    directionAngle:[300]
  },
  {
    id: 7,
    baseStationName: 'F广州南湖乐园白云湖畔',
    coordinate:{
      lng:113.229,
      lat:23.3228
    },
    wireHeight:[27,27,27],
    downDipAngle:[6,10,10],
    directionAngle:[220,60,320],
    areaName:['F广州南湖乐园白云湖畔2','F广州南湖乐园白云湖畔1','F广州南湖乐园白云湖畔3']
  },
  {
    id: 8,
    baseStationName: 'F广州海珠仑头村中(已割接至5G）',
    coordinate:{
      lng:113.38071,
      lat:23.0838
    },
    wireHeight:[25.5,25,25],
    downDipAngle:[7,7,8],
    directionAngle:[100,180,300],
    areaName:['F海珠仑头村中4-2','F海珠仑头村中5-2','F海珠仑头村中6-2']
  },
  {
    id: 9,
    baseStationName: '广州-H-客村立交-393803-OF',
    coordinate:{
      lng:113.32173,
      lat:23.101797
    },
    wireHeight:[42,42,42],
    downDipAngle:[11,11,11],
    directionAngle:[30,200,350],
    areaName:['U广州客村立交1','U广州客村立交2','U广州客村立交3']
  },
  {
    id: 10,
    baseStationName: '广州-H-赤岗大厦-393723-OF',
    coordinate:{
      lng:113.340966,
      lat:23.101132
    },
    wireHeight:[69,69,69],
    downDipAngle:[14,9,12],
    directionAngle:[40,160,280],
    areaName:['广州-H-赤岗大厦-393723-1-1-OF','广州-H-赤岗大厦-393723-2-1-OF','广州-H-赤岗大厦-393723-3-1-OF']
  },
  {
    id: 11,
    baseStationName: 'F广州海珠鹭江群星东',
    coordinate:{
      lng:113.315,
      lat:23.0953
    },
    wireHeight:[24,24,26],
    downDipAngle:[8,9,8],
    directionAngle:[0,120,200],
    areaName:['F海珠鹭江群星东1-2','F海珠鹭江群星东2-2','F海珠鹭江群星东3-2']
  },
  {
    id: 12,
    baseStationName: 'F广州磨碟沙公园东',
    coordinate:{
      lng:113.340104,
      lat:23.109703
    },
    wireHeight:[20,20,20],
    downDipAngle:[9,10,13],
    directionAngle:[20,130,260],
    areaName:['F广州磨碟沙公园东1','F广州磨碟沙公园东2','F广州磨碟沙公园东3']
  }
]


export default [
  {
    url: '/map/baseStation',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          baseStationList:List
        }
      }
    }
  },

]

