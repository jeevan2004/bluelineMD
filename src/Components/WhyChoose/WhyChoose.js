import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import benefits_icon from "../../assets/image/icon/benefits_icon.png";
import "./whyChoose.css";
const WhyChoose = ({ bg }) => {
  return (
    <>
      <section
        className="why_choose_us default_padding"
        style={{ background: bg }}
      >
        <Container>
          <div class="section_heading">
            <h2>Finally, software that doesn't get in the way</h2>
            <h4>
              Kareo delivers a complete technology platform purpose-built to
              meet the needs of independent practices. Now, physicians can
              effortlessly manage all major functions of their practice through
              one intuitive platform.
            </h4>
          </div>
          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <div class="why_choose">
                <div class="why_choose_icon">
                  <img src={benefits_icon} />
                </div>
                <div class="why_choose_body">
                  <div class="why_choose_title">Increase Staff Efficiency</div>
                  <div class="contant">
                    Video visits are more efficient than in-person appointments.
                    Spend less time on administrative tasks and more time with
                    your patients.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div class="why_choose">
                <div class="why_choose_icon">
                  <img src={benefits_icon} />
                </div>
                <div class="why_choose_body">
                  <div class="why_choose_title">Increase Staff Efficiency</div>
                  <div class="contant">
                    Video visits are more efficient than in-person appointments.
                    Spend less time on administrative tasks and more time with
                    your patients.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div class="why_choose">
                <div class="why_choose_icon">
                  <img src={benefits_icon} />
                </div>
                <div class="why_choose_body">
                  <div class="why_choose_title">Increase Staff Efficiency</div>
                  <div class="contant">
                    Video visits are more efficient than in-person appointments.
                    Spend less time on administrative tasks and more time with
                    your patients.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div class="why_choose">
                <div class="why_choose_icon">
                  <img src={benefits_icon} />
                </div>
                <div class="why_choose_body">
                  <div class="why_choose_title">Increase Staff Efficiency</div>
                  <div class="contant">
                    Video visits are more efficient than in-person appointments.
                    Spend less time on administrative tasks and more time with
                    your patients.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div class="why_choose">
                <div class="why_choose_icon">
                  <img src={benefits_icon} />
                </div>
                <div class="why_choose_body">
                  <div class="why_choose_title">Increase Staff Efficiency</div>
                  <div class="contant">
                    Video visits are more efficient than in-person appointments.
                    Spend less time on administrative tasks and more time with
                    your patients.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div class="why_choose">
                <div class="why_choose_icon">
                  <img src={benefits_icon} />
                </div>
                <div class="why_choose_body">
                  <div class="why_choose_title">Increase Staff Efficiency</div>
                  <div class="contant">
                    Video visits are more efficient than in-person appointments.
                    Spend less time on administrative tasks and more time with
                    your patients.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div class="why_choose">
                <div class="why_choose_icon">
                  <img src={benefits_icon} />
                </div>
                <div class="why_choose_body">
                  <div class="why_choose_title">Increase Staff Efficiency</div>
                  <div class="contant">
                    Video visits are more efficient than in-person appointments.
                    Spend less time on administrative tasks and more time with
                    your patients.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhyChoose;
