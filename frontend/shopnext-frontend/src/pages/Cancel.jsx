import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="container text-center mt-5">
      <h1>❌ Payment Cancelled</h1>
      <p>Your payment was cancelled.</p>

      <Link to="/checkout" className="btn btn-warning">
        Try Again
      </Link>
    </div>
  );
};

export default Cancel;