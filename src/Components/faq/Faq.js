import React from "react";
import { Accordion } from "react-bootstrap";
import laptop from "../../assets/image/laptop.png";
import "./faq.css";

const Faq = ({ data }) => {
  console.log(data.faqItems, "aaaa");

  return (
    <>
      <div className="faq-area  bg-gray default_padding">
        <div className="faq-heading">
          <h3>{data.heading}</h3>
          <p>{data.subHeading}</p>
        </div>
        <div className="container ">
          <div className="faq-items default-padding">
            <div className="row">
              <div className="col-lg-5 info">
                <img src={laptop} />
              </div>

              <div className="col-lg-7">
                <div className="faq-content mt-0 wow animate__animated animate__fadeInUp">
                  <Accordion defaultActiveKey="0">
                    {data?.faqItems.map((items, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{items.question}</Accordion.Header>
                        <Accordion.Body>{items.annswer}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
