import React from "react";
import img1 from "../../assets/image/about1.jpg";
import img2 from "../../assets/image/about2.jpg";
import "./aboutSec.css";
const AboutSec = () => {
  return (
    <>
      <div className="about-area inc-shape default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="thumb wow animate__animated animate__fadeIn">
                <img src={img1} alt="Thumb" />
                <img src={img2} alt="Thumb" />
                <div className="overlay">
                  <div className="content">
                    <h4>02+ Years Of Expertise</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 info">
              <h2 className="wow animate__animated animate__fadeInRight">
                How We Started: Discover the Simplicity That Led to the Creation
                of OneEHR
              </h2>
              <p className="wow animate__animated animate__fadeInRight">
                Back in 2022, OneEHR was brought to life with a clear purpose:
                to provide reliable and specialized software solutions, focusing
                keenly on the numerous needs within the healthcare sector.
                Recognizing the critical role of effective management in
                healthcare, we saw the need to streamline and enhance the
                handling of Electronic Health Records (EHR). This wasn't just
                about digital transformation; it was about making a significant
                impact on healthcare providers' ability to access, utilize, and
                secure critical patient data efficiently.
              </p>
              <ul>
                <li className="wow animate__animated animate__fadeInUp">
                  <div className="icon">
                    <i className="flaticon-certification"></i>
                  </div>
                  <div className="info">
                    <h4>Our Value</h4>
                    <p>
                      At OneEHR, our core values are adaptability, innovation,
                      and client-centricity. We work hand-in-hand with you to
                      develop IT solutions that are not only reliable but also
                      customized to meet the intricate needs of your healthcare
                      practice. Our tailored approach ensures we understand and
                      tackle your unique challenges head-on, making your goals
                      easier to achieve.
                    </p>
                  </div>
                </li>
                <li className="mt-4 wow animate__animated animate__fadeInUp">
                  <div className="icon">
                    {/* <i className="flaticon-support"></i> */}
                    <i className="flaticon-award-star-with-olive-branches"></i>
                  </div>
                  <div className="info">
                    <h4>Our Goal</h4>
                    <p>
                      Our primary aim is to fuel your success with innovative IT
                      solutions, cementing our place as a quality- driven leader
                      not just in mobile app and website development, but in
                      creating EHR systems that make a difference. Commitment to
                      your needs drives us to deliver unwavering support and
                      solutions that not only meet but exceed expectations.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
