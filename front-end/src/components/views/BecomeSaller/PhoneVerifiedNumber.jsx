import { useState } from "react";
import { useEffect } from "react";

const PhoneVerificationModal = ({ show, handleClose }) => {
  if (!show) return null; // Ensure the modal renders conditionally
  const [countries,setCountries]=useState();
  const [phoneCode,setPhoneCode]=useState();

  const getphoneCode=(number)=>{
    console.log(number)
    setPhoneCode(number)
  }
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    const countries = data.map(country => ({
      name: country.name.common,
      phoneCode: country.idd?.root || '' + (country.idd?.suffixes?.[0] || '')
    }));
    console.log(countries);
    setCountries(countries)
  })
  .catch(error => console.error(error));
  },[])

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title">Verify Phone Number</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <p>
              Thank you for taking a moment to verify your phone number.{" "}
              <a href="#learn-more">Learn more</a>
            </p>
            <form>
              {/* Country Selection */}
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Enter Country
                </label>
                <select
                  className="form-select"
                  id="country"
                  onChange={(e)=>{getphoneCode(e.target.value)}}
                >
                    {countries?.map((country)=>(
                      <option value={country.phoneCode}>{country.name}</option>  
                    ))}
                  {/* <option value="Morocco">Morocco</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option> */}
                  {/* Add more countries as needed */}
                </select>
              </div>

              {/* Phone Number Input */}
              <div className="mb-3" >
                <label htmlFor="phone" className="form-label">
                  Enter your Phone Number
                </label>
                <div className="input-group">
                  <span className="input-group-text">{phoneCode}</span>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </form>
            <small className="text-muted d-block">
              Your phone number will remain private and will not be shared or
              used for marketing purposes.{" "}
              <a href="#privacy-policy">Privacy Policy</a>
            </small>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn bg-success p-2 px-4"
            >
              Verify
            </button>
            {/* <button
              type="button"
              className="btn btn-secondary"
              disabled
            >
              Verify by Call
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneVerificationModal;
