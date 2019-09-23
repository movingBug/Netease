import request from '../utils/request'

export async function swiperList(){
   await request.get('/').then(res=>{
        return res.data
   })
}
