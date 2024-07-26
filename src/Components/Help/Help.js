import React from "react";
import "./help.css";
import heart from "../../assets/image/heart.svg";
import coaching from "../../assets/image/coaching.png";
import handshak from "../../assets/image/handshak.png";
import expert_support from "../../assets/image/expert_support.png";
import cummiuity from "../../assets/image/cummiuity.png";

const Help = () => {
  return (
    <>
      <section className="help default_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image">
                <img src={handshak} alt="" />

                <h4>Dedicated to your success </h4>
                <p>
                  Our mission is straightforward: we're committed to elevating
                  your practice's performance. From the very start, we guarantee
                  a smooth integration of our systems into your workflow. Our
                  dedication to your success is ongoing - offering continuous
                  support to help you fully leverage our innovative solutions.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <ul className="content mt-md-0 mt-4">
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
                  <img src={expert_support} alt="" />
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
                  <img src={cummiuity} alt="" />
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
