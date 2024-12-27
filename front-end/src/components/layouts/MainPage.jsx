import {useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../views/Navbar';
import { useSelector,useDispatch } from 'react-redux';
import axiosClient from '../../api/axios';
import './MainPage.css';

export default function () {
  const {loading ,notification}=useSelector(state=>state.auth);
  const{load}=useSelector(state=>state.servicesReducer);
  const dispatch=useDispatch();
  const { user, token } = useSelector(state => state.auth)
  useEffect(()=>{
    console.log(user)
    if(!user && token){
      axiosClient.get('/user')
      .then((res)=>{
        console.log(res.data,token)
        dispatch({type:'GET_USER', payload:res.data})
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },[])
  
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      {(loading ||load ) && <div id="loading-container">
        <div id="spinner"></div>
      </div>}
      {notification &&
          <div className="notification">
            {notification}
          </div>
        }
    </div>
  )
}
