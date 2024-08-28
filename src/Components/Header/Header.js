import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import CustomPopup from "../common/CustomPopup/CustomPopup";
import { Col, Row } from "react-bootstrap";
import regImage from "../../assets/image/register.png";
import logo_text from "../../assets/image/logo_text.png";
import { useForm } from "react-hook-form";

function Header() {
  const [popupShow, setPopupShow] = useState(false);
  const location = useLocation();

  const headerMenu = [
    {
      title: "Home",
      path: "/",
      subMenu: false,
    },
    {
      title: "Solutions",
      path: "#",
      subMenu: [
        {
          title: "Insurance Reimbursement",
          para: "Efficient and timely claim management.",
          path: "solutions/insurance_reimbursement",
          icon: <i className="fas fa-truck"></i>,
          subMenu: false,
        },
        {
          title: "Billing Companies",
          para: "Accurate and seamless billing integration.",
          path: "solutions/billing_companies",
          icon: <i className="fas fa-house-damage"></i>,
          subMenu: false,
        },
        {
          title: "Patient Collections",
          para: "Enhanced tracking for patient collections.",
          path: "solutions/patient_collections",
          icon: <i className="fas fa-user-injured"></i>,
          subMenu: false,
        },
      ],
    },
    {
      title: "Products",
      path: "#",
      subMenu: [
        {
          title: "Clinical",
          para: "Comprehensive clinical management tools.",
          path: "product/clinical",
          icon: <i className="fas fa-clinic-medical"></i>,
          subMenu: false,
        },
        {
          title: "Billing",
          para: "Seamless virtual care solutions.",
          path: "product/billing",
          icon: <i className="fas fa-file-invoice"></i>,
          subMenu: false,
        },
        {
          title: "Telehealth",
          para: "Efficient billing processes",
          path: "product/telehealth",
          icon: <i className="fas fa-percentage"></i>,
          subMenu: false,
        },
        {
          title: "Managed Billing",
          para: "Complete billing management services",
          path: "product/managed_billing",
          icon: <i className="fas fa-book"></i>,

          subMenu: false,
        },
      ],
    },
    {
      title: "About",
      path: "/about-us",
      subMenu: false,
    },

    // {
    //   title: "Resources",
    //   path: "/resources",
    //   subMenu: false,
    // },
    {
      title: "Contact Us",
      path: "/contact-us",
      subMenu: false,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch(
      "https://blue-line-md.onrender.com/provider/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    console.log(responseData, "data aaa");
  };

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                {headerMenu?.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <Link
                        className={`${
                          location.pathname === item.path ? "active" : ""
                        } navbar_link`}
                        to={item.path}
                        id={item.title}
                        role="button"
                      >
                        {item.title}{" "}
                        {item.subMenu && <i className="fas fa-angle-down"></i>}
                      </Link>

                      {item.subMenu && (
                        <div className="main_dropdown">
                          <ul
                            className="dropdown-menu sub_first "
                            aria-labelledby={item.title}
                          >
                            {item.subMenu &&
                              item.subMenu?.map((subFirst, index) => {
                                return (
                                  <li
                                    className="nav-item dropdown dropdown-item"
                                    key={index}
                                  >
                                    <Link
                                      className={`${
                                        location.pathname === subFirst.path
                                          ? "active"
                                          : ""
                                      } navbar_link `}
                                      to={subFirst.path}
                                      id={subFirst.title}
                                      role="button"
                                    >
                                      {subFirst?.icon}
                                      <span>
                                        <h6>{subFirst.title}</h6>

                                        <p>{subFirst.para}</p>
                                      </span>
                                      {subFirst.subMenu && (
                                        <i className="fas fa-angle-right"></i>
                                      )}
                                    </Link>

                                    {subFirst.subMenu && (
                                      <ul
                                        className="dropdown-menu sub_sec"
                                        aria-labelledby={subFirst.title}
                                      >
                                        {subFirst.subMenu &&
                                          subFirst.subMenu?.map(
                                            (subSec, index) => {
                                              return (
                                                <li key={index}>
                                                  <Link
                                                    className={`${
                                                      location.pathname ===
                                                      "service"
                                                        ? "active"
                                                        : ""
                                                    } navbar_link dropdown-item`}
                                                    to=""
                                                  >
                                                    {subSec.title}
                                                  </Link>
                                                </li>
                                              );
                                            }
                                          )}
                                      </ul>
                                    )}
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="call_box">
              {console.log(location.pathname, "location.pathname")}
              <Link
                className={`${
                  location.pathname === "/contact-us"
                    ? "btn_primary "
                    : "btn_secondary "
                } `}
                to="contact-us"
              >
                Get Demo
              </Link>
              <button
                onClick={() => setPopupShow(true)}
                className="btn_secondary ms-4"
              >
                Pricing
              </button>
            </div>
          </nav>
        </div>
      </header>

      <CustomPopup
        show={popupShow}
        close={setPopupShow}
        closeIcon={true}
        id="branch"
        title=""
        bg={false}
        className="pricing_modal"
        width="md"
      >
        <div className=" p-40">
          <Row className="m-0">
            <Col lg={12}>
              <div className="pricing_sec">
                <div className="d-flex justify-content-between align-items-center">
                  <img className="w-100 logo_text" src={logo_text} />
                </div>
                <h4>Welcome to BluelineMD</h4>
                <p className="mb-4">Get in touch with us</p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p className="error">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p className="error">{errors.lastName.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Practice Name"
                      {...register("practiceName", {
                        required: "Practice Name is required",
                      })}
                    />
                    {errors.practiceName && (
                      <p className="error">{errors.practiceName.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="error">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      {...register("phone", {
                        required: "Phone Number is required",
                      })}
                    />
                    {errors.phone && (
                      <p className="error">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-control"
                      {...register("speciality", {
                        required: "Specialty is required",
                      })}
                    >
                      <option value="" disabled="" selected="">
                        Specialty *
                      </option>
                      <option value="Acupuncturist">Acupuncturist</option>
                      <option value="Addiction Medicine Specialist">
                        Addiction Medicine Specialist
                      </option>
                      <option value="Allergist">Allergist</option>
                      <option value="Anesthesiologist">Anesthesiologist</option>
                      <option value="Audiologist">Audiologist</option>
                      <option value="Bariatrician">Bariatrician</option>
                      <option value="Billing Company">Billing Company</option>
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
                      <option value="Cosmetic Dentist">Cosmetic Dentist</option>
                      <option value="Counselor">Counselor</option>
                      <option value="Dental Hygienist">Dental Hygienist</option>
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
                      <option value="General Dentist">General Dentist</option>
                      <option value="General Practitioner">
                        General Practitioner
                      </option>
                      <option value="General Surgeon">General Surgeon</option>
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
                      <option value="Ophthalmologist">Ophthalmologist</option>
                      <option value="Optometrist">Optometrist</option>
                      <option value="Oral Surgeon">Oral Surgeon</option>
                      <option value="Orthodontist">Orthodontist</option>
                      <option value="Orthopedic Surgeon">
                        Orthopedic Surgeon
                      </option>
                      <option value="Osteopathic Physician">
                        Osteopathic Physician
                      </option>
                      <option value="Otolaryngologist">Otolaryngologist</option>
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
                      <option value="Plastic Surgeon">Plastic Surgeon</option>
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
                      <option value="Speech Therapist">Speech Therapist</option>
                      <option value="Sports Medicine Specialist">
                        Sports Medicine Specialist
                      </option>
                      <option value="Sports Therapist">Sports Therapist</option>
                      <option value="Urgent Care Specialist">
                        Urgent Care Provider
                      </option>
                      <option value="Urgent Care Specialist">
                        Urgent Care Specialist
                      </option>
                      <option value="Urologist">Urologist</option>
                      <option value="Vascular Surgeon">Vascular Surgeon</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.speciality && (
                      <p className="error">{errors.speciality.message}</p>
                    )}
                  </div>

                  <div className="mb-3">
                    <select
                      className="form-control"
                      {...register("iAmA", {
                        required: "Please select 'I am a'",
                      })}
                    >
                      <option disabled="" selected="" value="">
                        I am a *
                      </option>
                      <option value="Physician/Practice">
                        Physician/Practice
                      </option>
                      <option value="Billing Company">Billing Company</option>
                      <option value="ACO">ACO</option>
                      <option value="Software/IT Consultant">
                        Software/IT Consultant
                      </option>
                      <option value="Student/Educator">Student/Educator</option>
                      <option value="Patient">Patient</option>
                      <option value="RCM Practice Customer">
                        RCM Practice Customer
                      </option>
                      <option value="SaaS Provider">SaaS Provider</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.iAmA && (
                      <p className="error">{errors.iAmA.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-control"
                      {...register("productInterest", {
                        required: "Product Interest is required",
                      })}
                    >
                      <option disabled="" selected="" value="">
                        Product Interest *
                      </option>
                      <option value="BluelineMD Clinical (EHR)">
                        BluelineMD Clinical (EHR)
                      </option>
                      <option value="BluelineMD Billing Software (PM)">
                        BluelineMD Billing Software (PM)
                      </option>
                      <option value="Managed Billing Services">
                        Managed Billing Services
                      </option>
                      <option value="BluelineMD Engage">
                        BluelineMD Engage
                      </option>
                      <option value="Telemedicine">Telehealth</option>
                      <option value="BluelineMD for Billing Companies">
                        BluelineMD for Billing Companies
                      </option>
                      <option value="BluelineMD Analytics">
                        BluelineMD Analytics
                      </option>
                      <option value="BluelineMD Cloud">BluelineMD Cloud</option>
                      <option value="BluelineMD Patient Collect">
                        BluelineMD Patient Collect
                      </option>
                      <option value="Robotic Process Automation">
                        Robotic Process Automation
                      </option>
                    </select>
                    {errors.productInterest && (
                      <p className="error">{errors.productInterest.message}</p>
                    )}
                  </div>

                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Number of Providers"
                      {...register("providers", {
                        required: "Number of Providers is required",
                        min: {
                          value: 1,
                          message: "Number must be greater than 0",
                        },
                      })}
                    />
                    {errors.providers && (
                      <p className="error">{errors.providers.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    aria-disabled="false"
                    className="btn_primary w-100"
                  >
                    Agree and Continue
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="arrow-right_svg__feather arrow-right_svg__feather-arrow-right"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    <span className="rs-ripple-pond">
                      <span className="rs-ripple"></span>
                    </span>
                  </button>
                  <p className="form_links">
                    By signing up, I agree to the{" "}
                    <Link onClick={() => setPopupShow(false)} to="terms">
                      Terms of Use
                    </Link>{" "}
                    and
                    <Link
                      onClick={() => setPopupShow(false)}
                      to="privacyPolicy"
                    >
                      {" "}
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </CustomPopup>
    </>
  );
}

export default Header;
