import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import CustomPopup from "../common/CustomPopup/CustomPopup";
import { Col, Row } from "react-bootstrap";
import regImage from "../../assets/image/register.png";
import logo_text from "../../assets/image/logo_text.png";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data, "data");
    const response = await fetch(
      "https://devapi.bluelinemd.com/api/v1/enquiries/createEnquiries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const responseData = await response.json();
    if (responseData) {
      const notify = () => toast.success("Sent Successfully");
      notify();
      setPopupShow(false);
      reset();
    }
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
              
              <button
                onClick={() => setPopupShow(true)}
                className="btn_secondary me-4"
              >
               Get Demo
              </button>
              {/* <Link
                className={`${
                  location.pathname === "/contact-us"
                    ? "btn_primary "
                    : "btn_secondary "
                } `}
                to="contact-us"
              >
                Login
              </Link> */}
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
                {/* <form onSubmit={handleSubmit(onSubmit)} className="mt-4"> */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
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
        {errors.email && <p className="error">{errors.email.message}</p>}
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
        {errors.phone && <p className="error">{errors.phone.message}</p>}
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Message"
          rows="3"
          {...register("message", {
            required: "Message is required",
          })}
        />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      <button type="submit" className="btn_primary w-100">
        Submit
      </button>
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
