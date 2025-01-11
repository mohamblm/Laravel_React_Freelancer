import {useState} from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {useSelector} from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import PhoneVerificationModal from "./PhoneVerifiedNumber";
const AccountSecurity = () => {
    const {user}=useSelector(state=>state.auth);
    const navigate=useNavigate();
    // const [showModal, setShowModal] = useState(false);

    // const handleOpen = () => setShowModal(true);
    // const handleClose = () => setShowModal(false);
 const done=()=>{
    // if(user?.email_verified_at){
    //     navigate('/dashboard')
    // }
    navigate('/dashboard')
 }


  return (
    <div className="container mt-5">
      <div className="card ">
        <div className="card-body">
          <h3 className="card-title mb-3">Account Security</h3>
          <p className="text-muted">
            Trust and safety is a big deal in our community. Please verify your
            email and phone number so that we can keep your account secured.
          </p>
          <hr />

          {/* Email Section */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center">
              <FaEnvelope className="me-3 text-secondary" size={24} />
              <div>
                <h6 className="mb-0">Email</h6>
                <small className="text-muted">Private</small>
              </div>
            </div>
            <p className="text-success">Verified</p>
            {/* <button className="btn bg-success btn-sm" disabled={user?.email.verified_at!=null} >
              Verified
            </button> */}
          </div>

          {/* Phone Section */}
          {/* <div className="d-flex justify-content-between align-items-center mb-4" >
            <div className="d-flex align-items-center">
              <FaPhoneAlt className="me-3 text-secondary" size={24} />
              <div>
                <h6 className="mb-0">Phone Number</h6>
                <small className="text-muted">Private</small>
                <br />
                <small className="text-muted">
                  We'll never share your phone number.
                </small>
              </div>
            </div>
            <button onClick={handleOpen} className="btn btn-outline-primary btn-sm" disabled={user?.profile.virify_phone_at!=null}>
            Verified
            </button>
          </div> */}

          <hr />

          {/* Continue Button */}
          <div className="text-end">
            <button className="btn bg-success p-2 px-4" onClick={done}>Continue</button>
          </div>
        </div>
      </div>
      {/* <PhoneVerificationModal show={showModal} handleClose={handleClose} /> */}
    </div>
  );
};

export default AccountSecurity;
