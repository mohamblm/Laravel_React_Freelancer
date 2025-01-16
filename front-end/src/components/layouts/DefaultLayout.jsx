import React from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function DefaultLayout() {
    const {token}=useSelector(state=>state.auth)
    if(!token){
       return <Navigate to={'/'} />
    }
    return (
        <div>
            <Outlet /> 
        </div>
    )
}
