import { useState } from 'react'
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import ModalLogin from './Login';
import ModalSignup from './Signup';



export default function Navbar() {
    const { user, token, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [Dropdown, setDropdown] = useState(false);
    const [isModalSignupOpen, setModalSignupOpen] = useState(false);
    const [isModalLoginOpen, setModalLoginOpen] = useState(false);
    const navigate = useNavigate();
    const location=useLocation();

    const OpenModalLogin = () => setModalLoginOpen(true);
    const CloseModalLogin = () => setModalLoginOpen(false);

    const OpenModalSignup = () => setModalSignupOpen(true);
    const CloseModalSignup = () => setModalSignupOpen(false);

    const toggleDropdown = () => {
        console.log('clicked')
        if (Dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const handleMouseLeave = () => {
        setDropdown(false);
      };
    const toggle = () => {
        if (isModalSignupOpen) {
            CloseModalSignup();
            OpenModalLogin();
            
        } else if (isModalLoginOpen) {
            CloseModalLogin();
            OpenModalSignup();
        }
    }

    const logout = async (e) => {
        e.preventDefault()
        axios.post('/logout')
            .then((rep) => {
                console.log(rep.data);
                localStorage.removeItem('ACCESS_TOKEN');
                dispatch({ type: 'LOGOUT_SUCCESS' });
                // window.location.reload('/');
                navigate('/');
            })
            .catch((error) => {
                const response = error.response;
                if (response) {
                    dispatch({ type: 'SIGNUP_FAILURE', payload: response.data.errors })
                    console.log(response.data.errors)
                }
            })

    }

    return (
        <div>
            <nav className="navbarS">
                <div className="logo"><a href="/"><span className='text-success fw-bold'>G</span>oFreelancer</a></div>
                <div className='d-flex'>
                { user?.role ==='service_provider' && <Link to={'/dashboard'} className={`link me-2 ${location.pathname.includes('/dashboard') && 'text-success'}`}>DashBoard</Link>}
                    {token == null ? <div><a onClick={OpenModalLogin} >Login</a>
                        <a onClick={OpenModalSignup} >Signup</a></div> :
                        <div className='profile'>
                            <img onClick={toggleDropdown} className=" avatar" src={user?.profile ? `http://127.0.0.1:8000/storage/${user.profile.avatar}` : "/assets/profileAvatar.png"} alt="profile" />
                            <div className={Dropdown ? 'menu active' : 'menu'} onMouseLeave={handleMouseLeave}>
                                <ul className='dis_profile '>
                                    <li><Link to={'/profile'} className="link">Profile</Link></li>
                                    <li><Link to={'/DefaultLayout/profile'} className="link">Settings</Link></li>
                                    {user?.role==='customer' && <li><Link to={'/BecomeSaller'} className="link">Become a saller</Link></li>}
                                    <div />
                                    <li onClick={logout} >Logout</li>
                                </ul>
                                <div className='triangle' />
                            </div>

                        </div>
                        // 

                    }
                </div>

                <ModalLogin  show={isModalLoginOpen} onClose={CloseModalLogin} toggle={toggle} />
                <ModalSignup show={isModalSignupOpen} onClose={CloseModalSignup} toggle={toggle} />
            </nav>
        </div>
    )
}
