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
                        <b>Streamline Your Practice: </b> Reduce administrative
                        burdens and focus on what matters most - patient care.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        <b>Simplify Workflows:</b> Efficient processes mean more
                        time for patient interactions.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        <b>Empower with Insights:</b> Data-driven decisions lead
                        to improved outcomes and financial health.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        <b> Enhance Patient Care:</b> Deliver exceptional care
                        with intuitive tools and support.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        <b>Achieve Financial Success:</b> Optimize operations
                        for maximum revenue and profitability.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="mission-button">
                  <a href="#" className="btn_secondary  ">
                    Find out more
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-lg-6 p-0">
              <div className="mission-box two">
                <div className="mission-content">
                  <h4>Our Vision</h4>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        <b> Empower Healthcare Providers:</b> We are committed
                        to equipping healthcare professionals with the tools and
                        technology they need to deliver exceptional patient
                        care, simplify complex tasks, and achieve optimal
                        practice performance.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        <b>Optimize Practice Efficiency:</b> Our goal is to
                        streamline administrative processes, automate routine
                        tasks, and enhance workflow to maximize productivity and
                        minimize operational burdens.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        <b> Drive Industry Innovation:</b> We are dedicated to
                        pioneering advancements in behavioral health technology,
                        developing innovative solutions that address the
                        evolving needs of providers and patients.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        <b> Transform Care Delivery:</b> We strive to redefine
                        the standard of care by providing a platform that
                        fosters better patient outcomes, improves access to
                        services, and strengthens the provider-patient
                        relationship.
                      </p>
                    </div>
                  </div>
                  <div className="single-icon-box">
                    <div className="single-icon-thumb">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="sigle-icon-desc">
                      <p>
                        <b> Partner for Success:</b> We believe in building
                        strong partnerships with healthcare providers to achieve
                        their practice goals, offering comprehensive support,
                        resources, and expertise every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="mission-button">
                  <a href="#" className="btn_secondary  ">
                    Find out more
                  </a>
                </div> */}
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
