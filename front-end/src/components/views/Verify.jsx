import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axiosClient from '../../api/axios'

export default function Verify() {
    const [message,setMessage]=useState()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const email = queryParams.get('email');
    useEffect(()=>{
        console.log(id,email)
        axiosClient.post('verify',{id:id,email:email})
        .then((res)=>{
            // console.log(res.data.user)
            setMessage(res.data.message)

        })
        .catch((err)=>{
            console.log(err)
            setMessage(err.response.data.message)
        })
    },[])
  return (
    <div>
        <p>{message ? message :'verifing...' }</p>
    </div>
  )
}
