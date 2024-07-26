import ErrorPage from "../Components/404/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs";

import Blog from "../Pages/Blog/Blog";
import Single from "../Pages/Blog/Single";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import OurValues from "../Pages/OurValues/OurValues";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Product from "../Pages/Product/Product";
import Services from "../Pages/Services/Services";
import Solution from "../Pages/Solution/Solution";
import Terms from "../Pages/Terms/Terms";
import WhyChooseUs from "../Pages/WhyChooseUs/WhyChooseUs";

export const routes = [
  {
    notLazy: true,
    path: "/",
    element: Home,
    role: "private",
    name: "Home",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/contact-us",
    element: ContactUs,
    role: "private",
    name: "Contact Us",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/blog",
    element: Blog,
    role: "private",
    name: "Blog",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/blog/:id",
    element: Single,
    role: "private",
    name: "Blog",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/services",
    element: Services,
    role: "private",
    name: "Services",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/product/:name",
    element: Product,
    role: "private",
    name: "Product",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/solutions/:name",
    element: Solution,
    role: "private",
    name: "Solution",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/404",
    element: ErrorPage,
    role: "private",
    name: "Solution",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/about-us",
    element: AboutUs,
    role: "private",
    name: "About Us",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/privacy-policy",
    element: PrivacyPolicy,
    role: "private",
    name: "About Us",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/terms",
    element: Terms,
    role: "private",
    name: "About Us",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/why-choose-us",
    element: WhyChooseUs,
    role: "private",
    name: "About Us",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/our-values",
    element: OurValues,
    role: "private",
    name: "Our Values",
    subRouting: false,
  },
];
