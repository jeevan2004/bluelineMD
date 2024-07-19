import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

import WorksAbout from "../worksAbout/WorksAbout";
import "./service.css";
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
const Service = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://contact-us-1.onrender.com/api/needhelps",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    console.log(data, "data");

    const handleSubmit = async (e) => {
      e.preventDefault();

      const response = await fetch(
        "https://contact-us-1.onrender.com/api/needhelps",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Vishu",
            email: "john@example.com",
            phone: "1234567890",
            service: "Web Development",
            message: "I need help with my website.",
          }),
        }
      );

      const data = await response.json();
      console.log(data);
    };
  };
  return (
    <>
      <Breadcrumb />
      <div className="Service_banner_area">
        <div className="carousel-inner carousel-zoom">
          <div className="carousel-item active">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="content">
                    <h2 className="wow fadeInDown">
                      Drupal <strong> Development</strong>
                    </h2>
                    <p className="wow fadeInLeft">
                      We provide high-quality Drupal development service for
                      businesses of all sizes. Whether you need a custom module
                      developed or want someone to manage your site for you, we
                      can help. We have a team of experienced developers who are
                      familiar with all aspects of the Drupal platform. Contact
                      us today to get started.
                    </p>
                    <div className="bottom d-flex align-items-center">
                      <a
                        className="btn btn-theme effect btn-md wow fadeInUp"
                        href="#"
                      >
                        Contact Us
                      </a>
                      <div className="call-us wow fadeInLeft">
                        <div className="icon">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="info">
                          <h5>+91 7899916434</h5>
                          <span>Call for any question</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 thumb">
                  <img
                    decoding="async"
                    className="wow fadeInUp"
                    src="https://oneehr.in/wp-content/uploads/2023/11/druple.png"
                    alt="Thumb"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="service_inner mb-4">
        <Container>
          <Row>
            <Col md="6">
              <div className="left_content">
                <h4>How can React Js help your business?</h4>
                <p>
                  React JS can help businesses in various ways. React JS is an
                  excellent choice for building single-page applications (SPAs),
                  which are web applications that load a single HTML page and
                  dynamically update the page as the user interacts with it.
                  Many companies use It to build their SaaS businesses,
                  including dashboards, data visualisation views, complex forms,
                  and more. React JS is also great for building e-commerce
                  websites, enabling businesses to build fast, reliable, and
                  easy-to-use online stores that users will love. It is
                  increasingly being used in enterprise-grade applications by
                  world-renowned businesses such as Salesforce and Dropbox. Its
                  advantages, such as the creation of reusable components and
                  its vast community and ecosystem, make it a favoured option
                  for web development
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="right_content">
                <h4>
                  We excel as a top-tier React JS Mobile App Development team
                  due to:
                </h4>

                <ul>
                  <li className="mb-3">
                    <span className="d-inline-block me-3">
                      {" "}
                      <i className="fa fa-star "></i>
                    </span>
                    Demonstrated success in crafting superior React JS mobile
                    applications.
                  </li>
                  <li className="mb-3">
                    <span className="d-inline-block me-3">
                      {" "}
                      <i className="fa fa-star "></i>
                    </span>
                    Demonstrated success in crafting superior React JS mobile
                    applications.
                  </li>
                  <li className="mb-3">
                    <span className="d-inline-block me-3">
                      {" "}
                      <i className="fa fa-star "></i>
                    </span>
                    Demonstrated success in crafting superior React JS mobile
                    applications.
                  </li>
                  <li className="mb-3">
                    <span className="d-inline-block me-3">
                      {" "}
                      <i className="fa fa-star "></i>
                    </span>
                    Demonstrated success in crafting superior React JS mobile
                    applications.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <WorksAbout />
      <div className="faq_area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 info ">
              <h2>We Help IT Companies Scale Engineering Capacity</h2>
              <p>
                OneEHR offers complete IT outsourcing services to help companies
                achieve their IT goals. With our superb support, we can assist
                your company in capacity planning and management, remediation,
                and other IT infrastructure services. Our team of experts is
                dedicated to providing tailored solutions that meet your
                specific needs, ensuring that your IT operations run smoothly
                and efficiently. Trust us to guide you through your journey to
                complete outsourced IT services and help your business thrive in
                the ever-evolving IT landscape.
              </p>
              <div class="faq-content mt-0">
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
            <div className="form col-lg-5 offset-lg-1">
              <div className="appoinment-form ">
                <form className="mt-4" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="Yourname" className="form-label">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Yourname"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Youremail" className="form-label">
                      Your email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="Youremail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="SelectServices" className="form-label">
                      Select Services
                    </label>
                    <select
                      id="SelectServices"
                      className="form-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="SEO">SEO</option>
                      <option value="Marketing">Marketing</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      By checking this box, you agree to our privacy policy and
                      terms of service.{" "}
                      <Link to={"#"}>
                        <b>Privacy Policy</b>
                      </Link>
                    </label>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
