import Mock from 'mockjs'

const List=[{
    id: 1,
    baseStationName: '广州塔',
    coordinate:{
      lng:113.329,
      lat:23.110
    }
  },{
    id: 2,
    baseStationName: '广州大剧院',
    coordinate:{
      lng:113.329,
      lat:23.121
    }
  },{
    id: 3,
    baseStationName: '广州美术馆',
    coordinate:{
      lng:113.314,
      lat:23.114
    }
  },{
    id: 4,
    baseStationName: '琶醍',
    coordinate:{
      lng:113.345,
      lat:23.113
    }
  },{
    id: 5,
    baseStationName: '海心沙',
    coordinate:{
      lng:113.330,
      lat:23.117
    }
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

