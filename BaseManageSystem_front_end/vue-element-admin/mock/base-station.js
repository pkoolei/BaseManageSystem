import Mock from 'mockjs'

const List=[];
const count=100;


for(let i=1;i<count;i++){
  List.push(Mock.mock({
    id:'@increment',
    name:'@ctitle(5)',
    place:'@cword(10)',
    rate:'@float(0,100,2,2)',
    time:'@datetime'
  }))
}
  export default[
  {
      url:'/getAlldata',
      type:'get',
    response: config=>{
        return {
          code:20000,
          data:{
            total:List.length,
            item:List
          }
        }
    }
  }
]
