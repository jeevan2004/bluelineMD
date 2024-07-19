import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./blog.css";
const Blog = () => {
  return (
    <>
      <div className="blog-area">
        <Breadcrumb name={"Blog"} pageName={"blog"} />
        <Container className="blog-item-box mt-5">
          <Row>
            <Col
              className="single-item mb-4 wow animate__animated animate__fadeInUp"
              md={6}
              lg={4}
            >
              <div className="item wow fadeInUp">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://oneehr.in/wp-content/uploads/2024/06/Why-are-EHR-software-development-services-important-for-the-healthcare-industry-1-730x382.jpeg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="info">
                  <div className="meta">
                    <ul>
                      <li>
                        <i className="fas fa-calendar-alt"></i> June 5 2024
                      </li>
                      <li>
                        <i className="fas fa-user"></i>
                        <a href="#">OneEHR</a>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="https://oneehr.in/why-are-ehr-software-development-services-important-for-the-healthcare-industry/">
                      Why are EHR software development services important for
                      the healthcare industry
                    </a>
                  </h4>
                  <p>
                    Introduction to EHR software development services In today’s
                    fast-paced healthcare landscape, the need for efficient and
                    reliable electronic health record (EHR) software development
                    services has never been more critical. As medical practices
                    and hospitals strive to enhance patient care, streamline
                    operations, and improve overall efficiency, investing in
                    top-notch EHR solutions is becoming a game-changer. Let’s
                    […]
                  </p>
                  <a className="btn circle btn-theme btn-md" href="">
                    Read More
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blog;
