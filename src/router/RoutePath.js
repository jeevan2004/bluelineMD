import ErrorPage from "../Components/404/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Single from "../Pages/Blog/Single";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Services from "../Pages/Services/Services";
import Solution from "../Pages/Solution/Solution";

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
];
