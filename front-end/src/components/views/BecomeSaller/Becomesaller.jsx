import React from 'react';
import { Link } from 'react-router-dom';

const BecomeSellerBanner = () => {
    const freelancers = [
        { id: 1, role: "Designer", img: "1.jpeg" },
        { id: 2, role: "Developer", img: "2.jpeg" },
        { id: 3, role: "Writer", img: "3.jpeg" },
        { id: 4, role: "Video Editor", img: "4.jpeg" },
        { id: 5, role: "Musician", img: "6.jpeg" },
        { id: 6, role: "Voiceover Artist", img: "7.jpeg" },
        { id: 7, role: "Social Media Marketer", img: "8.jpeg" },
    ];
    const steps = [
        {
          id: 1,
          title: "Create a Gig",
          description:
            "Sign up for free, set up your Gig, and offer your work to our global audience.",
          icon: "📄", // Replace with a proper SVG or icon library if needed
        },
        {
          id: 2,
          title: "Deliver great work",
          description:
            "Get notified when you get an order and use our system to discuss details with customers.",
          icon: "✉️",
        },
        {
          id: 3,
          title: "Get paid",
          description:
            "Get paid on time, every time. Payment is available for withdrawal as soon as it clears.",
          icon: "✅",
        },
      ];
    return (<>
        <div className="container-fluid p-0 position-relative">
            {/* Background Video */}
            <video
                className="w-100 h-100 position-absolute top-0 start-0"
                src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
                autoPlay
                loop
                muted
                playsInline
                style={{
                    objectFit: 'cover',
                }}
            ></video>

            {/* Dark Overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

            {/* Content */}
            <div className="text-center text-white position-relative d-flex flex-column justify-content-center align-items-center vh-100">
                <h1 className="display-4 fw-bold">Work Your Way</h1>
                <p className="lead">
                    You bring the skill. We'll make earning easy.
                </p>
                <Link className="btn btn-success btn-lg mt-3" to={'/Personnel_inf'}>Become a Seller</Link>
            </div>
        </div>
        <div className="container text-center my-5">
            <h2 className="mb-5">Join our growing freelance community</h2>
            <div className="row g-4">
                {freelancers.map((freelancer) => (
                    <div key={freelancer.id} className="col-md-3 col-sm-6">
                        <div
                            className="position-relative rounded overflow-hidden"
                            style={{ height: "300px", cursor: "pointer" }}
                        >
                            <img
                                src={`/assets/${freelancer.img}`}
                                alt={freelancer.role}
                                className="w-100 h-100"
                                style={{
                                    objectFit: "cover",
                                    filter: "brightness(60%)",
                                }}
                            />
                            <div className="position-absolute bottom-0 start-0 p-3 text-white text-start" >
                                <h5 className="mb-0">I am a</h5>
                                <h5 className="fw-bold">{freelancer.role}</h5>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add 'What's Your Skill?' Section */}
                <div className="col-md-3 col-sm-6 d-flex flex-column align-items-center justify-content-center">
                    <div
                        className="d-flex flex-column align-items-center justify-content-center border rounded p-5 shadow-sm"
                        style={{ height: "300px", backgroundColor: "#f9f9f9" }}
                    >
                        <span role="img" aria-label="heart" className="fs-1 w-100">
                            ❤️
                        </span>
                        <h5 className="mt-2 mb-3">What's Your Skill?</h5>
                        <button className="btn btn-success btn-sm">Become a Seller</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="full-container text-center my-5 py-4 " style={{  backgroundColor: "#fffffe" }}>
            <h2 className="mb-4">How it works</h2>
            <div className="row">
                {steps.map((step) => (
                    <div key={step.id} className="col-md-4">
                        <div className="mb-3">
                            <span
                                style={{
                                    fontSize: "3rem",
                                    display: "inline-block",
                                    marginBottom: "1rem",
                                }}
                            >
                                {step.icon}
                            </span>
                        </div>
                        <h4 className="fw-bold">{step.id}. {step.title}</h4>
                        <p className="text-muted">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};

export default BecomeSellerBanner;
