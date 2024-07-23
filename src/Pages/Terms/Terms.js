import React from "react";
import "./terms.css";
const Terms = () => {
  return (
    <>
      <div class="container pt-5 mt-5 contentPage staticPage">
        {" "}
        <h1> Introduction</h1>{" "}
        <p>
          Welcome to BluelineMd. These Terms and Conditions govern your use of
          our website and services. By accessing or using BluelineMd, you agree
          to comply with and be bound by these terms. If you do not agree,
          please do not use our website or services.
        </p>
        <h3> Use of Services</h3>
        <ol>
          <li>
            {" "}
            Eligibility: You must be at least 18 years old to use our services.
          </li>
          <li>
            {" "}
            Account Responsibility: You are responsible for maintaining the
            confidentiality of your account information and for all activities
            that occur under your account.
          </li>
          <li>
            Prohibited Activities: You agree not to:
            <ul>
              <li> - Use our services for any unlawful purpose.</li>
              <li>
                {" "}
                - Attempt to gain unauthorised access to our systems or
                networks.
              </li>
              <li>
                {" "}
                - Engage in any activity that disrupts or interferes with our
                services.
              </li>
            </ul>
          </li>
        </ol>
        <h3> Intellectual Property</h3>
        <p className="mb-4">
          All content on the BluelineMd website, including text, graphics,
          logos, and software, is the property of BluelineMd or its content
          suppliers and is protected by intellectual property laws. You may not
          use any of our content without prior written permission.
        </p>
        <h3> Privacy</h3>
        <p className="mb-4">
          Your use of our services is also governed by our Privacy Policy. By
          using our website, you consent to the collection and use of your
          information as described in the Privacy Policy.
        </p>
        <h3> Disclaimers</h3>
        <ol>
          <li>
            Service Availability: We do not guarantee that our services will be
            available at all times or without interruption.
          </li>
          <li>
            Accuracy of Information: While we strive to provide accurate and
            up-to-date information, we do not warrant the completeness or
            accuracy of any information on our website.
          </li>
        </ol>
        <h3>Limitation of Liability </h3>
        <p className="mb-4">
          BluelineMd will not be liable for any indirect, incidental, special,
          or consequential damages arising from your use of our services.
        </p>
        <h3>Modifications to Terms</h3>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Changes will
          be posted on this page, and your continued use of our services after
          such changes constitute your acceptance of the new terms.
        </p>
        <h3>Governing Law</h3>
        <p className="mb-4">
          These terms and your use of our services are governed by the laws of
          [Your Country/State]. Any disputes arising under these terms shall be
          subject to the exclusive jurisdiction of the courts in [Your
          Country/State].
        </p>
        <h3> Contact Us</h3>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at info@bluelinemd.com.
        </p>
      </div>
    </>
  );
};

export default Terms;
