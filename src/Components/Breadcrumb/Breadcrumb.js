import React from "react";
import pageBanner from "../../assets/image/pageBanner.png";
import "./breadcrumb.css";
const Breadcrumb = ({ name, pageName }) => {
  return (
    <>
      <div
        className="breadcrumb-area shadow dark bg-fixed text-light"
        style={{ backgroundImage: `url(${pageBanner})` }}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-6">
              <h2>{name}</h2>
            </div>
            <div className="col-lg-6 text-right">
              <ul className="breadcrumb">
                <li>
                  <a href="https://oneehr.in/" className="me-4">
                    <i className="fas fa-home"></i> Home
                  </a>{" "}
                  /
                </li>
                <li className="active">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
