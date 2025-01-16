import { useDispatch, useSelector } from "react-redux";
import {useRef} from 'react';
import {Link,Navigate} from 'react-router-dom';
import axios from '../../api/axios';
import { useEffect } from 'react';


const ModalSignup = ({ show, onClose,toggle }) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const dispatch = useDispatch();
    const { user, token, loading, error } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch({ type: 'REST_ERRORS' })
    }, [show])
    const onSubmit = ev => {
        ev.preventDefault()

        const credentials = {
            user_name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
            role: 'customer'
        }
        dispatch({ type: 'LOADING' });
        axios.post('/singup', credentials)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: 'SIGNUP_SUCCESS',payload:res.data.verifyUrl});
                toggle();
            })
            .catch((error) => {
                console.log(error)
                const response = error.response;
                if (response && response.status == 422) {
                    console.log(response.data.errors)
                    dispatch({ type: 'SIGNUP_FAILURE', payload: response.data.errors })
                
                }
            })
    }
    if (!show) return null; // Render nothing if `show` is false

    return (
        <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: 'black' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Signup for free</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="login-signup-form animated fadeInDown">
                            <div className="form">
                                <form onSubmit={onSubmit}>
                                    {/* <h1 className="title">Signup for Free</h1> */}
                                    {error &&
                                        <div className="alert">
                                            {Object.keys(error).map(key => (
                                                <p key={key}>{error[key][0]}</p>
                                            ))}
                                        </div>
                                    }
                                    <input ref={nameRef} type="text" placeholder="User Name" />
                                    <input ref={emailRef} type="email" placeholder="Email Address" />
                                    <input ref={passwordRef} type="password" placeholder="Password" />
                                    <input ref={passwordConfirmationRef} type="password" placeholder="Repeat Password" />
                                    <button className="btn btn-block">Signup</button>
                                    <p className="message">Already registered? <a onClick={toggle}><b>Sign In</b></a></p>
                                </form>
                                {/* <button onClick={() => { console.log(user, token, loading, error, localStorage.getItem('ACCESS_TOKEN')) }}>user</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ModalSignup;
