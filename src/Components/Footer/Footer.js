import React, { useState } from "react";
import { Link } from "react-router-dom";
import footer_logo from "../../assets/image/footer_logo.png";
import "./footer.css";
import CustomPopup from "../common/CustomPopup/CustomPopup";
import bgimg from '../../assets/image/bglayers.png'
import gimage from '../../assets/image/gimage.png'

const Footer = () => {
  console.log(bgimg , "bgimg");
   const [popupShow, setPopupShow] = useState(false);
  return (
    <>
    <span   onClick={() => setPopupShow(true)}>
                     REQUEST A CALLBACK
                    </span>{" "}
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
                      <Link to="about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="our-values">Our Values</Link>
                    </li>
                    <li>
                      <Link to="terms">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="privacy-policy">Privacy Policy</Link>
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
                      <Link to="why-choose-us">Why Choose Us</Link>
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
                        Plot No.134/2/3, Bellandur, Near Embassy Tech Village,
                        Bangalore, Karnataka, 560035  
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
              <p>© Copyright 2024. BluelineMD</p>
            </div>
          </div>
        </div>
      </div>

 <CustomPopup
        show={popupShow}
        close={setPopupShow}
        closeIcon={true}
        id="callBack"
        title=""
        bg={false}
        className="callBack"
        width="xl"
      >

<div className="popup_content" 
 
 style={{backgroundImage: `url(${bgimg})`,    borderRadius: "20px" }}
 > 
<div className="popup_header">
<div className="row align-items-center">
  <div className="col-sm-8">
    <div className="header_content">
      <h4>Can't find what you're looking for?</h4>
      <p>Let us know what you need - we're happy to help!</p>
      <button className="" onClick={()=>setPopupShow(false)}>REQUEST A CALLBACK</button>
    </div>
   
   

  </div>
  <div className="col-sm-4 right_img">
    <img src={gimage} />
  </div>
</div>

</div>

</div>
 <div className="popup_inner">
      <h3>You might be interested in:</h3>
      <ul>
        <li>
           <h5>BIGIN</h5>  
           <p>Pipeline-centric small business CRM</p>       
        </li>
         <li>
           <h5>BIGIN</h5>  
           <p>Pipeline-centric small business CRM</p>       
        </li>
      </ul>
    </div>



        
      </CustomPopup>

                    
    </>
  );
};

export default Footer;
