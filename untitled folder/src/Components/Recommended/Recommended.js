import React from "react";
import { Row, Container } from "react-bootstrap";
import "./recommended.css";

import shape from "../../assets/image/shape/team-shape.png";
const Recommended = ({ data }) => {
  console.log(data, "rec vvv");
  return (
    <>
      <section className="default_padding recommended">
        <Container className="">
          <div class="section_heading">
            <h2>{data?.heading}</h2>
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
            {data?.items.map((item, index) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-team-box">
                      <div className="team-thumb">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="team-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
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
                </>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Recommended;
