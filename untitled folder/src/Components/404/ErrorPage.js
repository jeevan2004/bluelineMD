import React from "react";

const ErrorPage = () => {
  return (
    <div className="error_page" style={{ padding: "40px 0" }}>
      <div className="text-center">
        <h1 style={{ fontSize: "100px", color: " var(--primary-color)" }}>
          404
        </h1>
        <p style={{ fontSize: "40px" }}>Page Not Found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
