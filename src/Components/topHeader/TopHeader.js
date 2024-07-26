import React from "react";
import "./topHeader.css";
const TopHeader = () => {
  return (
    <>
      <div class="top-bar-area inc-pad bg-theme text-light">
        <div class="container">
          <div class="row align-center">
            <div class="col-sm-6 info">
              <ul>
                <li>Support</li>
                <li>Help Center</li>
                <li>Live Chat</li>
              </ul>
            </div>
            <div class="col-sm-6 info-2">
              <div class="info">
                <ul>
                  <li>
                    <i class="fas fa-phone"></i> + 1234567890
                  </li>
                </ul>
              </div>
              <div class="social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
