import React from "react";
import "./About.css";
export const AboutMe = () => {
  return (
    <div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <div className="container">
          <div className="row border  justify-content-center bg-dark mx-2">
            <div className="col-md-7 text-dark">
              <div className="aboutmetext">
                <h1 className="text-center heading-text">
                  Hi ,<br></br> i am sayem
                </h1>
              </div>
            </div>
            <div className="col-md-10">
            <p className=" description-text text-center">
             I am a React Js Developer.I love using React to make website user Frienly and fast.I have 1year of experiences using react js.I can translate design into hight quality code using react.I Use Redux for state management.I love to make reponsive and user interactive with tailwind css.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
