import React, { useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../404/ErrorPage";

const Products = () => {
  let { name } = useParams();

  const navigate = useNavigate();

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
  const yourNeed = {
    heading: data?.yourNeed.heading,
    subHeading: data?.yourNeed.subHeading,
    boxItems: data?.yourNeed.boxItems,
  };
  const recommendedData = {
    heading: data?.recommendSec.heading,
    subHeading: data?.recommendSec.subHeading,
    items: data?.recommendSec.items,
  };

  return (
    <>
      {data ? (
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

          <YourNeeds isBtn={false} data={yourNeed} />
          <Faq data={faqData} />
          {/* <Recommended data={recommendedData} /> */}

          <Help />
          <WhyChoose data={getInWayData} bg="#f8fafd" />
        </>
      ) : (
        <>
          <ErrorPage />
        </>
      )}
    </>
  );
};

export default Products;
