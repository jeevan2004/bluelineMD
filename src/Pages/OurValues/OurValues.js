import React from "react";
import "./ourValues.css";
import mission1 from "../../assets/image/mission-1.png";
import mission2 from "../../assets/image/mission_2.png";
const OurValues = () => {
  return (
    <>
      <div className="mission_area default_padding">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-6 p-0">
              <div className="mission-thumb">
                <img className="w-100" src={mission1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="mission-box">
                <div className="mission-content">
                  <h4>Our Mission</h4>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        We Continuously innovate and push the boundaries of
                        technology to create unique and impactful software
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        We Continuously innovate and push the boundaries of
                        technology to create unique and impactful software
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        We Continuously innovate and push the boundaries of
                        technology to create unique and impactful software
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        Prioritize understanding and meeting the needs of our
                        customers, ensuring their success and satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        Empower businesses and individuals by providing
                        intuitive, reliable, and scalable software solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mission-button">
                  <a href="#" className="btn_secondary  ">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-lg-6 p-0">
              <div className="mission-box two">
                <div className="mission-content">
                  <h4>Our Vission</h4>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        We Continuously innovate and push the boundaries of
                        technology to create unique and impactful software
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        We Continuously innovate and push the boundaries of
                        technology to create unique and impactful software
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        We Continuously innovate and push the boundaries of
                        technology to create unique and impactful software
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        Prioritize understanding and meeting the needs of our
                        customers, ensuring their success and satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        Empower businesses and individuals by providing
                        intuitive, reliable, and scalable software solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mission-button">
                  <a href="#" className="btn_secondary  ">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="mission-thumb two">
                <img className="w-100" src={mission2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
