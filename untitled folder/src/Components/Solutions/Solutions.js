import React from "react";
import HomeBanner from "../homeBanner/HomeBanner";
import YourNeeds from "../YourNeeds/YourNeeds";
import "./solutions.css";

import Faq from "../faq/Faq";
import Help from "../Help/Help";
import Recommended from "../Recommended/Recommended";
import WhyChoose from "../WhyChoose/WhyChoose";

import { useParams } from "react-router-dom";
import { solutionsData } from "../../utils/SolutionsConstant";
import LatestUpdate from "../LatestUpdate/LatestUpdate";

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
  const latestUpdatesData = {
    heading: data?.latestUpdates.heading,
    content: data?.latestUpdates.content,
    img: data?.latestUpdates.img,
    btnText: data?.latestUpdates.btnText,
    btnLink: data?.latestUpdates.btnLink,
  };
  const getPaidData = {
    heading: data?.getPaidData.heading,
    content: data?.getPaidData.content,
    img: data?.getPaidData.img,
    btnText: data?.getPaidData.btnText,
    btnLink: data?.getPaidData.btnLink,
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
      <HomeBanner
        title={data?.heroBanner.title}
        heading={data?.heroBanner.heading}
        strong={data?.heroBanner.strong}
        content={data?.heroBanner.content}
        btnText={data?.heroBanner.btnText}
        btnLink={data?.heroBanner.btnLink}
        img={data?.heroBanner.img}
      />

      <LatestUpdate data={latestUpdatesData} btn={true} className={"bg_dark"} />
      <LatestUpdate data={getPaidData} btn={false} className={"rowReverse"} />
      <section className="workflow_steps"></section>
      <YourNeeds isBtn={false} data={yourNeed} />
      <Faq data={faqData} />
      <Recommended data={recommendedData} />

      <Help />
      <WhyChoose data={getInWayData} bg="#f8fafd" />
    </>
  );
};

export default Solutions;
