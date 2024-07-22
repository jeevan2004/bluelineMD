import React from "react";
import "./help.css";
import heart from "../../assets/image/heart.svg";
import coaching from "../../assets/image/coaching.png";
const Help = () => {
  return (
    <>
      <section className="help default_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image">
                <img src={heart} alt="" />

                <h4>Here to Support Your Success </h4>
                <p>
                  Our core purpose is clear: we're dedicated to enhancing your
                  practice's performance. From day one, we ensure a seamless
                  integration of our systems into your workflow. Our commitment
                  to your success doesn't stop there - we provide continuous
                  support to help you maximise the potential of our innovative
                  solutions.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <ul className="content">
                <li>
                  <img src={coaching} alt="" />
                  <div>
                    <h5> Personalized Onboarding</h5>
                    <p>
                      Personalized Onboarding For the first 30 days, you'll have
                      access to a dedicated BluelineMD integration specialist -
                      included in your package. Receive tailored guidance to
                      ensure a smooth transition and maximise your success.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={coaching} alt="" />
                  <div>
                    <h5> Expert Support </h5>
                    <p>
                      Expert Support Our team of experienced BluelineMD advisors
                      is available for the initial 45 days to provide one-on-one
                      assistance. Get the personalised attention you need to
                      optimise your billing processes.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={coaching} alt="" />
                  <div>
                    <h5>Complimentary Consultation</h5>
                    <p>
                      Complimentary Consultation Enjoy a free 60-day
                      consultation period with a BluelineMD efficiency expert.
                      Benefit from professional insights and support to
                      streamline your operations from day one.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
