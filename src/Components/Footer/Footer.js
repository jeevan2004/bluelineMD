import React from "react";
import { Link } from "react-router-dom";
import footer_logo from "../../assets/image/footer_logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="main_footer default_padding">
        <div className="container">
          <div className="default-padding">
            <div className="row gy-5">
              <div className="col-md-6 col-lg-4">
                <div className="footer_about wow animate__animated animate__fadeInLeft">
                  <img src={footer_logo} alt="" />
                  <p>
                    BluelineMD is your all-in-one healthcare platform for
                    seamless practice connectivity.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer_link wow animate__animated animate__fadeInUp">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <Link to="about">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Our Values</Link>
                    </li>
                    <li>
                      <Link to="terms">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="privacyPolicy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer_link wow animate__animated animate__fadeInUp">
                  <h4>Solutions</h4>
                  <ul>
                    <li>
                      <Link to="contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">Why Choose Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="footer_address wow animate__animated animate__fadeInUp">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>
                      <i></i>
                      <p>
                        Nikhar Aventino , no.138 /2 doddakannelli, bellandure
                        road behind ecoworld teck park near aet junction
                        doddakannelli,bangalore, Karnataka, 560035
                      </p>
                    </li>
                    <li>
                      <i></i>
                      <p>info@bluelinemd.com</p>
                    </li>
                    {/* <li>
                      <i></i>
                      <p>+91 7899916434</p>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow animate__animated animate__fadeInLeft text-center">
              <p>© Copyright 2024. BlueLineMD</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
