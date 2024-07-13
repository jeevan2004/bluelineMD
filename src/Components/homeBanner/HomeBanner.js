import React from "react";
import "./homeBanner.css";
// import banner from "../../assets/image/banner.png";
import hero from "../../assets/image/hero.png";
const HomeBanner = () => {
  return (
    <>
      <div className="banner-area auto-height text-color bg-gray inc-shape">
        <div className="item">
          <div className="container">
            <div className="row align-center">
              <div className="col-lg-6">
                <div className="content">
                  <h4 className="wow animate__animated animate__fadeInUp">
                    The EHR for Behavioral Health Practices
                  </h4>
                  <h2 className="wow animate__animated animate__fadeInDown">
                    Healthier clients. Happier clinicians.
                    <strong>Higher revenue.</strong>
                  </h2>
                  <p className="wow animate__animated animate__fadeInLeft">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                  </p>
                  <a
                    className="btn_primary wow animate__animated animate__fadeInUp"
                    href="#"
                  >
                    <span class="highlight me-2">Get a Personalized Demo </span>{" "}
                    <i className="fas fa-arrow-alt-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 thumb">
                <img
                  src={hero}
                  alt="Thumb"
                  className="wow animate__animated animate__fadeInUp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
