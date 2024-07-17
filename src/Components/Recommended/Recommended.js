import React from "react";
import { Row, Container } from "react-bootstrap";
import "./recommended.css";
import Blog1 from "../../assets/image/Blog1.png";
import shape from "../../assets/image/shape/team-shape.png";
const Recommended = () => {
  return (
    <>
      <section className="default_padding recommended">
        <Container className="">
          <div class="section_heading">
            <h2>FOR THE RECOMMENDED FOR YOU SECTION</h2>
            <h4>
              {/* Industry Insights: The Current Landscape of Medical Billing BlueMD
              recently conducted our second nationwide survey of medical billing
              company owners, leaders, and team members to better understand
              overall sentiment about the current state of the industry,
              perceived key business drivers, significant challenges, as well as
              the characteristics of a best-in-class billing company. */}
            </h4>
          </div>
          <Row>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-box">
                <div className="team-thumb">
                  <img src={Blog1} alt="" />
                </div>
                <div className="team-content">
                  <h4>
                    Industry Insights: The Current Landscape of Medical Billing
                  </h4>
                  <p>
                    Industry Insights: The Current Landscape of Medical Billing
                    BlueMD recently conducted our second nationwide survey of
                    medical billing company owners, leaders, and team members to
                    better understand overall sentiment about the current state
                    of the industry, perceived key business drivers, significant
                    challenges, as well as the characteristics of a
                    best-in-class billing company.
                  </p>
                  <button className="btn btn-pink">Read More</button>
                  <div className="team-shape">
                    <img src={shape} alt="" />
                  </div>
                </div>
                <div className="team-socila-icon-box">
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-box">
                <div className="team-thumb">
                  <img src={Blog1} alt="" />
                </div>
                <div className="team-content">
                  <h4>
                    Expert Panel: Navigating the Future of Healthcare Technology
                  </h4>
                  <p>
                    We hosted our annual roundtable discussion with healthcare
                    IT specialists, hospital administrators, and software
                    developers to explore emerging trends in medical technology,
                    assess the impact of AI on patient care, identify key
                    challenges in implementation, and define characteristics of
                    cutting-edge healthcare facilities.
                  </p>
                  <button className="btn btn-pink">Read More</button>
                  <div className="team-shape">
                    <img src={shape} alt="" />
                  </div>
                </div>
                <div className="team-socila-icon-box">
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-box">
                <div className="team-thumb">
                  <img src={Blog1} alt="" />
                </div>
                <div className="team-content">
                  <h4>
                    Industry Analysis: Trends in Medical Billing Practices
                  </h4>
                  <p>
                    BlueMD recently completed our second nationwide study of
                    medical billing professionals, including company owners,
                    executives, and staff members. Our aim was to gauge industry
                    sentiment, identify key growth factors, pinpoint major
                    challenges, and determine the hallmarks of top-performing
                    billing organisations in today's healthcare landscape.
                  </p>
                  <button className="btn btn-pink">Read More</button>
                  <div className="team-shape">
                    <img src={shape} alt="" />
                  </div>
                </div>
                <div className="team-socila-icon-box">
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa- fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Recommended;
