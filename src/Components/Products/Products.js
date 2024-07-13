import React from "react";
import HomeBanner from "../homeBanner/HomeBanner";
import YourNeeds from "../YourNeeds/YourNeeds";
import "./products.css";

import clinical_icon from "../../assets/image/icon/clinical_icon.png";
import clinical_start from "../../assets/image/icon/clinical_start.png";
import clinical_all from "../../assets/image/icon/clinical_all.png";
import Faq from "../faq/Faq";
import Help from "../Help/Help";
import Recommended from "../Recommended/Recommended";
import WhyChoose from "../WhyChoose/WhyChoose";

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
const Products = () => {
  return (
    <>
      <HomeBanner />
      {/* <section class="banner_menu scrollUp">
        <div class="banner_menu_cont">
          <ul class="menu_items">
            <li>
              <a href="#facts" class="active">
                OVERVIEW
              </a>
            </li>
            <li>
              <a href="#features" class="">
                FEATURES
              </a>
            </li>
            <li>
              <a href="#start">PLANS</a>
            </li>
            <li>
              <a href="#specialties">CUSTOMER SUCCESS</a>
            </li>
            <li>
              <a href="#faq">FAQS</a>
            </li>
          </ul>
        </div>
      </section> */}

      <YourNeeds
        isBtn={false}
        heading="Electronic Health Records (EHR) Software Built with the Provider in Mind"
        subHeadig=""
        data={needData}
      />
      <Faq />
      <Recommended />

      <Help />
      <WhyChoose bg="#f8fafd" />
    </>
  );
};

export default Products;
