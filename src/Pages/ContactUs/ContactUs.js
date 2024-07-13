import React, { useState } from "react";
import "./contactUs.css";
import { Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

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
      <Breadcrumb name={"Contact Us"} pageName={"Contact Us"} />
      <div className="contact-area overflow-hidden default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 contact-form-box wow animate__animated animate__fadeInLeft">
              <div className="content">
                <div className="heading">
                  <h2>Need Help?</h2>
                  <p>Reach out to the world's most reliable IT services.</p>
                </div>
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

            <div className="col-lg-6 info wow animate__animated animate__fadeInRight">
              <div className="contact-tabs">
                <Tabs
                  defaultActiveKey="Address"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Address" title="Address">
                    <div className="">
                      <div id="tab1" className="tab-pane fade active show">
                        <ul>
                          <li>
                            <div className="icon">
                              <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="info">
                              <p>
                                Our Location{" "}
                                <span>
                                  <a className="icon_normal" href="#">
                                    Nikhar Aventino , no.138 /2 doddakannelli,
                                    bellandure road behind ecoworld teck park
                                    near aet junction doddakannelli,bangalore,
                                    Karnataka, 560035
                                  </a>
                                </span>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="fas fa-envelope-open"></i>
                            </div>
                            <div className="info">
                              <p>
                                Send Us Mail{" "}
                                <span>
                                  <a className="icon_normal" href="#">
                                    info@oneehr.net
                                  </a>
                                </span>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="fas fa-phone"></i>
                            </div>
                            <div className="info">
                              <p>
                                Call Us{" "}
                                <span>
                                  <a className="icon_normal" href="#">
                                    +91-78999-16434
                                  </a>
                                </span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="GoogleMaps" title="GoogleMaps">
                    <div className="">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.882248669838!2d77.69522567380926!3d12.915288916112925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1346f406a907%3A0x1bc0f3693fc43aef!2sNikhar%20Aventino!5e0!3m2!1sen!2sin!4v1720611724034!5m2!1sen!2sin"></iframe>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
