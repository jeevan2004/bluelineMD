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
import hero from "../../assets/image/hero.png";
import { productData } from "../../utils/ProductConstant";
import { useParams } from "react-router-dom";

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
  let { name } = useParams();

  const data = productData[name];

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
  console.log(faqData, "ssssss");
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

export default Products;
