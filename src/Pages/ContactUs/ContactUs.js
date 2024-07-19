import React, { useState } from "react";
import "./contactUs.css";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import contact from "../../assets/image/contact.png";
import HomeBanner from "../../Components/homeBanner/HomeBanner";

const ContactUs = () => {
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
  };
  return (
    <>
      <section className="contact_sec">
        <HomeBanner
          title={"See how Kareo can work for you"}
          // heading={data?.heroBanner.heading}
          // strong={data?.heroBanner.strong}
          content={[
            "Tell us a little about yourself and we'll connect you with a Kareo expert who can show you the product in depth, and answer any questions you have. See a day in the life of how a provider, office manager, or biller use Kareo to empower their practice.",
          ]}
          // btnText={data?.heroBanner.btnText}
          // btnLink={data?.heroBanner.btnLink}
          img={contact}
        />
      </section>
      <div className="contact_area overflow-hidden default_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 contact-form-box wow animate__animated animate__fadeInLeft">
              <div className="content">
                <form className="mt-4" onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label htmlFor="Yourname" className="form-label">
                          First and Last Name*
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
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label htmlFor="Youremail" className="form-label">
                          Practice Name*
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
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Email"
                          name="Email"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
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
                    </Col>
                    <Col md="6">
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
                          <option value="Web Development">
                            Web Development
                          </option>
                          <option value="App Development">
                            App Development
                          </option>
                          <option value="SEO">SEO</option>
                          <option value="Marketing">Marketing</option>
                        </select>
                      </div>
                    </Col>
                    <Col md="6">
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
                          <option value="Web Development">
                            Web Development
                          </option>
                          <option value="App Development">
                            App Development
                          </option>
                          <option value="SEO">SEO</option>
                          <option value="Marketing">Marketing</option>
                        </select>
                      </div>
                    </Col>
                    <Col md="6">
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
                          <option value="Web Development">
                            Web Development
                          </option>
                          <option value="App Development">
                            App Development
                          </option>
                          <option value="SEO">SEO</option>
                          <option value="Marketing">Marketing</option>
                        </select>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label htmlFor="providers" className="form-label">
                          # of providers*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="providers"
                          name="providers"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>

                  <div style={{ textAlign: "center" }}>
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
