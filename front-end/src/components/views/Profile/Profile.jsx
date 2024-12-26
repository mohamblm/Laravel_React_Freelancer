import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axiosClient from "../../../api/axios";

const UserProfileDashboard =() => {
    const dispatch = useDispatch();
    const { user, token} = useSelector(state => state.auth);

    const first_name=useRef();
    const last_name=useRef();
    const phone=useRef();
    const address=useRef();
    const city=useRef();
    const state=useRef();
    const postal_code=useRef();
    const country=useRef();
    const avatar=useRef();
    const bio=useRef();
    const date_of_birth=useRef();




    useEffect(()=>{
        if (!user && token) {
            // dispatch({ type: 'LOADING' })
            axiosClient.get('/user')
                .then((res) => {
                    console.log(res.data)
                    dispatch({ type: 'GET_USER', payload: res.data })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },[])

    const saveInf = () => {
        const profileInfo={
            user_id:user.profile.id ?? null,
            first_name :first_name.current.value,
            last_name :last_name.current.value,
            phone :phone.current.value,
            address :address.current.value,
            city :city.current.value,
            state :state.current.value,
            postal_code :postal_code.current.value,
            country :country.current.value,
            avatar :null,
            date_of_birth :date_of_birth.current.value,
            bio :bio.current.value,
        }
        console.log(profileInfo,user.profile.id)
        if(user.profile.id){
            axiosClient.put(`/profile/${user.profile.id}`,profileInfo)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: 'NOTIFICATION', payload: res.data.message })
                setTimeout(()=>{dispatch({ type: 'STOP_NOTIFICATION'})},5000)
            })
            .catch((err) => {
                console.log(err)
                const response = err.response;
                if (response && response.status == 422) {
                    console.log(response.data.errors)
                }
            })
        }else{
            axiosClient.post(`/profile`,profileInfo)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: 'NOTIFICATION', payload: res.data })
                setTimeout(()=>{dispatch({ type: 'STOP_NOTIFICATION'})},5000)
            })
            .catch((err) => {
                console.log(err)
                const response = err.response;
                if (response && response.status == 422) {
                    console.log(response.data.errors)
                }
            })
        }

    };

    return (<>
        {user &&
            <div className="">
                <div className="card shadow-lg border-0">
                    <div className="row g-0">
                        {/* Profile Image */}
                        <div className="col-md-4 text-center p-4">
                            <img
                                src={user.profile.avatar || "https://via.placeholder.com/150"}
                                alt="User Profile"
                                className="img-fluid rounded-circle mb-3"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                            />
                            <h4 className="fw-bold">{user.user_name}</h4>
                            <p className="text-muted">{user.email}</p>
                            {/* <div>
                                <strong>Bio :</strong>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div> */}
                        </div>

                        {/* User Information */}
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Profile Information</h5>
                                <ul className="list-unstyled">
                                
                                    <li>
                                        <strong>First Name:</strong> <input type="text" ref={first_name} defaultValue={user.profile.first_name}  placeholder='Your First Name'/> 
                                    </li>
                                    <li>
                                        <strong>Last Name:</strong> <input type="text" ref={last_name} defaultValue={user.profile.last_name}  placeholder='Your Last Name' /> 
                                    </li>
                                    <li>
                                        <strong>Phone:</strong> <input type="phone" ref={phone} defaultValue={user.profile.phone}  placeholder='Your Phone'/> 
                                    </li>
                                    <li>
                                        <strong>Date Of Birth:</strong> <input type="text" ref={date_of_birth} defaultValue={user.profile.date_of_birth }  placeholder='Your BirthDay'/> 
                                    </li>
                                    <li>
                                        <strong>Address:</strong> <input type="text" ref={address} defaultValue={user.profile.address }  placeholder='YouR Addrees'/> 
                                    </li>
                                    <li>
                                        <strong>City:</strong> <input type="text" ref={city} defaultValue={user.profile.city}  placeholder='Your City'/> 
                                    </li>
                                    <li>
                                        <strong>State:</strong> <input type="text" ref={state} defaultValue={user.profile.state}  placeholder='Your State' /> 
                                    </li>
                                    <li>
                                        <strong>Postal Code :</strong> <input type="text" ref={postal_code} defaultValue={user.profile.postal_code}  placeholder='Postal Code' /> 
                                    </li>
                                    <li>
                                        <strong>Country:</strong> <input type="text" ref={country} defaultValue={user.profile.country}  placeholder='Your Country'/> 
                                    </li>
                                    <li>
                                        <strong>Bio:</strong> <textarea type="text" ref={bio} defaultValue={user.profile.bio}  placeholder='Your Bio'></textarea>
                                        
                                    </li>
                                </ul>
                                <div className="mt-4 d-flex gap-3">
                                    <button className="btn btn-primary bg-success px-5 " onClick={saveInf}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
    </>
    );
};

export default UserProfileDashboard;
