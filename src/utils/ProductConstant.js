// Import the image
import hero from "../assets/image/hero.png";
import clinical_img from "../assets/image/Clinical.png";
import belling_img from "../assets/image/belling.png";

import clinical_icon from "../assets/image/icon/clinical_icon.png";
import clinical_start from "../assets/image/icon/clinical_start.png";
import clinical_all from "../assets/image/icon/clinical_all.png";
import benefits_icon from "../assets/image/icon/benefits_icon.png";
import Blog1 from "../assets/image/Blog1.png";

// Define your object with correct structure
export const productData = {
  clinical: {
    heroBanner: {
      title: "We focus on what matters most",
      heading: "",
      strong: "",
      content: [
        "Don't get bogged down by paperwork. BluelineMD's user-friendly EHR simplifies your practice management, frees up your time, and lets you focus on what truly matters - building strong relationships with your patients and delivering exceptional care.",
        "In the dynamic world of behavioral health, streamlining operations, enhancing patient outcomes, and achieving financial success are paramount to thriving practices. BluelineMD, a cutting-edge EHR solution, empowers behavioral health professionals to seamlessly navigate these goals, transforming their practices into hubs of excellence.",
      ],
      btnText: "Schedule Your Free Demo",
      btnLink: "#",
      img: clinical_img,
    },
    yourNeed: {
      heading:
        "ELECTRONIC HEALTH RECORDS (EHR) SOFTWARE BUILT WITH THE PROVIDER IN MIND",
      subHeading: "",

      boxItems: [
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
    },
    faq: {
      heading: "BluelineMd Frequently Asked Questions",
      subHeading:
        "Tailored, Integrated, Intuitive BluelineMd is developed with three main objectives. It's tailored to fit your practice, integrates smoothly with billing, and is user-friendly.",

      faqItems: [
        {
          question: "Created by Healthcare Experts",
          annswer:
            "BluelineMd was designed and is maintained by our team of healthcare professionals. We prioritized creating a robust technology that is also easy to use. ",
        },
        {
          question: "Get started in minutes, not days",
          annswer:
            "BluelineMd was designed and is maintained by our team of healthcare professionals. We prioritized creating a robust technology that is also easy to use.",
        },
        {
          question: "Comprehensive support available",
          annswer:
            "BluelineMD Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.",
        },
      ],
    },
    getInWay: {
      heading: "FINALLY, SOFTWARE THAT DOESN'T GET IN THE WAY",
      subHeading: "",

      items: [
        {
          img: clinical_all,
          title: "INCREASE STAFF EFFICIENCY",
          content:
            "Our user-friendly EHR system reduces administrative burdens. Spend more time with your patients and less time on paperwork.",
        },

        {
          img: clinical_all,
          title: "ENHANCE PATIENT CARE",
          content:
            "Access comprehensive patient records with ease, enabling you to provide more personalized and effective care.",
        },
        {
          img: clinical_all,
          title: "STREAMLINE APPOINTMENTS",
          content:
            "Efficiently manage scheduling and reduce no-shows with automated reminders and easy rescheduling options",
        },
        {
          img: clinical_all,
          title: "SECURE COMMUNICATION",
          content:
            "Communicate with patients securely through our HIPAA-compliant messaging system, ensuring privacy and confidentiality",
        },
        {
          img: clinical_all,
          title: "IMPROVE BILLING PROCESSES",
          content:
            "Simplify billing and invoicing with our integrated system, reducing errors and speeding up payment collection.",
        },
        {
          img: clinical_all,
          title: "INTEGRATE SEAMLESSLY",
          content:
            "Our EHR solution integrates effortlessly with other healthcare systems, creating a unified workflow and enhancing care coordination.",
        },
        {
          img: clinical_all,
          title: "ACCESS TELEHEALTH",
          content:
            "Offer video visits to your patients, providing convenient care options and reducing the need for in-person appointments.",
        },
      ],
    },
    recommendSec: {
      heading:
        "Electronic Health Records (EHR) Software Built with the Provider in Mind",
      subHeading: "",

      items: [
        {
          img: Blog1,
          title: "Industry Insights: The Current Landscape of Medical Billing",
          description: `Industry Insights: The Current Landscape of Medical Billing
                   BluelineMD recently conducted our second nationwide survey of
                    medical billing company owners, leaders, and team members to
                    better understand overall sentiment about the current state
                    of the industry, perceived key business drivers, significant
                    challenges, as well as the characteristics of a
                    best-in-class billing company.`,
          btn_link: "#",
          btnName: "Read More",
        },
        {
          img: Blog1,
          title: "Expert Panel: Navigating the Future of Healthcare Technology",
          description: `We hosted our annual roundtable discussion with healthcare
                    IT specialists, hospital administrators, and software
                    developers to explore emerging trends in medical technology,
                    assess the impact of AI on patient care, identify key
                    challenges in implementation, and define characteristics of
                    cutting-edge healthcare facilities.`,
          btn_link: "#",
          btnName: "Read More",
        },
        {
          img: Blog1,
          title: "Industry Analysis: Trends in Medical Billing Practices",
          description: `BlueMD recently completed our second nationwide study of
                    medical billing professionals, including company owners,
                    executives, and staff members. Our aim was to gauge industry
                    sentiment, identify key growth factors, pinpoint major
                    challenges, and determine the hallmarks of top-performing
                    billing organisations in today's healthcare landscape.`,
          btn_link: "#",
          btnName: "Read More",
        },
      ],
    },
  },
  billing: {
    heroBanner: {
      title: "Streamline Your In-House Billing with BluelineMD",
      heading: "",
      strong: "",
      content: [
        "BluelineMD Billing offers unparalleled support for your practice's financial operations. Our advanced practice management software simplifies the complexities of insurance billing and patient management. With both web and mobile applications, BluelineMD empowers your team to:",
      ],
      btnText: "Schedule Your Free Demo",
      btnLink: "#",
      img: belling_img,
    },
    yourNeed: {
      heading:
        "ELECTRONIC HEALTH RECORDS (EHR) SOFTWARE BUILT WITH THE PROVIDER IN MIND",
      subHeading: "",

      boxItems: [
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
    },
    faq: {
      heading: "BluelineMd Frequently Ask Questions",
      subHeading:
        "Configurable, Connected, Compassionate BluelineMD Clinical is built with three clear goals. It's configurable to your practice, it connects seamlessly with billing and it is easy to use.",

      faqItems: [
        {
          question: "Designed by Healthcare Providers",
          annswer:
            "BluelineMD Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.",
        },
        {
          question: "Start in minutes, not days",
          annswer:
            "BluelineMD Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.",
        },
        {
          question: "All the support you need",
          annswer:
            "BluelineMD Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.",
        },
      ],
    },
    getInWay: {
      heading: "FINALLY, SOFTWARE THAT DOESN'T GET IN THE WAY",
      subHeading: "",

      items: [
        {
          img: clinical_all,
          title: "INCREASE STAFF EFFICIENCY",
          content:
            "Our user-friendly EHR system reduces administrative burdens. Spend more time with your patients and less time on paperwork.",
        },

        {
          img: clinical_all,
          title: "ENHANCE PATIENT CARE",
          content:
            "Access comprehensive patient records with ease, enabling you to provide more personalized and effective care.",
        },
        {
          img: clinical_all,
          title: "STREAMLINE APPOINTMENTS",
          content:
            "Efficiently manage scheduling and reduce no-shows with automated reminders and easy rescheduling options",
        },
        {
          img: clinical_all,
          title: "SECURE COMMUNICATION",
          content:
            "Communicate with patients securely through our HIPAA-compliant messaging system, ensuring privacy and confidentiality",
        },
        {
          img: clinical_all,
          title: "IMPROVE BILLING PROCESSES",
          content:
            "Simplify billing and invoicing with our integrated system, reducing errors and speeding up payment collection.",
        },
        {
          img: clinical_all,
          title: "INTEGRATE SEAMLESSLY",
          content:
            "Our EHR solution integrates effortlessly with other healthcare systems, creating a unified workflow and enhancing care coordination.",
        },
        {
          img: clinical_all,
          title: "ACCESS TELEHEALTH",
          content:
            "Offer video visits to your patients, providing convenient care options and reducing the need for in-person appointments.",
        },
      ],
    },
    recommendSec: {
      heading:
        "Electronic Health Records (EHR) Software Built with the Provider in Mind",
      subHeading: "",

      items: [
        {
          img: Blog1,
          title: "Industry Insights: The Current Landscape of Medical Billing",
          description: `Industry Insights: The Current Landscape of Medical Billing
                   BluelineMD recently conducted our second nationwide survey of
                    medical billing company owners, leaders, and team members to
                    better understand overall sentiment about the current state
                    of the industry, perceived key business drivers, significant
                    challenges, as well as the characteristics of a
                    best-in-class billing company.`,
          btn_link: "#",
          btnName: "Read More",
        },
        {
          img: Blog1,
          title: "Expert Panel: Navigating the Future of Healthcare Technology",
          description: `We hosted our annual roundtable discussion with healthcare
                    IT specialists, hospital administrators, and software
                    developers to explore emerging trends in medical technology,
                    assess the impact of AI on patient care, identify key
                    challenges in implementation, and define characteristics of
                    cutting-edge healthcare facilities.`,
          btn_link: "#",
          btnName: "Read More",
        },
        {
          img: Blog1,
          title: "Industry Analysis: Trends in Medical Billing Practices",
          description: `BlueMD recently completed our second nationwide study of
                    medical billing professionals, including company owners,
                    executives, and staff members. Our aim was to gauge industry
                    sentiment, identify key growth factors, pinpoint major
                    challenges, and determine the hallmarks of top-performing
                    billing organisations in today's healthcare landscape.`,
          btn_link: "#",
          btnName: "Read More",
        },
      ],
    },
  },
  telehealth: {
    heroBanner: {
      title: "Modern Patient Care, Anytime, Anywhere",
      heading: "",
      strong: "",
      content: [
        "BluelineMD Telehealth brings healthcare into the digital age. Our secure and user-friendly platform offers a seamless way to provide cutting-edge care remotely. With just a click, you can deliver convenient, compliant, and high-quality patient care from any location. Experience the future of healthcare delivery with BluelineMD's innovative telehealth solution.",
      ],
      btnText: "Schedule Your Free Demo",
      btnLink: "#",
      img: hero,
    },
    yourNeed: {
      heading:
        "ELECTRONIC HEALTH RECORDS (EHR) SOFTWARE BUILT WITH THE PROVIDER IN MIND",
      subHeading: "",

      boxItems: [
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
    },
    faq: {
      heading: "BluelineMd Frequently Ask Questions",
      subHeading:
        "Configurable, Connected, Compassionate BluelineMD Clinical is built with three clear goals. It's configurable to your practice, it connects seamlessly with billing and it is easy to use.",

      faqItems: [
        {
          question: "Designed by Healthcare Providers",
          annswer:
            "BluelineMD Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.",
        },
        {
          question: "Start in minutes, not days",
          annswer:
            "BluelineMD Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.",
        },
        {
          question: "All the support you need",
          annswer:
            "BluelineMD Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.",
        },
      ],
    },
    getInWay: {
      heading: "FINALLY, SOFTWARE THAT DOESN'T GET IN THE WAY",
      subHeading: "",

      items: [
        {
          img: clinical_all,
          title: "INCREASE STAFF EFFICIENCY",
          content:
            "Our user-friendly EHR system reduces administrative burdens. Spend more time with your patients and less time on paperwork.",
        },

        {
          img: clinical_all,
          title: "ENHANCE PATIENT CARE",
          content:
            "Access comprehensive patient records with ease, enabling you to provide more personalized and effective care.",
        },
        {
          img: clinical_all,
          title: "STREAMLINE APPOINTMENTS",
          content:
            "Efficiently manage scheduling and reduce no-shows with automated reminders and easy rescheduling options",
        },
        {
          img: clinical_all,
          title: "SECURE COMMUNICATION",
          content:
            "Communicate with patients securely through our HIPAA-compliant messaging system, ensuring privacy and confidentiality",
        },
        {
          img: clinical_all,
          title: "IMPROVE BILLING PROCESSES",
          content:
            "Simplify billing and invoicing with our integrated system, reducing errors and speeding up payment collection.",
        },
        {
          img: clinical_all,
          title: "INTEGRATE SEAMLESSLY",
          content:
            "Our EHR solution integrates effortlessly with other healthcare systems, creating a unified workflow and enhancing care coordination.",
        },
        {
          img: clinical_all,
          title: "ACCESS TELEHEALTH",
          content:
            "Offer video visits to your patients, providing convenient care options and reducing the need for in-person appointments.",
        },
      ],
    },
    recommendSec: {
      heading:
        "Electronic Health Records (EHR) Software Built with the Provider in Mind",
      subHeading: "",

      items: [
        {
          img: Blog1,
          title: "Industry Insights: The Current Landscape of Medical Billing",
          description: `Industry Insights: The Current Landscape of Medical Billing
                   BluelineMD recently conducted our second nationwide survey of
                    medical billing company owners, leaders, and team members to
                    better understand overall sentiment about the current state
                    of the industry, perceived key business drivers, significant
                    challenges, as well as the characteristics of a
                    best-in-class billing company.`,
          btn_link: "#",
          btnName: "Read More",
        },
        {
          img: Blog1,
          title: "Expert Panel: Navigating the Future of Healthcare Technology",
          description: `We hosted our annual roundtable discussion with healthcare
                    IT specialists, hospital administrators, and software
                    developers to explore emerging trends in medical technology,
                    assess the impact of AI on patient care, identify key
                    challenges in implementation, and define characteristics of
                    cutting-edge healthcare facilities.`,
          btn_link: "#",
          btnName: "Read More",
        },
        {
          img: Blog1,
          title: "Industry Analysis: Trends in Medical Billing Practices",
          description: `BlueMD recently completed our second nationwide study of
                    medical billing professionals, including company owners,
                    executives, and staff members. Our aim was to gauge industry
                    sentiment, identify key growth factors, pinpoint major
                    challenges, and determine the hallmarks of top-performing
                    billing organisations in today's healthcare landscape.`,
          btn_link: "#",
          btnName: "Read More",
        },
      ],
    },
  },
  managedBilling: {
    heroBanner: {
      title: "Expert Medical Billing Tailored to Your Practice",
      heading: "",
      strong: "",
      content: [
        "At BluelineMD, we understand that medical billing isn't a one-size-fits-all solution. Every practice has unique needs, and finding the right billing partner can be challenging. That's where we excel.",
        "BluelineMD connects you with seasoned, independent billing experts who:",
      ],
      btnText: "Schedule Your Free Demo",
      btnLink: "#",
      img: hero,
    },
    yourNeed: {
      heading:
        "ELECTRONIC HEALTH RECORDS (EHR) SOFTWARE BUILT WITH THE PROVIDER IN MIND",
      subHeading: "",

      boxItems: [
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
    },
    faq: {
      heading: "BluelineMd Frequently Ask Questions",
      subHeading:
        "Configurable, Connected, Compassionate BluelineMD Clinical is built with three clear goals. It's configurable to your practice, it connects seamlessly with billing and it is easy to use.",

      faqItems: [
        {
          question: "Designed by Healthcare Providers",
          annswer:
            "BluelineMD Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.",
        },
        {
          question: "Start in minutes, not days",
          annswer:
            "BluelineMD Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.",
        },
        {
          question: "All the support you need",
          annswer:
            "BluelineMD Clinical was designed and is managed by our team of healthcare providers. We worked hard to make our technology powerful with a focus on ease of use.",
        },
      ],
    },
    getInWay: {
      heading: "FINALLY, SOFTWARE THAT DOESN'T GET IN THE WAY",
      subHeading: "",

      items: [
        {
          img: clinical_all,
          title: "INCREASE STAFF EFFICIENCY",
          content:
            "Our user-friendly EHR system reduces administrative burdens. Spend more time with your patients and less time on paperwork.",
        },

        {
          img: clinical_all,
          title: "ENHANCE PATIENT CARE",
          content:
            "Access comprehensive patient records with ease, enabling you to provide more personalized and effective care.",
        },
        {
          img: clinical_all,
          title: "STREAMLINE APPOINTMENTS",
          content:
            "Efficiently manage scheduling and reduce no-shows with automated reminders and easy rescheduling options",
        },
        {
          img: clinical_all,
          title: "SECURE COMMUNICATION",
          content:
            "Communicate with patients securely through our HIPAA-compliant messaging system, ensuring privacy and confidentiality",
        },
        {
          img: clinical_all,
          title: "IMPROVE BILLING PROCESSES",
          content:
            "Simplify billing and invoicing with our integrated system, reducing errors and speeding up payment collection.",
        },
        {
          img: clinical_all,
          title: "INTEGRATE SEAMLESSLY",
          content:
            "Our EHR solution integrates effortlessly with other healthcare systems, creating a unified workflow and enhancing care coordination.",
        },
        {
          img: clinical_all,
          title: "ACCESS TELEHEALTH",
          content:
            "Offer video visits to your patients, providing convenient care options and reducing the need for in-person appointments.",
        },
      ],
    },
    recommendSec: {
      heading:
        "Electronic Health Records (EHR) Software Built with the Provider in Mind",
      subHeading: "",

      items: [
        {
          img: Blog1,
          title: "Industry Insights: The Current Landscape of Medical Billing",
          description: `Industry Insights: The Current Landscape of Medical Billing
                   BluelineMD recently conducted our second nationwide survey of
                    medical billing company owners, leaders, and team members to
                    better understand overall sentiment about the current state
                    of the industry, perceived key business drivers, significant
                    challenges, as well as the characteristics of a
                    best-in-class billing company.`,
          btn_link: "#",
          btnName: "Read More",
        },
        {
          img: Blog1,
          title: "Expert Panel: Navigating the Future of Healthcare Technology",
          description: `We hosted our annual roundtable discussion with healthcare
                    IT specialists, hospital administrators, and software
                    developers to explore emerging trends in medical technology,
                    assess the impact of AI on patient care, identify key
                    challenges in implementation, and define characteristics of
                    cutting-edge healthcare facilities.`,
          btn_link: "#",
          btnName: "Read More",
        },
        {
          img: Blog1,
          title: "Industry Analysis: Trends in Medical Billing Practices",
          description: `BlueMD recently completed our second nationwide study of
                    medical billing professionals, including company owners,
                    executives, and staff members. Our aim was to gauge industry
                    sentiment, identify key growth factors, pinpoint major
                    challenges, and determine the hallmarks of top-performing
                    billing organisations in today's healthcare landscape.`,
          btn_link: "#",
          btnName: "Read More",
        },
      ],
    },
  },
};
