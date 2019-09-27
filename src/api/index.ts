import instance from '@/utils/request'
//专题
export const getData = () => {
    const result = instance.get('/topic/list');
    return result;
}
//专题详情
export const getDatadetail = (id:any)=>{
    const result = instance.get('/topic/detail',{
        params:{
            id:id
        }
    });
    return result;
}
//评论
export const getDatacomment = (id:any)=>{
    const result = instance.get('/comment/list',{
        params:{
            valueId:id,
            typeId:1,
            page:1,
            size:100
        }
    });
    return result;
}
//推荐专题
export const getDatarelated = (id:any)=>{
    const result = instance.get('/topic/related',{
        params:{
            id:id
        }
    });
    return result;
}


