import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container text-center mt-5">
      <h1>🎉 Payment Successful</h1>
      <p>Your payment has been completed successfully.</p>

      <Link to="/shop" className="btn btn-primary">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;