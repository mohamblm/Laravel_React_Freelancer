import React from "react";

const ServiceCard = ({ title, description, price, imageUrl, status }) => {
  return (
    <div className="card  border-0" style={{ width: "18rem"}}>
      <img
        src={imageUrl || "https://via.placeholder.com/300x200"}
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-truncate">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-success fw-bold">${price}</span>
          <span
            className={`badge ${
              status === "active" ? "bg-success" : "bg-secondary"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1) }
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
