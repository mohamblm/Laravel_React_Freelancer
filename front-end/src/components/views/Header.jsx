import { useState, useCallback } from 'react';
import { Search, Menu, User } from 'lucide-react'; 
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import ModalLogin from './Login';
import ModalSignup from './Signup';
import SearchBar from './SearchBar';
import './Navbar.css';

const Header = () => {
    const { user, token } = useSelector((state) => state.auth); // Reduced unused `error`
    const dispatch = useDispatch();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isModalSignupOpen, setModalSignupOpen] = useState(false);
    const [isModalLoginOpen, setModalLoginOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Use `useCallback` to memoize functions and avoid re-creation on each render
    const toggleDropdown = useCallback(() => setDropdownOpen((prev) => !prev), []);
    const handleMouseLeave = useCallback(() => setDropdownOpen(false), []);
    const OpenModalLogin = useCallback(() => setModalLoginOpen(true), []);
    const CloseModalLogin = useCallback(() => setModalLoginOpen(false), []);
    const OpenModalSignup = useCallback(() => setModalSignupOpen(true), []);
    const CloseModalSignup = useCallback(() => setModalSignupOpen(false), []);



    const logout = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/logout');
            localStorage.removeItem('ACCESS_TOKEN');
            dispatch({ type: 'LOGOUT_SUCCESS' });
            navigate('/');
        } catch (error) {
            if (error.response) {
                dispatch({ type: 'SIGNUP_FAILURE', payload: error.response.data.errors });
                console.error(error.response.data.errors);
            }
        }
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

    return (
        <header className=" bg-white navbarS">
            <div className="container-fluid px-3">
                <div className="d-flex justify-content-between align-items-center p-0">
                    {/* Logo Section */}
                    <Link to="/" className="fs-4 fw-bold text-success text-decoration-none">
                        GoFreelancer
                    </Link>

                    {/* Search Bar */}
                    <div className="d-none d-md-flex flex-grow-1 mx-4">
                        <div className="position-relative w-100" style={{ maxWidth: '600px' }}>
                            {/* <input
                                type="text"
                                placeholder="Search for any service..."
                                className="form-control pe-5 m-0"
                                aria-label="Search for any service"
                            />
                            <Search
                                className="position-absolute top-50 translate-middle-y text-secondary"
                                style={{ right: '10px', pointerEvents: 'none' }}
                                size={20}
                            /> */}
                            <SearchBar/>
                        </div>
                    </div>

                    {/* Navigation and Icons */}
                    <div className="d-flex align-items-center gap-3">
                        {user?.role === 'service_provider' && (
                            <Link
                                to="/dashboard"
                                className={`link me-2 ${location.pathname.includes('/dashboard') && 'text-success'}`}
                            >
                                DashBoard
                            </Link>
                        )}
                        {token ? (
                            <div className="profile ">
                                {user?.profile?.avatar ?
                                    <img
                                        onClick={toggleDropdown}
                                        className="avatar "
                                        src={
                                            user?.profile && user?.profile?.avatar != null
                                                ? `http://127.0.0.1:8000/storage/${user.profile.avatar}`
                                                : '/assets/profileAvatar.png'
                                        }
                                        alt="profile"
                                    /> :
                                    <User  onClick={toggleDropdown} className="text-secondary avatar" size={24} />
                                }
                                {isDropdownOpen && (
                                    <div
                                        className="menu active "
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <ul className="dis_profile ">
                                            <li>
                                                <Link to="/profile" className="link">
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/DefaultLayout/profile" className="link">
                                                    Settings
                                                </Link>
                                            </li>
                                            {user?.role === 'customer' && (
                                                <li>
                                                    <Link to="/BecomeSaller" className="link">
                                                        Become a seller
                                                    </Link>
                                                </li>
                                            )}
                                            <div />
                                            <li onClick={logout}>Logout</li>
                                        </ul>
                                        <div className="triangle" />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>
                                <a onClick={OpenModalLogin} role="button">
                                    Login
                                </a>
                                <a onClick={OpenModalSignup} role="button">
                                    Signup
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ModalLogin show={isModalLoginOpen} onClose={CloseModalLogin} toggle={toggle} />
            <ModalSignup show={isModalSignupOpen} onClose={CloseModalSignup} toggle={toggle} />
        </header>
    );
};

export default Header;
