import React from "react";
import "./latestUpdate.css";
const LatestUpdate = ({ data, btn, className }) => {
  return (
    <>
      {" "}
      <section className={`latest_update default_padding  ${className}`}>
        <div className="container">
          {/* <div className="section_heading">
            <h2>Get Paid What You're Owed</h2>
            <h4>
             Managing the revenue cycle efficiently is one of the most challenging parts of operating an independent practice. Each phase of the revenue cycle has its own unique challenges. A breakdown in one part of the process can result in wasted time and lost revenue. It is vital for the financial stability of your independent practice to have a clearly defined revenue cycle workflow that works. Not only will you receive the payments that you are owed in a timely manner, but will also reduce the burden on billing staff, keep down administrative costs, and maintain a positive rapport with your patients.
            </h4>
          </div> */}

          <div className="row">
            <div className="col-md-6">
              <div className="image">
                <img className="w-100" src={data?.img} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h4>{data?.heading}</h4>

                {data?.content.map((items) => {
                  return (
                    <>
                      <p className="mb-3">{items}</p>
                    </>
                  );
                })}
                {btn ? (
                  <button className="btn_primary">{data?.btnText}</button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestUpdate;
