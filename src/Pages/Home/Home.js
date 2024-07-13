import React from "react";
import AboutSec from "../../Components/aboutSec/AboutSec";
import HomeBanner from "../../Components/homeBanner/HomeBanner";
import FeaturesSec from "../../Components/featuresSec/FeaturesSec";
import Process from "../../Components/process/Process";
import WorksAbout from "../../Components/worksAbout/WorksAbout";
import FunFactor from "../../Components/funFactor/FunFactor";
import Faq from "../../Components/faq/Faq";
import Tele from "../../assets/image/telehealth.png";
import Analytics from "../../assets/image/analytics.png";

import "./home.css";
import Recommended from "../../Components/Recommended/Recommended";
import YourNeeds from "../../Components/YourNeeds/YourNeeds";

import icon_chart from "../../assets/image/icon/icon_chart.png";
import telehealth from "../../assets/image/icon/telehealth.png";
import rcmChar from "../../assets/image/icon/rcmChar.png";
import phrPortal from "../../assets/image/icon/phrPortal.png";
import ehrBilling from "../../assets/image/icon/ehrBilling.png";
import iconEhrDevices from "../../assets/image/icon/iconEhrDevices.png";
import Help from "../../Components/Help/Help";

const needData = [
  {
    title: "Telehealth",
    description: `Enjoy customizable clinical notes and time saving shortcuts built for your specialty.`,
    img: telehealth,
    btn_link: "#",
    btnName: "Read More",
  },
  {
    title: "EMR",
    description: `Enjoy customizable clinical notes and time saving shortcuts built for your specialty.`,
    img: icon_chart,
    btn_link: "#",
    btnName: "Read More",
  },
  {
    title: "Revenue Cycle Management",
    description: `Enjoy customizable clinical notes and time saving shortcuts built for your specialty.`,
    img: rcmChar,
    btn_link: "#",
    btnName: "Read More",
  },
  {
    title: "Practice Management",
    description: `Enjoy customizable clinical notes and time saving shortcuts built for your specialty.`,
    img: phrPortal,
    btn_link: "#",
    btnName: "Read More",
  },
  {
    title: "Medical Billing Software",
    description: `Enjoy customizable clinical notes and time saving shortcuts built for your specialty.`,
    img: ehrBilling,
    btn_link: "#",
    btnName: "Read More",
  },
  {
    title: "Mobile EHR",
    description: `Enjoy customizable clinical notes and time saving shortcuts built for your specialty.`,
    img: iconEhrDevices,
    btn_link: "#",
    btnName: "Read More",
  },
];

const Home = () => {
  return (
    <>
      <HomeBanner />
      <FeaturesSec />

      <section className="latest_update default_padding">
        <div className="container">
          <div className="section_heading">
            <h2>Latest Updates to the Kareo platform</h2>
            <h4>
              We are committed to solving some of the toughest challenges that
              independent practices face, below are a few of our latest
              enhancements to aid in improving care delivery, patient
              engagement, revenue cycle management and regulatory compliance.
              For a detailed list of recent enhancements view our product
              updates page.
            </h4>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="content">
                <h4>KAREO TELEHEALTH</h4>
                <p className="mb-3">
                  With Kareo Telehealth, you can connect with patients anywhere
                  at anytime. It's simple, secure and streamlined—and fully
                  reimbursed by private payers.
                </p>
                <button className="btn_primary">View Product</button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="image">
                <img src={Tele} alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="image">
                <img src={Analytics} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h4>KAREO ANALYTICS</h4>
                <p className="mb-3">
                  With Kareo Telehealth, you can connect with patients anywhere
                  at anytime. It's simple, secure and streamlined—and fully
                  reimbursed by private payers.
                </p>
                <button className="btn_primary">View Product</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Recommended />
      <Help />
      <YourNeeds
        isBtn={true}
        data={needData}
        heading="EHR platform that adapts to your needs"
        subHeading={`We have selected a few resources below to help you improve care
              delivery, billing, insurance reimbursements and patient
              collections.`}
      />
    </>
  );
};

export default Home;
