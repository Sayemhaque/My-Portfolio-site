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
            <p className=" description-text ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, deleniti. Tenetur repudiandae quo, similique nemo
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quos sed corporis quod, iusto reprehenderit magni mollitia sint suscipit ex?
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
