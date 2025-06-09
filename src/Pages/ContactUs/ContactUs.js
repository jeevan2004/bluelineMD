import React, { useState } from "react";
import "./contactUs.css";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import contact from "../../assets/image/contact.png";
import HomeBanner from "../../Components/homeBanner/HomeBanner";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    practiceName: "",
    email: "",
    phone: "",
    specialty: "",
    role: "",
    productInterest: "",
    numberOfProviders: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm();
 
   const onSubmit = async (data) => {
     console.log(data, "data");
     const response = await fetch(
       "https://devapi.bluelinemd.com/api/v1/enquiries/createEnquiries",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
       }
     );
     const responseData = await response.json();
     if (responseData) {
       const notify = () => toast.success("Sent Successfully");
       notify();
      
       reset();
     }
   };
  return (
    <>
      <section className="contact_sec">
        <HomeBanner
          title={"Discover the Power of BluelineMD for Your Practice"}
          // heading={data?.heroBanner.heading}
          // strong={data?.heroBanner.strong}
          content={[
            "Share a bit about yourself, and we’ll connect you with a BluelineMD expert. They will provide an in-depth demonstration of our product, answer any questions, and show you how healthcare providers, office managers, and billers utilize BluelineMD to elevate their practice.",
          ]}
          // btnText={data?.heroBanner.btnText}
          // btnLink={data?.heroBanner.btnLink}
          img={contact}
        />
      </section>
      <div className="contact_area overflow-hidden ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 contact-form-box wow animate__animated animate__fadeInLeft">
              <div className="content">
                {/* <form className="mt-4" onSubmit={handleSubmit}> */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="row">

                <div className="col-md-6">
                <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
                </div>
                <div className="col-md-6"> <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div></div>
                <div className="col-md-12">
                <div className="mb-3">
        <input
          type="tel"
          className="form-control"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Phone Number is required",
          })}
        />
        {errors.phone && <p className="error">{errors.phone.message}</p>}
      </div>
                </div>
                <div className="col-md-12">
                <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Message"
          rows="3"
          {...register("message", {
            required: "Message is required",
          })}
        />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>
                </div>


                </div>
                
     

     

      

      

      <button type="submit" className="btn_primary w-100">
        Submit
      </button>
    </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
