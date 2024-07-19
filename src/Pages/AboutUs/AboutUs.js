import React from "react";
import AboutSec from "../../Components/aboutSec/AboutSec";
import heroBanner from "../../assets/image/hero.png";
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
        title={"See how BluelineMD can work for you"}
        // heading={data?.heroBanner.heading}
        // strong={data?.heroBanner.strong}
        content={[
          "Tell us a little about yourself and we'll connect you with a BluelineMD expert who can show you the product in depth, and answer any questions you have. See a day in the life of how a provider, office manager, or biller use BluelineMD to empower their practice.",
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
