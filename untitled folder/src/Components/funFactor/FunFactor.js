import React, { useState } from "react";
import "./funFactor.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const FunFactor = () => {
  const [count, setCount] = useState(false);

  return (
    <>
      <div class="happyClient fun-factor-area overflow-hidden">
        <div class="container">
          <div class="fun-fact-items default-padding">
            <div class="row gy-5 wow animate__animated animate__zoomIn">
              <div class="col-lg-3 col-md-6 item">
                <div class="fun-fact">
                  <div class="icon">
                    <i class="flaticon-medal"></i>
                  </div>
                  <div class="info">
                    <div class="timer">
                      <ScrollTrigger
                        onEnter={() => setCount(true)}
                        onExit={() => setCount(false)}
                      >
                        {count && (
                          <>
                            <CountUp
                              start={0}
                              end={30}
                              duration={2}
                              delay={0}
                            />
                            +
                          </>
                        )}
                      </ScrollTrigger>
                    </div>
                    <span class="medium">Happy Clients</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 item">
                <div class="fun-fact">
                  <div class="icon">
                    <i class="flaticon-help"></i>
                  </div>
                  <div class="info">
                    <div class="timer">
                      <ScrollTrigger
                        onEnter={() => setCount(true)}
                        onExit={() => setCount(false)}
                      >
                        {count && (
                          <>
                            <CountUp
                              start={0}
                              end={30}
                              duration={2}
                              delay={0}
                            />
                            +
                          </>
                        )}
                      </ScrollTrigger>
                    </div>
                    <span class="medium">Finished Project</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 item">
                <div class="fun-fact">
                  <div class="icon">
                    <i class="flaticon-customer-service"></i>
                  </div>
                  <div class="info">
                    <div class="timer">
                      <ScrollTrigger
                        onEnter={() => setCount(true)}
                        onExit={() => setCount(false)}
                      >
                        {count && (
                          <>
                            <CountUp
                              start={0}
                              end={20}
                              duration={2}
                              delay={0}
                            />
                            +
                          </>
                        )}
                      </ScrollTrigger>
                    </div>
                    <span class="medium">Skilled Experts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactor;
