import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon_chart from "../../assets/image/icon/icon_chart.png";
import telehealth from "../../assets/image/icon/telehealth.png";
import rcmChar from "../../assets/image/icon/rcmChar.png";
import phrPortal from "../../assets/image/icon/phrPortal.png";
import ehrBilling from "../../assets/image/icon/ehrBilling.png";
import iconEhrDevices from "../../assets/image/icon/iconEhrDevices.png";

import "./yourNeeds.css";
const YourNeeds = ({ isBtn, data, heading, subHeading }) => {
  console.log(isBtn, "isBtnisBtnisBtn");
  return (
    <>
      <section className="your_need default_padding">
        <Container>
          <div class="section_heading">
            <h2>{heading}</h2>
            <h4>{subHeading}</h4>
          </div>
          <Row>
            {data.map((item) => {
              return (
                <>
                  <Col md={4}>
                    <div class="text-center needBox">
                      <a href="#">
                        <img
                          class="img-responsive text-center center-block"
                          src={item?.img}
                          alt="EHR Chart Icon"
                        />
                      </a>

                      <h3 className="mt-3">
                        <a class="" href="#">
                          {item?.title}
                        </a>
                      </h3>
                      <p>{item?.description}</p>
                      {isBtn ? (
                        <a className="link_btn" href={item?.btn_link}>
                          {item?.btnName}
                        </a>
                      ) : (
                        ""
                      )}
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

export default YourNeeds;
