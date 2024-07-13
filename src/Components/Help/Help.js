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

                <h4>Here to help you</h4>
                <p>
                  Our mission is simple: help you make your practice more
                  successful. Right from the start, we make it easy to get up
                  and running with Kareo. And that support is ongoing to make
                  sure you're always getting the most out of our solutions.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <ul className="content">
                <li>
                  <img src={coaching} alt="" />
                  <div>
                    <h5>Free coaching</h5>
                    <p>
                      For the first 60 days, you'll have your own Kareo success
                      coach - at no extra cost. Get the one-on-one attention and
                      support you need right from the start.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={coaching} alt="" />
                  <div>
                    <h5>Free coaching</h5>
                    <p>
                      For the first 60 days, you'll have your own Kareo success
                      coach - at no extra cost. Get the one-on-one attention and
                      support you need right from the start.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={coaching} alt="" />
                  <div>
                    <h5>Free coaching</h5>
                    <p>
                      For the first 60 days, you'll have your own Kareo success
                      coach - at no extra cost. Get the one-on-one attention and
                      support you need right from the start.
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
