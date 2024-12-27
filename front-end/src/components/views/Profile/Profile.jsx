import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axiosClient from "../../../api/axios";
import { TiPen } from "react-icons/ti";
import { useState } from "react";

const UserProfileDashboard = () => {
    const dispatch = useDispatch();
    const { user, token } = useSelector(state => state.auth);

    const first_name = useRef();
    const last_name = useRef();
    const phone = useRef();
    const address = useRef();
    const city = useRef();
    const state = useRef();
    const postal_code = useRef();
    const country = useRef();
    // const avatar = useRef(null);
    const [avatar,setavatar]=useState(null);
    const bio = useRef();
    const date_of_birth = useRef();




    useEffect(() => {
        if (!user && token) {
            dispatch({ type: 'LOADING' })
            axiosClient.get('/user')
                .then((res) => {
                    console.log(res.data)
                    dispatch({ type: 'GET_USER', payload: res.data })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        // avatar.current.value=file;
        setavatar(file)
    }
    const saveInf = () => {
        const Profile_INF=new FormData();
        Profile_INF.append('user_id', user.id);
        Profile_INF.append('first_name',first_name.current.value);
        Profile_INF.append('last_name',last_name.current.value);
        Profile_INF.append('phone',phone.current.value);
        Profile_INF.append('address',address.current.value);
        Profile_INF.append('first_name',first_name.current.value);
        Profile_INF.append('city',city.current.value);
        Profile_INF.append('state',state.current.value);
        Profile_INF.append('postal_code',postal_code.current.value);
        Profile_INF.append('country',country.current.value);
        if (avatar) {
            Profile_INF.append('avatar', avatar);
        }
        Profile_INF.append('date_of_birth',date_of_birth.current.value);
        Profile_INF.append('bio',bio.current.value);

        // for (let pair of Profile_INF.entries()) {
        //     console.log(pair[0] + ': ' + pair[1]);
        // }
        if (user?.profile && user.profile.id) {
            Profile_INF.append('_method', 'PUT'); 
            dispatch({type:'LOADING'})
            axiosClient.post(`/profile/${user.profile.id}`, Profile_INF)
                .then((res) => {
                    console.log(res.data)
                    dispatch({ type: 'NOTIFICATION', payload: res.data.message })
                    setTimeout(() => { dispatch({ type: 'STOP_NOTIFICATION' }) }, 5000)
                })
                .catch((err) => {
                    console.log(err)
                    const response = err.response;
                    if (response && response.status == 422) {
                        console.log(response.data.errors)
                    }
                })
        } else {
            dispatch({type:'LOADING'})
            axiosClient.post(`/profile`, Profile_INF)
                .then((res) => {
                    console.log(res.data)
                    dispatch({ type: 'NOTIFICATION', payload: res.data.message })
                    setTimeout(() => { dispatch({ type: 'STOP_NOTIFICATION' }) }, 5000)
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
                            <div className="bordered border-bottom m-0 p-0">
                                <div className="row">
                                    <div className="col-6 text-center d-flex flex-column justify-content-center align-items-end m-0 p-0">
                                        <img  src={user?.profile ?`http://127.0.0.1:8000/storage/${user.profile.avatar }` : "https://via.placeholder.com/150"} alt="User Profile" className="img-fluid rounded-circle" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                        <div style={{width:100}}>
                                            <label className="text-center "  htmlFor="profileImageInput" style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline',maxWidth: '10ch',overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis'}}>{avatar ? avatar.name: <>Profile<TiPen/></> } </label>
                                            <input id="profileImageInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                                        </div>
                                    </div> 
                                    <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                                        <h1 className="fw-bold">{user.user_name}</h1>
                                        <p className="text-muted">{user.email}</p>
                                        
                                    </div>
                                </div>
                            </div>

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
                                        <strong>First Name:</strong> <input type="text" ref={first_name} defaultValue={user.profile && user.profile.first_name} placeholder='Your First Name' />
                                    </li>
                                    <li>
                                        <strong>Last Name:</strong> <input type="text" ref={last_name} defaultValue={user.profile && user.profile.last_name} placeholder='Your Last Name' />
                                    </li>
                                    <li>
                                        <strong>Phone:</strong> <input type="phone" ref={phone} defaultValue={user.profile && user.profile.phone} placeholder='Your Phone' />
                                    </li>
                                    <li>
                                        <strong>Date Of Birth:</strong> <input type="text" ref={date_of_birth} defaultValue={user.profile && user.profile.date_of_birth} placeholder='Your BirthDay' />
                                    </li>
                                    <li>
                                        <strong>Address:</strong> <input type="text" ref={address} defaultValue={user.profile && user.profile.address} placeholder='YouR Addrees' />
                                    </li>
                                    <li>
                                        <strong>City:</strong> <input type="text" ref={city} defaultValue={user.profile && user.profile.city} placeholder='Your City' />
                                    </li>
                                    <li>
                                        <strong>State:</strong> <input type="text" ref={state} defaultValue={user.profile && user.profile.state} placeholder='Your State' />
                                    </li>
                                    <li>
                                        <strong>Postal Code :</strong> <input type="text" ref={postal_code} defaultValue={user.profile && user.profile.postal_code} placeholder='Postal Code' />
                                    </li>
                                    <li>
                                        <strong>Country:</strong> <input type="text" ref={country} defaultValue={user.profile && user.profile.country} placeholder='Your Country' />
                                    </li>
                                    <li>
                                        <strong>Bio:</strong> <textarea type="text" ref={bio} defaultValue={user.profile && user.profile.bio} placeholder='Your Bio'></textarea>
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
