import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./worksAbout.css";
import about_img1 from "../../assets/image/about_img1.jpeg";

const WorksAbout = () => {
  const [count, setCount] = useState(false);

  return (
    <>
      <div className="works-about-area overflow-hidden">
        <div className="container">
          <div className="works-about-items default-padding">
            <div className="row align-center">
              <div className="col-lg-6 info">
                <h5 className="wow animate__animated animate__fadeInLeft">
                  ABOUT OUR COMPANY
                </h5>
                <h2 className="wow animate__animated animate__fadeInLeft">
                  Empowering Hospitals with Cutting-Edge EHR Software Solutions
                  <br /> Happy Customers
                </h2>
                <p className="wow animate__animated animate__fadeInUp">
                  At OneEHR, we're all about crafting software that makes a real
                  difference in the medical world. We're here to take your
                  healthcare ideas and turn them into top-notch software that
                  really works. With our team of experts who really know their
                  stuff, we've already helped loads of medical organizations
                  thrive. We get how crucial great software is for healthcare,
                  which is why we handle everything from brainstorming ideas to
                  testing and launching the software, all tailored specifically
                  for the medical field. Trust us to make your hospital
                  operations smoother and more efficient with our{" "}
                  <a href="">Custom EHR solutions.</a>
                </p>
                <ul className="wow animate__animated animate__fadeInUp">
                  <li>
                    <h5>Complete client satisfaction</h5>
                  </li>
                  <li>
                    <h5>World Class Services</h5>
                  </li>
                </ul>
                <a className="btn btn-theme effect btn-sm wow animate__animated animate__fadeInUp">
                  Talk to a consultant
                </a>
              </div>
              <div className="col-lg-6">
                <div className="thumb wow animate__animated animate__zoomIn">
                  <img src={about_img1} alt="Thumb" />
                  <div className="fun-fact">
                    <div className="timer">
                      <ScrollTrigger
                        onEnter={() => setCount(true)}
                        onExit={() => setCount(false)}
                      >
                        {count && (
                          <>
                            <CountUp
                              start={0}
                              end={30}
                              duration={2}
                              delay={0}
                            />
                            +
                          </>
                        )}
                      </ScrollTrigger>
                    </div>
                    <span className="medium">Completed Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksAbout;
