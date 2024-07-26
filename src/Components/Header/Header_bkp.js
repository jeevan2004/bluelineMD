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
          para: "lorem lorem lorem loremlorem lorem",
          path: "solutions/insurance_reimbursement",
          icon: <i className="fas fa-truck"></i>,
          subMenu: false,
        },
        {
          title: "Billing Companies",
          para: "lorem lorem lorem loremlorem lorem",
          path: "solutions/billing_companies",
          icon: <i className="fas fa-house-damage"></i>,
          subMenu: false,
        },
        {
          title: "Patient Collections",
          para: "lorem lorem lorem loremlorem lorem",
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
          para: "lorem lorem lorem loremlorem lorem",
          path: "product/clinical",
          icon: <i className="fas fa-clinic-medical"></i>,
          subMenu: false,
        },
        {
          title: "Billing",
          para: "lorem lorem lorem loremlorem lorem",
          path: "product/billing",
          icon: <i className="fas fa-file-invoice"></i>,
          subMenu: false,
        },
        {
          title: "Telehealth",
          para: "lorem lorem lorem loremlorem lorem",
          path: "product/telehealth",
          icon: <i className="fas fa-percentage"></i>,
          subMenu: false,
        },
        {
          title: "Managed Billing",
          para: "lorem lorem lorem loremlorem lorem",
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
            <div className="logo_sec d-flex justify-content-between">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="" />
              </a>
              <div className="call_box d-inline-flex d-lg-none">
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
            </div>

            <div
              className="collapse navbar-collapse "
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

            <div className="call_box d-lg-inline-flex d-none">
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
        width="xl"
      >
        <div className=" p-40">
          <Row className="m-0">
            <Col lg={6}>
              <div className="pricing_sec">
                <div className="d-flex justify-content-between align-items-center">
                  <img className="w-100 logo_text" src={logo_text} />
                </div>
                <h4>Welcome to BluelineMD</h4>
                <p className="mb-4">
                  Sign up now and get your <span>50 free leads</span>
                </p>
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
                      <option value="">Select Specialty</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="other">Other</option>
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
                      <option value="">I am a</option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="pharmacist">Pharmacist</option>
                      <option value="other">Other</option>
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
                      <option value="">Product Interest</option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="pharmacist">Pharmacist</option>
                      <option value="other">Other</option>
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
            <Col
              lg={6}
              className="bg_popup"
              // style={{ backgroundImage: `url(${regImage})` }}
            >
              <img src={regImage} alt="Registration" />
            </Col>
          </Row>
        </div>
      </CustomPopup>
    </>
  );
}

export default Header;
