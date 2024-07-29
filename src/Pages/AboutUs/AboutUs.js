import React from "react";
import AboutSec from "../../Components/aboutSec/AboutSec";
import heroBanner from "../../assets/image/about.png";
import "./aboutUs.css";
import HomeBanner from "../../Components/homeBanner/HomeBanner";
import Faq from "../../Components/faq/Faq";
const AboutUs = () => {
  const faqData = {
    heading: "BluelineMd Frequently Asked Questions",
    subHeading:
      "Tailored, Integrated, Intuitive BluelineMd is developed with three main objectives. It's tailored to fit your practice, integrates smoothly with billing, and is user-friendly.",

    faqItems: [
      {
        question: "What is BluelineMD?",
        annswer:
          "BluelineMD is a state-of-the-art Electronic Health Records (EHR) solution designed to simplify practice management for healthcare providers, particularly those in the behavioral health field. Our platform helps streamline operations, enhance patient outcomes, and achieve financial success.",
      },
      {
        question: "How does BluelineMD enhance patient outcomes?",
        annswer:
          "BluelineMD improves patient outcomes by providing healthcare providers with easy access to comprehensive patient information, enabling better decision-making and personalized care. Our platform also supports efficient communication and follow-up, ensuring continuity of care.",
      },
      {
        question: "How can I get started with BluelineMD?",
        annswer:
          "Getting started with BluelineMD is easy. Simply contact our sales team or request a demo through our website. We offer personalized onboarding and training to ensure you get the most out of our EHR solution.",
      },
    ],
  };
  return (
    <>
      <HomeBanner
        title={"Empowering Behavioral Health"}
        // heading={data?.heroBanner.heading}
        // strong={data?.heroBanner.strong}
        content={[
          "BluelineMD is a pioneering Electronic Health Record (EHR) solution transforming behavioral health practices. Our mission is to optimize your practice by streamlining operations, simplifying workflows, and providing intuitive tools. By focusing on enhancing your practice's performance, we empower healthcare professionals to deliver exceptional patient care while achieving financial success.",
        ]}
        // btnText={data?.heroBanner.btnText}
        // btnLink={data?.heroBanner.btnLink}
        img={heroBanner}
      />
      <AboutSec />
      <Faq data={faqData} />
    </>
  );
};

export default AboutUs;
