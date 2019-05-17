import { GET_POSTS  } from '../actions/types'; 
import axios from 'axios';


export const getPost=(start,end)=> {
    return(dispatch)=>{
        axios({
            method:'get',
            url:'http://jsonplaceholder.typicode.com/posts'
        }).then(response=>{
            dispatch({
                type:GET_POSTS,
                payload:response.data.slice(start,end)
            });
        }).catch(error=>{
            console.warn('Hata: '+error);
        });
    }
}