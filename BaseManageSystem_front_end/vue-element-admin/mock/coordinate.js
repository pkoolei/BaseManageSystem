import Mock from 'mockjs'

const List=[{
    id: 1,
    baseStationName: '广州塔',
    coordinate:{
      lng:113.329,
      lat:23.110
    },
    directionAngle:[0,90,180],

  },{
    id: 2,
    baseStationName: '广州大剧院',
    coordinate:{
      lng:113.329,
      lat:23.121
    },
    directionAngle:[45,135,225]
  },{
    id: 3,
    baseStationName: '广州美术馆',
    coordinate:{
      lng:113.314,
      lat:23.114
    },
    directionAngle:[90,180,270]
  },{
    id: 4,
    baseStationName: '琶醍',
    coordinate:{
      lng:113.345,
      lat:23.113
    },
    directionAngle:[130,220,290]
  },{
    id: 5,
    baseStationName: '海心沙',
    coordinate:{
      lng:113.330,
      lat:23.117
    },
    directionAngle:[180,0]
  },
  {
    id: 6,
    baseStationName: '长河酒店',
    coordinate:{
      lng:113.341238,
      lat:23.118973
    },
    directionAngle:[300]
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

