
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {login} from '../../redux/actions/authActions';
import axios from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const ModalLogin = ({ show, onClose,toggle }) => {



    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const { user, token, loading, error } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch({ type: 'REST_ERRORS' })
    }, [show])


    const onSubmit = async (e) => {
        e.preventDefault();
        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        dispatch({ type: 'LOADING' });
        await axios.post('/login', credentials)
            .then((res) => {
                dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
                localStorage.setItem('ACCESS_TOKEN', res.data.token);
                // onClose();
                navigate('/index')
                onClose();
            })
            .catch((error) => {
                const response = error.response;
                if (response && response.status == 422) {
                    console.log(response.data.errors)
                    dispatch({ type: 'LOGIN_FAILURE', payload: response.data.errors })
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
                        <h5 className="modal-title">Login into your account</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="login-signup-form animated fadeInDown">
                            <div className="form">
                                <form onSubmit={onSubmit}>
                                    <h1 className="title">Login into your account</h1>
                                    {error &&
                                        <div className="alert">
                                            {Object.keys(error).map(key => (
                                                <p key={key}>{error[key]}</p>
                                            ))}
                                        </div>
                                    }
                                    <input ref={emailRef} type="email" placeholder="Email" />
                                    <input ref={passwordRef} type="password" placeholder="Password" />
                                    <button className="btn btn-block">Login</button>
                                    <p className="message">Not registered? <a onClick={toggle}><b>Create an account</b></a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ModalLogin;
