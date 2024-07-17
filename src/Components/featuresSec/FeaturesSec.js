import React from "react";
import "./featuresSec.css";
const FeaturesSec = ({ heading, content, tiles }) => {
  return (
    <>
      <div className="features-area default_padding">
        <div className="section_heading">
          <h2>{heading}</h2>
          <h4>{content}</h4>
        </div>

        <div className="container">
          <div className="row">
            {tiles.map((items) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6 item-grid">
                    <div className="item wow animate__animated animate__fadeInUp">
                      <h5>
                        <a href="#">{items.title}</a>
                      </h5>
                      <p>{items.description}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSec;
