import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { TiPen } from "react-icons/ti";

const UserProfileDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        date_of_birth: "",
        bio: "",
        avatar: null,
    });

    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (!user && token) {
            dispatch({ type: "LOADING" });
            axiosClient
                .get("/user")
                .then((res) => {
                    dispatch({ type: "GET_USER", payload: res.data });
                })
                .catch((err) => console.error(err));
        } else if (user?.profile) {
            setFormData({
                ...formData,
                ...user.profile,avatar:null
            });
            // setFormData({
            //     ...formData,
            //     avatar:null,
            // });
            console.log(formData)
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, avatar: file }));
            setPreview(URL.createObjectURL(file));
        }
    };

    const saveInf = useCallback(
        (e) => {
            e.preventDefault();
            const profileData = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null && value !== undefined) {
                    profileData.append(key, value);
                }
            });
            profileData.append('user_id', user.id)
            const endpoint = user?.profile?.id
                ? `/profile/${user.profile.id}`
                : `/profile`;
            const method = user?.profile?.id ? "PUT" : "POST";

            if (method === "PUT") profileData.append("_method", "PUT");
            console.log(endpoint)
            axiosClient
                .post(endpoint, profileData)
                .then((res) => {
                    dispatch({ type: "GET_USER", payload: res.data.user });
                    dispatch({ type: "NOTIFICATION", payload: res.data.message });
                    setTimeout(() => dispatch({ type: "STOP_NOTIFICATION" }), 5000);
                    navigate("/Professional_Info");
                })
                .catch((err) => {
                    if (err.response?.status === 422) {
                        const errs = err.response.data.errors
                        console.log(err.response.data.errors);
                        if (typeof err.response.data.errors === 'object') {
                            alert(Object.keys(errs).map((msg) => {
                                return errs[msg] + '\n'

                            }))
                        }
                    }
                });
        },
        [formData, user, dispatch, navigate]
    );

    return (
        <>
            {user && (
                <form onSubmit={saveInf} className="profile-form">
                    <div className="card shadow-lg border-0">
                        <div className="row g-0 flex-wrap">
                            {/* Profile Image */}
                            <div className="col-lg-4 col-md-12 text-center p-4">
                                <div className="bordered border-bottom m-0 p-0">
                                    <div className="row align-items-center">
                                        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                                            <img
                                                src={
                                                    preview ||
                                                    (user?.profile?.avatar
                                                        ? `http://127.0.0.1:8000/storage/${user.profile.avatar}`
                                                        : "/assets/profileAvatar.png")
                                                }
                                                alt="User Profile"
                                                className="img-fluid rounded-circle mb-3"
                                                style={{
                                                    width: "100px",
                                                    height: "100px",
                                                    objectFit: "cover",
                                                    border: "1px solid #5b08a7",
                                                }}
                                            />
                                            <div style={{ width: "100px" }}>
                                                <label
                                                    htmlFor="profileImageInput"
                                                    style={{
                                                        cursor: "pointer",
                                                        color: "blue",
                                                        textDecoration: "underline",
                                                    }}
                                                >
                                                    {formData.avatar?.name || <>Profile <TiPen /></>}
                                                </label>
                                                <input
                                                    id="profileImageInput"
                                                    type="file"
                                                    accept="image/*"
                                                    style={{ display: "none" }}
                                                    onChange={handleImageChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <h1 className="fw-bold">{user.user_name}</h1>
                                            <p className="text-muted">{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* User Information */}
                            <div className="col-lg-8 col-md-12">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Profile Information</h5>
                                    <ul className="list-unstyled">
                                        {[
                                            "first_name",
                                            "last_name",
                                            "phone",
                                            "date_of_birth",
                                            "address",
                                            "city",
                                            "state",
                                            "postal_code",
                                            "country",
                                        ].map((field) => (
                                            <li key={field}>
                                                <strong>
                                                    {field.replace(/_/g, " ")}:{" "}
                                                    <span className="text-danger">
                                                        <sup>*</sup>
                                                    </span>{" "}
                                                </strong>
                                                <input
                                                    type={"text"}
                                                    name={field}
                                                    value={formData[field] || ""}
                                                    placeholder={`Your ${field.replace(/_/g, " ")}`}
                                                    onChange={handleInputChange}
                                                    className="form-control"
                                                    required
                                                />
                                            </li>

                                        ))}
                                        <li>
                                            <strong>Bio: <span className="text-danger"> <sup>*</sup> </span> </strong>
                                            <textarea
                                                value={formData.bio || ""}
                                                name="bio"
                                                placeholder="Your Bio"
                                                className="form-control"
                                                onChange={handleInputChange}
                                                rows="3"
                                                minLength={150}
                                                required
                                            ></textarea>
                                        </li>
                                    </ul>
                                    <div className="mt-4 d-flex flex-wrap gap-3">
                                        <button type="submit" className="btn btn-success px-5">
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};

export default UserProfileDashboard;
