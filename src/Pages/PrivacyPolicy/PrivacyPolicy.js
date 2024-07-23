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
              <li>
                {" "}
                Usage Data: We may collect information about how you use our
                website, including your IP address, browser type, and pages
                visited.
              </li>
            </ol>
            <h3> How We Use Your Information</h3>
            <ol>
              <li>
                {" "}
                Providing Services: We use your information to provide and
                improve our services, including processing transactions and
                responding to your inquiries.
              </li>
              <li>
                {" "}
                Communication: We may use your contact information to send you
                updates, newsletters, and promotional materials. You can opt out
                of these communications at any time.
              </li>
              <li>
                {" "}
                Analytics: We use usage data to analyse trends and improve our
                website and services.
              </li>
            </ol>
            <h3> Information Sharing</h3>
            <ol>
              <li>
                {" "}
                Third-Party Service Providers: We may share your information
                with third-party service providers who assist us in operating
                our website and services.
              </li>
              <li>
                {" "}
                Legal Compliance: We may disclose your information if required
                by law or to protect our rights and property.
              </li>
            </ol>
            <h3> Data Security</h3>
            <p className="mb-4">
              We implement appropriate security measures to protect your
              information from unauthorised access, alteration, disclosure, or
              destruction.
            </p>
            <h3> Your Rights</h3>
            <ol>
              <li>
                Access and Correction: You have the right to access and correct
                your personal information held by us.
              </li>
              <li>
                {" "}
                Data Deletion: You can request the deletion of your personal
                information by contacting us at info@bluelinemd.com
              </li>
            </ol>
            <h3> Cookies</h3>
            <p className="mb-4">
              Our website uses cookies to enhance your user experience. You can
              manage your cookie preferences through your browser settings.
            </p>
            <h3>Changes to Privacy Policy</h3>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page, and your continued use of our services
              after such changes constitute your acceptance of the new policy.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at info@bluelinemd.com.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
