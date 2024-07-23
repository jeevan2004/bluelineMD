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
          path: "solutions/insuranceReimbursement",
          icon: <i class="fas fa-truck"></i>,
          subMenu: false,
        },
        {
          title: "Billing Companies",
          para: "lorem lorem lorem loremlorem lorem",
          path: "solutions/billingCompanies",
          icon: <i class="fas fa-house-damage"></i>,
          subMenu: false,
        },
        {
          title: "Patient Collections",
          para: "lorem lorem lorem loremlorem lorem",
          path: "solutions/patientCollections",
          icon: <i class="fas fa-user-injured"></i>,
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
          icon: <i class="fas fa-clinic-medical"></i>,
          subMenu: false,
        },
        {
          title: "Billing",
          para: "lorem lorem lorem loremlorem lorem",
          path: "product/billing",
          icon: <i class="fas fa-file-invoice"></i>,
          subMenu: false,
        },
        {
          title: "Telehealth",
          para: "lorem lorem lorem loremlorem lorem",
          path: "product/telehealth",
          icon: <i class="fas fa-percentage"></i>,
          subMenu: false,
        },
        {
          title: "Managed Billing",
          para: "lorem lorem lorem loremlorem lorem",
          path: "product/managedBilling",
          icon: <i class="fas fa-book"></i>,

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

  const onSubmit = (data) => {
    console.log(data, "pricing data"); // You can replace this with your form submission logic
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
                    <li className="nav-item">
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
                                  <li className="nav-item dropdown dropdown-item">
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
                                        <i class="fas fa-angle-right"></i>
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
                                                <li>
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
              <Link to="contact-us" className="btn_secondary">
                Get Demo
              </Link>
              <button
                className="btn_primary ms-4"
                onClick={() => setPopupShow(true)}
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
            <Col md={6}>
              <div className="pricing_sec">
                <div className="d-flex justify-content-between align-items-center">
                  <img className="w-100 logo_text" src={logo_text} />
                  <Link to="#">Back to Login</Link>
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
                      {...register("specialty", {
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
                    {errors.specialty && (
                      <p className="error">{errors.specialty.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-control"
                      {...register("role", {
                        required: "Please select 'I am a'",
                      })}
                    >
                      <option value="">I am a</option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="pharmacist">Pharmacist</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.role && (
                      <p className="error">{errors.role.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-control"
                      {...register("role", {
                        required: "Please select 'I am a'",
                      })}
                    >
                      <option value="">I am a</option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="pharmacist">Pharmacist</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.role && (
                      <p className="error">{errors.role.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-control"
                      {...register("productInterest", {
                        required: "Please select 'I am a'",
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
                      {...register("numberOfProviders", {
                        required: "Number of Providers is required",
                        min: {
                          value: 1,
                          message: "Number must be greater than 0",
                        },
                      })}
                    />
                    {errors.numberOfProviders && (
                      <p className="error">
                        {errors.numberOfProviders.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    aria-disabled="false"
                    class="btn_primary w-100"
                  >
                    Agree and Continue
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="arrow-right_svg__feather arrow-right_svg__feather-arrow-right"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    <span class="rs-ripple-pond">
                      <span class="rs-ripple"></span>
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
              md={6}
              className="bg_popup"
              style={{ backgroundImage: `url(${regImage})` }}
            ></Col>
          </Row>
        </div>
      </CustomPopup>
    </>
  );
}

export default Header;
