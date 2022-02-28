import React from "react";
import Typewriter from "typewriter-effect";

import myImg from "../Images/IMG_20210607_160007-removebg-preview.png";
export const Home = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav_logo">
            <h4 className="h1 text-white">SaYem</h4>
          </div>
          <div className="phone">
            <h6 className="text-main">
              <i class="fas fa-phone-alt"></i> +8801954268915
            </h6>
          </div>
          <h6 className="text-main email">
            <i class="fas fa-envelope-open "></i> ssayem846@gamil.com
          </h6>
          <div className="top-btn">
            <button className="bg-main btn">Connet with Me</button>
          </div>
        </nav>
        <div className="row text-center">
          <div data-aos="zoom-in" data-aos-duration="3000">
            <div className="col-md-12">
              <h1 className="text-uppercase">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("FRONTEND WEB DEVELOPER")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("WEB DESINGER")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("REACT DEVELOPER")
                      .deleteAll()
                      .typeString("UX/UI DESINGER")
                      .deleteAll()
                      .typeString("FRONTEND WEB DEVELOPER")
                      .start();
                  }}
                />
              </h1>
              <h4 className="text-light">
                I like coding simply.i enjoy what i do
              </h4>
              <img
                src={myImg}
                className="img-fluid bg-dark my-img"
                alt=""
                style={{ height: "240px" }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
