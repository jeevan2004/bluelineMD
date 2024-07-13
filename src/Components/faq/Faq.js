import React from "react";
import { Accordion } from "react-bootstrap";
import laptop from "../../assets/image/laptop.png";
import "./faq.css";

const Faq = () => {
  const questions = [
    {
      title: "Do I need to be tech-savvy to work with you and order software?",
      content:
        "You don't need to be an expert in software development - that's why we're here to help! While any experience you have in this area is welcome, we are fully prepared to guide you through the process, address all your inquiries, and handle everything you need. Just focus on your requirements, and we'll handle the rest.",
    },
    {
      title: "What should I know before getting in touch with you?",
      content:
        "Well, knowing your goals is the most crucial thing to have. I need this software, but why? For what purpose? What ought it to accomplish? When placing an order for software, it is essential to have a clear goal in mind. Without knowing what you need, you don't want to work with us for several months on its development. Please feel free to contact us if you have no prior experience with it. As we have experience creating projects from scratch, we will also be happy to assist you in getting started.",
    },
    {
      title: "How long will it take you to create my application?",
      content:
        "We need to draft a project scope and a budget before we can respond to you specifically. After some effort, we'll be able to estimate how long it will take and inform you how much of that scope can be done within the budget. We think that every reputable software business should provide you with a budget and duration of the project beforehand. To find out more about our procedures, contact us.",
    },
  ];
  return (
    <>
      <div className="faq-area  bg-gray default_padding">
        <div className="faq-heading">
          <h3>BluelineMd frequently ask questions</h3>
          <p>
            Configurable, Connected, Compassionate Kareo Clinical is built with
            three clear goals. It's configurable to your practice, it connects
            seamlessly with billing and it is easy to use.
          </p>
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
                    {questions.map((question, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{question.title}</Accordion.Header>
                        <Accordion.Body>{question.content}</Accordion.Body>
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
