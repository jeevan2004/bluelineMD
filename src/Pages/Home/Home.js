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
import clinical_icon from "../../assets/image/icon/clinical_icon.png";
import clinical_start from "../../assets/image/icon/clinical_start.png";
import clinical_all from "../../assets/image/icon/clinical_all.png";
import icon_chart from "../../assets/image/icon/icon_chart.png";
import telehealth from "../../assets/image/icon/telehealth.png";
import rcmChar from "../../assets/image/icon/rcmChar.png";
import phrPortal from "../../assets/image/icon/phrPortal.png";
import ehrBilling from "../../assets/image/icon/ehrBilling.png";
import iconEhrDevices from "../../assets/image/icon/iconEhrDevices.png";
import Help from "../../Components/Help/Help";
import hero from "../../assets/image/hero.png";
const needData = {
  heading: "COMPREHENSIVE HEALTHCARE SOLUTIONS TAILORED TO YOU",
  subHeading:
    "We've curated resources to enhance your patient care, streamline billing, optimise insurance claims, and improve patient payments.",
  data: [
    {
      title: "Designed by Healthcare Providers",
      description: `BluelineMD was crafted and is managed by a dedicated team of healthcare providers. We focused on creating powerful technology that prioritizes ease of use.`,
      img: clinical_icon,
      btn_link: "#",
      btnName: "Read More",
    },
    {
      title: "Start in minutes, not days",
      description: `BluelineMD is cloud-based, eliminating the need for software downloads or hardware installations. After signing up, simply create a login, provide basic information, and your EHR is ready to go.`,
      img: clinical_start,
      btn_link: "#",
      btnName: "Read More",
    },
    {
      title: "All the support you need",
      description: `BluelineMD is designed to be intuitive, but to ensure your success from the start, we assign you a dedicated Success Coach.`,
      img: clinical_all,
      btn_link: "#",
      btnName: "Read More",
    },
  ],
};

const Home = () => {
  return (
    <>
      <HomeBanner
        title={`We focus on what matters most`}
        heading={``}
        strong={""}
        content={[
          `Don't get bogged down by paperwork. BluelineMD's user-friendly EHR simplifies your practice management, frees up your time, and lets you focus on what truly matters - building strong relationships with your patients and delivering exceptional care.`,
          `In the dynamic world of behavioral health,
        streamlining operations, enhancing patient outcomes, and achieving financial success are paramount to thriving practices. BluelineMD, a cutting-edge EHR solution, empowers behavioral health professionals to seamlessly navigate these goals, transforming their practices into hubs of excellence.`,
        ]}
        btnText={`Schedule Your Free Demo`}
        btnLink={`#`}
        img={hero}
      />
      <FeaturesSec
        heading={`Focus on Your Patients, Not Your Software. We Makes Practice Management Effortless.
`}
        content={`Tired of software that slows you down? BluelineMD is different. Our complete technology platform is designed specifically for behavioral health practices, with an intuitive interface that empowers you to effortlessly manage all aspects of your practice – from scheduling appointments and streamlining billing to tracking patient progress and fostering communication.
`}
        tiles={[
          {
            title: `Free up valuable time`,
            description: `Spend less time wrestling with software and more time building rapport with your patients.`,
          },
          {
            title: `Simplify workflows`,
            description: `Our intuitive design makes managing your practice a breeze.`,
          },
          {
            title: `Focus on what matters most`,
            description: `Deliver exceptional care with the tools and insights BluelineMD provides.`,
          },
        ]}
      />

      <section className="latest_update default_padding">
        <div className="container">
          <div className="section_heading">
            <h2>Always Evolving to Meet Your Needs</h2>
            <h4>
              At BluelineMD, we understand the ever-changing landscape of
              behavioural healthcare. That's why we're constantly innovating and
              improving our platform to ensure you have the tools you need to
              deliver exceptional care.
            </h4>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="content">
                <h4>Convenient Care, Anywhere, Anytime</h4>
                <p className="mb-3">
                  Our secure and HIPAA-compliant platform allows you to deliver
                  high-quality behavioural healthcare through convenient video
                  conferencing, regardless of location.
                </p>
                <button className="btn_primary">Contact us</button>
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
                <h4>Here's why makes BluelineMD Telehealth stand out:</h4>
                <p className="mb-3">
                  Effortlessly schedule secure, encrypted telehealth
                  appointments with BluelineMD. Offer flexible home care and
                  maximise revenue with insurance reimbursement. Save time with
                  our streamlined solution.
                </p>
                <button className="btn_primary"> Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Recommended /> */}
      <Help />
      <YourNeeds isBtn={true} data={needData} />
    </>
  );
};

export default Home;
