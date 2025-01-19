import React from "react";

const ServiceCard = ({ title, price, imageUrl, status, provider }) => {
  return (
    <div className="card shadow-none border-0  p-0" style={{ width: "18rem",backgroundColor:'#f6f6f6' }}>
      <img
        src={imageUrl || "https://via.placeholder.com/300x200"}
        className="card-img"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body py-2 px-0">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
          <img
            src={"/assets/profileAvatar.png"}
            alt="User Profile"
            className="img-fluid rounded-circle mb-2  "
            style={{ width: "20px", height: "20px", objectFit: "cover" }}
          /> <h6 className="mx-2">{provider.user_name}</h6>
          </div>
          <div className="text-warning">★★★★★</div>
        </div>
        {/* <h5 className="card-title fw-bold">{title}</h5> */}
        <p className="card-text text-truncate mb-1">{title}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-success fw-bold">${price}</span>
          <span
            className={`badge ${status === "active" ? "bg-success" : "bg-secondary"
              }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
