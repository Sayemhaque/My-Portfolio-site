import React from "react";

export const Skills = () => {
  return (
    <>
      <div className="container">
        <div data-aos='zoom-in'>
          <h1 className="text-center text-capitalize heading-text m-4 p-4">
            what i use to make a website?
          </h1>
        </div>
        <div className="row gx-4 text-center">
          <div className="col-md-3  px-3">
            <div data-aos="fade-up">
              <h4 className="bg-dark text-main p-3">
                <i class="fab fa-html5"></i>HTML5
              </h4>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <div data-aos="fade-up">
              <h4 className="bg-dark text-main p-3">
                <i class="fa-brands fa-css3"></i>CSS3
              </h4>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <div data-aos="fadeup">
              <h4 className="bg-dark text-main p-3">
                <i class="fa-brands fa-js"></i>JS
              </h4>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <div data-aos="fadeup">
              <h4 className="bg-dark text-main px-100 py-3">
                <i class="fa-brands fa-bootstrap"></i>B-STRAP
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-4 text-center">
          <div className="col-md-4 px-3">
            <div data-aos="fade-up">
              <h4 className="bg-dark text-main p-3">
                <i class="fa-brands fa-react"></i>REACT JS
              </h4>
            </div>
          </div>
          <div className="col-md-4 px-3 ">
            <div data-aos="fadup">
              <h4 className="bg-dark text-main p-3">REDUX</h4>
            </div>
          </div>
          <div className="col-md-4 px-3 ">
            <div>
              <h4 className="bg-dark text-main p-3">FIGMA</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
