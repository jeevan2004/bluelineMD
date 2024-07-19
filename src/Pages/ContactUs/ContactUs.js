import React, { useState } from "react";
import "./contactUs.css";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import contact from "../../assets/image/contact.png";
import HomeBanner from "../../Components/homeBanner/HomeBanner";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    practiceName: "",
    email: "",
    phone: "",
    speciality: "",
    iAmA: "",
    productInterest: "",
    providers: "",
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
      "https://blue-line-md.onrender.com/provider/create",
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
      <div className="contact_area overflow-hidden ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 contact-form-box wow animate__animated animate__fadeInLeft">
              <div className="content">
                <form className="mt-4" onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">
                          First and Last Name*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label htmlFor="practiceName" className="form-label">
                          Practice Name*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="practiceName"
                          name="practiceName"
                          value={formData.practiceName}
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
                          name="email"
                          value={formData.email}
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
                        <label htmlFor="specialty" className="form-label">
                          Specialty
                        </label>
                        <select
                          id="specialty"
                          className="form-select"
                          name="speciality"
                          value={formData.speciality}
                          onChange={handleChange}
                        >
                          <option value="" disabled="" selected="">
                            - Select -
                          </option>
                          <option value="Acupuncturist">Acupuncturist</option>
                          <option value="Addiction Medicine Specialist">
                            Addiction Medicine Specialist
                          </option>
                          <option value="Allergist">Allergist</option>
                          <option value="Anesthesiologist">
                            Anesthesiologist
                          </option>
                          <option value="Audiologist">Audiologist</option>
                          <option value="Bariatrician">Bariatrician</option>
                          <option value="Billing Company">
                            Billing Company
                          </option>
                          <option value="Cardiologist">Cardiologist</option>
                          <option value="Chiropractor">Chiropractor</option>
                          <option value="Chronic Disease Care">
                            Chronic Disease Care
                          </option>
                          <option value="Colon and Rectal Surgeon">
                            Colon and Rectal Surgeon
                          </option>
                          <option value="Concierge Medicine">
                            Concierge Medicine
                          </option>
                          <option value="Cosmetic Dentist">
                            Cosmetic Dentist
                          </option>
                          <option value="Counselor">Counselor</option>
                          <option value="Dental Hygienist">
                            Dental Hygienist
                          </option>
                          <option value="Denturist">Denturist</option>
                          <option value="Dermatologist">Dermatologist</option>
                          <option value="Diagnostic Center (Labs)">
                            Diagnostic Center (Labs)
                          </option>
                          <option value="Durable Medical Equipment">
                            Durable Medical Equipment
                          </option>
                          <option value="Ear, Nose, Throat Practitioner">
                            Ear, Nose, Throat Practitioner
                          </option>
                          <option value="Endocrinology and Metabolism Specialist">
                            Endocrinology and Metabolism Specialist
                          </option>
                          <option value="Endodontist">Endodontist</option>
                          <option value="Family Medicine Practitioner">
                            Family Medicine Practitioner
                          </option>
                          <option value="Gastroenterologist">
                            Gastroenterologist
                          </option>
                          <option value="General Dentist">
                            General Dentist
                          </option>
                          <option value="General Practitioner">
                            General Practitioner
                          </option>
                          <option value="General Surgeon">
                            General Surgeon
                          </option>
                          <option value="Genetics Specialist">
                            Genetics Specialist
                          </option>
                          <option value="Geriatrician">Geriatrician</option>
                          <option value="Hand Surgeon">Hand Surgeon</option>
                          <option value="Hematologist">Hematologist</option>
                          <option value="Holistic Medicine Specialist">
                            Holistic Medicine Specialist
                          </option>
                          <option value="Home Health Practitioner">
                            Home Health Practitioner
                          </option>
                          <option value="Immunologist">Immunologist</option>
                          <option value="Infectious Disease Specialist">
                            Infectious Disease Specialist
                          </option>
                          <option value="Infertility Specialist">
                            Infertility Specialist
                          </option>
                          <option value="Internist">Internist</option>
                          <option value="IT Consultant">IT Consultant</option>
                          <option value="Laser Eye Surgeon">
                            Laser Eye Surgeon
                          </option>
                          <option value="Med Spa Practitioner">
                            Med Spa Practitioner
                          </option>
                          <option value="Medical Clinic">Medical Clinic</option>
                          <option value="Metabolism Specialist">
                            Metabolism Specialist
                          </option>
                          <option value="Mental Health Therapist">
                            Mental Health Therapist
                          </option>
                          <option value="Mobile Medical Provider">
                            Mobile Medical Practitioner
                          </option>
                          <option value="Nephrologist">Nephrologist</option>
                          <option value="Neurologist">Neurologist</option>
                          <option value="Neurosurgeon">Neurosurgeon</option>
                          <option value="Nurse Practitioner">
                            Nurse Practitioner
                          </option>
                          <option value="Nutritionist">Nutritionist</option>
                          <option value="Obstetrician and Gynecologist">
                            Obstetrician and Gynecologist
                          </option>
                          <option value="Occupational Medicine Specialist">
                            Occupational Medicine Specialist
                          </option>
                          <option value="Occupational Therapist">
                            Occupational Therapist
                          </option>
                          <option value="Oncologist">Oncologist</option>
                          <option value="Ophthalmologist">
                            Ophthalmologist
                          </option>
                          <option value="Optometrist">Optometrist</option>
                          <option value="Oral Surgeon">Oral Surgeon</option>
                          <option value="Orthodontist">Orthodontist</option>
                          <option value="Orthopedic Surgeon">
                            Orthopedic Surgeon
                          </option>
                          <option value="Osteopathic Physician">
                            Osteopathic Physician
                          </option>
                          <option value="Otolaryngologist">
                            Otolaryngologist
                          </option>
                          <option value="Pain Management Specialist">
                            Pain Management Specialist
                          </option>
                          <option value="Pathologist">Pathologist</option>
                          <option value="Pediatric Dentist">
                            Pediatric Dentist
                          </option>
                          <option value="Pediatrician">Pediatrician</option>
                          <option value="Periodontist">Periodontist</option>
                          <option value="Physical Therapist">
                            Physical Therapist
                          </option>
                          <option value="Plastic Surgeon">
                            Plastic Surgeon
                          </option>
                          <option value="Podiatrist">Podiatrist</option>
                          <option value="Preventative Medicine Specialist">
                            Preventative Medicine Specialist
                          </option>
                          <option value="Primary Care Provider">
                            Primary Care Provider
                          </option>
                          <option value="Psychiatric Nurse Practitioner">
                            Psychiatric Nurse Practitioner
                          </option>
                          <option value="Psychiatrist">Psychiatrist</option>
                          <option value="Psychologist">Psychologist</option>
                          <option value="Pulmonologist">Pulmonologist</option>
                          <option value="Radiologist">Radiologist</option>
                          <option value="Registered Dietician">
                            Registered Dietician
                          </option>
                          <option value="Rehabilitation Specialist">
                            Rehabilitation Specialist
                          </option>
                          <option value="Rheumatologist">Rheumotologist</option>
                          <option value="Sleep Medicine Specialist">
                            Sleep Medicine Specialist
                          </option>
                          <option value="Social Worker (LCSW)">
                            Social Worker (LCSW)
                          </option>
                          <option value="Speech Therapist">
                            Speech Therapist
                          </option>
                          <option value="Sports Medicine Specialist">
                            Sports Medicine Specialist
                          </option>
                          <option value="Sports Therapist">
                            Sports Therapist
                          </option>
                          <option value="Urgent Care Specialist">
                            Urgent Care Provider
                          </option>
                          <option value="Urgent Care Specialist">
                            Urgent Care Specialist
                          </option>
                          <option value="Urologist">Urologist</option>
                          <option value="Vascular Surgeon">
                            Vascular Surgeon
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <label htmlFor="IAmA" className="form-label">
                          I am a
                        </label>
                        <select
                          id="IAmA"
                          className="form-select"
                          name="iAmA"
                          value={formData.iAmA}
                          onChange={handleChange}
                        >
                          <option disabled="" selected="" value="">
                            - Select -
                          </option>
                          <option value="Physician/Practice">
                            Physician/Practice
                          </option>
                          <option value="Billing Company">
                            Billing Company
                          </option>
                          <option value="ACO">ACO</option>
                          <option value="Software/IT Consultant">
                            Software/IT Consultant
                          </option>
                          <option value="Student/Educator">
                            Student/Educator
                          </option>
                          <option value="Patient">Patient</option>
                          <option value="RCM Practice Customer">
                            RCM Practice Customer
                          </option>
                          <option value="SaaS Provider">SaaS Provider</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <label htmlFor="productInterest" className="form-label">
                          Product Interest*
                        </label>
                        <select
                          id="productInterest"
                          className="form-select"
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                        >
                          <option disabled="" selected="" value="">
                            - Select -
                          </option>
                          <option value="Kareo Clinical (EHR)">
                            Kareo Clinical (EHR)
                          </option>
                          <option value="Kareo Billing Software (PM)">
                            Kareo Billing Software (PM)
                          </option>
                          <option value="Managed Billing Services">
                            Managed Billing Services
                          </option>
                          <option value="Kareo Engage">Kareo Engage</option>
                          <option value="Telemedicine">Telehealth</option>
                          <option value="Kareo for Billing Companies">
                            Kareo for Billing Companies
                          </option>
                          <option value="Kareo Analytics">
                            Kareo Analytics
                          </option>
                          <option value="Kareo Cloud">Kareo Cloud</option>
                          <option value="Kareo Patient Collect">
                            Kareo Patient Collect
                          </option>
                          <option value="Robotic Process Automation">
                            Robotic Process Automation
                          </option>
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
                          value={formData.providers}
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
