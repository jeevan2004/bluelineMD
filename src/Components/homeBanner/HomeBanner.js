import React from "react";
import "./homeBanner.css";
// import banner from "../../assets/image/banner.png";

const HomeBanner = ({
  title,
  heading,
  strong,
  content,
  btnText,
  btnLink,
  img,
}) => {
  return (
    <>
      <div className="banner-area auto-height text-color bg-gray inc-shape">
        <div className="item">
          <div className="container">
            <div className="row align-center">
              <div className="col-lg-6">
                <div className="content">
                  <h4 className="wow animate__animated animate__fadeInUp">
                    {title}
                  </h4>
                  <h2 className="wow animate__animated animate__fadeInDown">
                    {heading}
                    <strong>{strong}</strong>
                  </h2>
                  {content?.map((item) => {
                    return (
                      <>
                        <p className="wow animate__animated animate__fadeInLeft mb-3">
                          {item}
                        </p>
                      </>
                    );
                  })}

                  {btnText ? (
                    <a
                      className="btn_primary wow animate__animated animate__fadeInUp"
                      href={btnLink}
                    >
                      <span class="highlight me-2">{btnText}</span>{" "}
                      <i className="fas fa-arrow-alt-circle-right"></i>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-lg-6 thumb">
                <img
                  src={img}
                  alt="Thumb"
                  className="wow animate__animated animate__fadeInUp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
