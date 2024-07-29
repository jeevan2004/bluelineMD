import React from "react";
import img1 from "../../assets/image/about1.jpg";
import img2 from "../../assets/image/about2.jpg";
import aboutThumb from "../../assets/image/about-thumb.png";
import aboutAwardIcon from "../../assets/image/about-award-icon.png";
import aboutCounterIcon from "../../assets/image/about-counter-icon.png";
import aboutShape from "../../assets/image/about-shape.png";
import "./aboutSec.css";
const AboutSec = () => {
  return (
    <>
      <div className="about-area inner-style-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left">
                <div className="about-thumb">
                  <img src={aboutThumb} alt="" />
                </div>
                <div className="abour-award-box">
                  <div className="about-award-icon">
                    <img src={aboutAwardIcon} alt="" />
                  </div>
                  <div className="about-award-content">
                    <h4>BluelineMd </h4>
                    <p>EHR Solutions</p>
                  </div>
                </div>
                <div className="about-conuter-box">
                  <div className="about-counter-icon">
                    <img src={aboutCounterIcon} alt="" />
                  </div>
                  <div
                    className="about-counter-content odometer-wrapper"
                    data-count="283"
                  >
                    <h4>5</h4>
                    <span>+</span>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="about-shape">
                  <img src={aboutShape} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="abour-right">
                <div className="section-title left inner-style">
                  <h4>Your Practice, Perfected</h4>

                  <h1>Built for Behavioral Health Excellence</h1>
                  <p className="section-desc">
                    BluelineMD stands out as a behavioral health EHR solution
                    designed with your unique needs in mind. Our user-friendly
                    interface, comprehensive suite of integrated tools, and
                    specialty-focused features streamline your practice
                    management from scheduling to financial optimization. We're
                    committed to providing customizable solutions that evolve
                    with your practice, ensuring you have the tools to deliver
                    exceptional patient care while maximizing your revenue.
                  </p>
                </div>
                {/* <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="about-list-item">
                      <ul>
                        <li>
                          <i className="bi bi-check"></i>Company and Research
                        </li>
                        <li>
                          <i className="bi bi-check"></i>Business and research
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="about-text">
                      <div className="about-number">
                        <h4>45%</h4>
                      </div>
                      <div className="about-text-content">
                        <h4>Solution Business</h4>
                        <p>Level is high</p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="about-company">
                  <div className="about-company-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  <div className="about-company-desc">
                    <p>
                      Join the BluelineMD community and discover how our EHR
                      solution can elevate your health practice to new heights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
