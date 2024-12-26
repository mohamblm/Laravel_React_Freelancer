// import {useDispatch ,useSelector} from 'redux';

import axiosClient from '../../api/axios'
// import {useDispatch} from 'react-redux';


export  const login=(credentials)=>async (dispatch)=>{
    
    try{
        
        const response=await axiosClient.post('/login',credentials).then(({data})=>{
            dispatch({type:'LOGIN_SUCCESS', payload:data})
        }).catch(error => console.error(error.response.data.message));
        // const response=await fetch('http://127.0.0.1:8000/api/login',{method:'POST',headers:{'content-type':'application/json'}})
        // const customers=await response.json()
        // dispatch({type:'LOGIN_SUCCESS', payload:customers});
        // console.log('lowl  '+response.data)

    }catch(error){
        console.log('tani '+error)
        // dispatch({type:'LOGIN_FAILURE', payload:error.response.data});
    }
}

