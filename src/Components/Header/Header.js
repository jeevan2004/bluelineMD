import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/image/logo.png";

function Header() {
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
          title: "Care Delivery",
          para: "lorem lorem lorem loremlorem lorem",
          path: "/care-delivery",
          icon: <i class="fas fa-truck"></i>,
          subMenu: false,
        },
        {
          title: "Insurance Reimbursements",
          para: "lorem lorem lorem loremlorem lorem",
          path: "#",
          icon: <i class="fas fa-house-damage"></i>,
          subMenu: false,
        },
        {
          title: "Patient Collections",
          para: "lorem lorem lorem loremlorem lorem",
          path: "#",
          icon: <i class="fas fa-user-injured"></i>,
          subMenu: false,
        },
        {
          title: "For Billing Companies",
          para: "lorem lorem lorem loremlorem lorem",
          path: "#",
          icon: <i class="fas fa-building"></i>,
          subMenu: false,
        },
        {
          title: "For New Practices",
          para: "lorem lorem lorem loremlorem lorem",
          path: "#",
          icon: <i class="fas fa-user-nurse"></i>,
          subMenu: false,
        },
        {
          title: "For Your Specialty",
          para: "lorem lorem lorem loremlorem lorem",
          path: "#",
          icon: <i class="fas fa-user-tag"></i>,
          subMenu: false,
        },
        {
          title: "Specialty Updates",
          para: "lorem lorem lorem loremlorem lorem",
          path: "#",
          icon: <i class="fas fa-user-tag"></i>,
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
          icon: <i class="fas fa-file-invoice"></i>,

          subMenu: false,
        },
      ],
    },
    {
      title: "About",
      path: "/about",
      subMenu: false,
    },

    {
      title: "Resources",
      path: "/resources",
      subMenu: false,
    },
    {
      title: "Contact Us",
      path: "/contact-us",
      subMenu: false,
    },
  ];

  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <a className="navbar-brand" href="#">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            <button className="btn_secondary">Pricing</button>
            <button className="btn_primary ms-4">Get Demo</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
