import React from "react";
import "./chooseus.css";
import img1 from "../../assets/image/blog_1.png";

import choose_img from "../../assets/image/choose-us-thumb.png";

const ChooseUs = () => {
  return (
    <>
      <div className="choose-us-area inner-style default_padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title left style-two">
                <h4>Why choose BluelineMD</h4>
                <h1> We Elevate care, Optimize practice</h1>
                <p>
                  When it comes to managing your behavioral health practice, you
                  need a partner who understands your unique challenges and
                  provides solutions tailored to your needs. Here's why
                  BluelineMD stands out as the premier choice for
                  forward-thinking healthcare professionals:
                </p>
              </div>
              {/* <div className="single-choose-us-item">
                <ul>
                  <li>Achieve your goals and exceed expectations.</li>
                  <li>Building a website, mobile app or software.</li>
                  <li>Our platform is designed to help you.</li>
                  <li>Our platform places emphasis on user experience.</li>
                </ul>
              </div> */}
            </div>
            <div className="col-lg-6">
              <div className="choose-us-thumb">
                <img src={choose_img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row add-marging">
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="single-choose-us-box">
                <div className="choose-us-icon">
                  <img src={img1} alt="" />
                </div>
                <div className="choose-us-content">
                  <h4>Specialty-Focused Excellence</h4>
                  <p>
                    Unlike generic EHR systems, BluelineMD is designed
                    specifically for behavioral health practices. Our platform
                    offers:
                  </p>
                  <ul>
                    <li>Customizable templates tailored to your field</li>
                    <li> Regular updates aligned with specialty needs</li>
                    <li>
                      Features that streamline behavioral health workflows
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="single-choose-us-box">
                <div className="choose-us-icon">
                  <img src={img1} alt="" />
                </div>
                <div className="choose-us-content">
                  <h4>Comprehensive, All-in-One Solution</h4>
                  <p>
                    With BluelineMD, you get a full suite of integrated tools:
                  </p>
                  <ul>
                    <li> Intuitive EHR system</li>
                    <li>Secure telehealth platform</li>
                    <li>Advanced billing automation</li>
                    <li>Efficient practice management software</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="single-choose-us-box">
                <div className="choose-us-icon">
                  <img src={img1} alt="" />
                </div>
                <div className="choose-us-content">
                  <h4>Optimized Financial Performance</h4>
                  <p>
                    We understand the importance of a healthy bottom line.
                    BluelineMD helps you:
                  </p>
                  <ul>
                    <li> Maximize insurance reimbursements</li>
                    <li> Streamline patient collections</li>
                    <li>
                      Reduce claim rejections with our 95%+ clean claims rate
                      goal
                    </li>
                    <li>
                      Gain real-time insights into your practice's financial
                      health
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="single-choose-us-box">
                <div className="choose-us-icon">
                  <img src={img1} alt="" />
                </div>
                <div className="choose-us-content">
                  <h4> User-Friendly Interface</h4>
                  <p>Our platform is designed with simplicity in mind:</p>
                  <ul>
                    <li> Intuitive navigation reduces the learning curve</li>
                    <li>
                      {" "}
                      Efficient workflows free up more time for patient care
                    </li>
                    <li>Mobile access keeps you connected on the go</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="single-choose-us-box">
                <div className="choose-us-icon">
                  <img src={img1} alt="" />
                </div>
                <div className="choose-us-content">
                  <h4> User-Friendly Interface</h4>
                  <p>Our platform is designed with simplicity in mind:</p>
                  <ul>
                    <li> Intuitive navigation reduces the learning curve</li>
                    <li>
                      {" "}
                      Efficient workflows free up more time for patient care
                    </li>
                    <li>Mobile access keeps you connected on the go</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="single-choose-us-box">
                <div className="choose-us-icon">
                  <img src={img1} alt="" />
                </div>
                <div className="choose-us-content">
                  <h4> User-Friendly Interface</h4>
                  <p>Our platform is designed with simplicity in mind:</p>
                  <ul>
                    <li> Intuitive navigation reduces the learning curve</li>
                    <li>
                      {" "}
                      Efficient workflows free up more time for patient care
                    </li>
                    <li>Mobile access keeps you connected on the go</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="single-choose-us-box">
                <div className="choose-us-icon">
                  <img src={img1} alt="" />
                </div>
                <div className="choose-us-content">
                  <h4> User-Friendly Interface</h4>
                  <p>Our platform is designed with simplicity in mind:</p>
                  <ul>
                    <li> Intuitive navigation reduces the learning curve</li>
                    <li>
                      {" "}
                      Efficient workflows free up more time for patient care
                    </li>
                    <li>Mobile access keeps you connected on the go</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="single-choose-us-box">
                <div className="choose-us-icon">
                  <img src={img1} alt="" />
                </div>
                <div className="choose-us-content">
                  <h4> User-Friendly Interface</h4>
                  <p>Our platform is designed with simplicity in mind:</p>
                  <ul>
                    <li> Intuitive navigation reduces the learning curve</li>
                    <li>
                      {" "}
                      Efficient workflows free up more time for patient care
                    </li>
                    <li>Mobile access keeps you connected on the go</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
