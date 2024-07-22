import React from "react";
import { Container } from "react-bootstrap";
import "./privacyPolicy.css";
const PrivacyPolicy = () => {
  return (
    <>
      <section>
        <Container>
          <div class="mt-5 pt-5 container  staticPage contentPage">
            <h4>
              BluelineMd is committed to protecting your privacy. This Privacy
              Policy outlines how we collect, use, and protect your information
              when you use our website and services.
            </h4>
            <h3> Information We Collect</h3>
            <ol>
              <li>
                {" "}
                Personal Information: We may collect personal information such
                as your name, email address, phone number, and other contact
                details when you register for an account or request a demo.
              </li>
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
