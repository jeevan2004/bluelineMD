import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import benefits_icon from "../../assets/image/icon/benefits_icon.png";
import "./whyChoose.css";
const WhyChoose = ({ data, bg }) => {
  return (
    <>
      <section
        className="why_choose_us default_padding"
        style={{ background: bg }}
      >
        <Container>
          <div class="section_heading">
            <h2>{data.heading}</h2>
            <h4>{data.sub}</h4>
          </div>
          <Row className="mt-4">
            {data.getInItems.map((items) => {
              return (
                <>
                  <Col md={6} className="mb-4">
                    <div class="why_choose">
                      <div class="why_choose_icon">
                        <img src={items.img} />
                      </div>
                      <div class="why_choose_body">
                        <div class="why_choose_title">{items.title}</div>
                        <div class="contant">{items.content}</div>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhyChoose;
