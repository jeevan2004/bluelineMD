import React from "react";
import HomeBanner from "../homeBanner/HomeBanner";
import YourNeeds from "../YourNeeds/YourNeeds";
import "./solutions.css";

import clinical_icon from "../../assets/image/icon/clinical_icon.png";
import clinical_start from "../../assets/image/icon/clinical_start.png";
import clinical_all from "../../assets/image/icon/clinical_all.png";
import Faq from "../faq/Faq";
import Help from "../Help/Help";
import Recommended from "../Recommended/Recommended";
import WhyChoose from "../WhyChoose/WhyChoose";

import Tele from "../../assets/image/telehealth.png";
import Analytics from "../../assets/image/analytics.png";

import { useParams } from "react-router-dom";
import { solutionsData } from "../../utils/SolutionsConstant";

const needData = [
  {
    title: "Designed by Healthcare Providers",
    description: `Kareo Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.`,
    img: clinical_icon,
    btn_link: "#",
    btnName: "Read More",
  },
  {
    title: "Start in minutes, not days",
    description: `Kareo Clinical is cloud-based so there's no software to download and no hardware to install. After sign up, you simply create a log in, provide some basic information and your EHR is ready to go.`,
    img: clinical_start,
    btn_link: "#",
    btnName: "Read More",
  },
  {
    title: "All the support you need",
    description: `Kareo Clinical was designed to be intuitive. But we also want to make sure you succeed from the start so we assign you a dedicated Success Coach.`,
    img: clinical_all,
    btn_link: "#",
    btnName: "Read More",
  },
];
const Solutions = () => {
  let { name } = useParams();

  const data = solutionsData[name];
  console.log(data, " vvvvvvv ");
  const faqData = {
    heading: data?.faq.heading,
    subHeading: data?.faq.subHeading,
    faqItems: data?.faq.faqItems,
  };
  const getInWayData = {
    heading: data?.getInWay.heading,
    subHeading: data?.getInWay.subHeading,
    getInItems: data?.getInWay.items,
  };
  return (
    <>
      <HomeBanner
        title={data?.heroBanner.title}
        heading={data?.heroBanner.heading}
        strong={data?.heroBanner.strong}
        content={data?.heroBanner.content}
        btnText={data?.heroBanner.btnText}
        btnLink={data?.heroBanner.btnLink}
        img={data?.heroBanner.img}
      />

      <section className="latest_update default_padding bg_dark">
        <div className="container">
          {/* <div className="section_heading">
            <h2>Get Paid What You're Owed</h2>
            <h4>
             Managing the revenue cycle efficiently is one of the most challenging parts of operating an independent practice. Each phase of the revenue cycle has its own unique challenges. A breakdown in one part of the process can result in wasted time and lost revenue. It is vital for the financial stability of your independent practice to have a clearly defined revenue cycle workflow that works. Not only will you receive the payments that you are owed in a timely manner, but will also reduce the burden on billing staff, keep down administrative costs, and maintain a positive rapport with your patients.
            </h4>
          </div> */}

          <div className="row">
            <div className="col-md-6">
              <div className="image">
                <img src={Analytics} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h4>Your Guide to Exceeding a 95% Clean Claims Rate</h4>
                <p className="mb-3">
                  50% of rejected or denied claims don't get reworked. That's
                  lost revenue. Improving your claims process can be the fastest
                  way to improve the profitability of your practice.
                </p>
                <p className="mb-3">
                  This guide provides valuable tips, tricks and resources to
                  help you achieve your goal of “Clean Claims Nirvana” by
                  attaining a First Pass Acceptance Rate (FPAR) of greater than
                  95%.
                </p>
                <button className="btn_primary">Download Guide</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest_update ">
        <div className="container">
          {/* <div className="section_heading">
            <h2>Get Paid What You're Owed</h2>
            <h4>
             Managing the revenue cycle efficiently is one of the most challenging parts of operating an independent practice. Each phase of the revenue cycle has its own unique challenges. A breakdown in one part of the process can result in wasted time and lost revenue. It is vital for the financial stability of your independent practice to have a clearly defined revenue cycle workflow that works. Not only will you receive the payments that you are owed in a timely manner, but will also reduce the burden on billing staff, keep down administrative costs, and maintain a positive rapport with your patients.
            </h4>
          </div> */}

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="content">
                <h4>Get Paid What You're Owed</h4>
                <p className="mb-3">
                  Managing the revenue cycle efficiently is one of the most
                  challenging parts of operating an independent practice. Each
                  phase of the revenue cycle has its own unique challenges. A
                  breakdown in one part of the process can result in wasted time
                  and lost revenue. It is vital for the financial stability of
                  your independent practice to have a clearly defined revenue
                  cycle workflow that works. Not only will you receive the
                  payments that you are owed in a timely manner, but will also
                  reduce the burden on billing staff, keep down administrative
                  costs, and maintain a positive rapport with your patients.
                </p>
                <p>
                  With Kareo, you’ll get access to our platform and an entire
                  suite of integrated billing functionality. Our web and mobile
                  applications help your practice easily manage your revenue
                  cycle and the complications that come with billing insurance.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="image">
                <img src={Tele} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow_steps"></section>

      <YourNeeds
        isBtn={false}
        heading="Electronic Health Records (EHR) Software Built with the Provider in Mind"
        subHeadig=""
        data={needData}
      />
      <Faq data={faqData} />
      <Recommended />

      <Help />
      <WhyChoose data={getInWayData} bg="#f8fafd" />
    </>
  );
};

export default Solutions;
