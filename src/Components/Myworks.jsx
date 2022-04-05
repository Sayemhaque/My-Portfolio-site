import React from "react";
import WORKING from "../Images/FireShot Capture 007 - FoodZone - sayemhaque.github.io.png";
import WORKING2 from "../Images/FireShot Capture 015 - Instragram - sayemhaque.github.io.png";
export const Myworks = () => {
  return (
    <>
      <div className="container">
        <div data-aos="zoom-in">
          <h1 className="text-white text-center m-4 p-4 heading-text">
            My works
          </h1>
        </div>
        <div className="row py-5 g-4">
          <div className="col-md-4">
            <div data-aos="fade-up" data-aos-duration="3000">
              <div className="card bg-dark">
                <div className="card-img-top">
                  <img src={WORKING} alt="" style={{ width: "100%" }} />
                </div>
                <div className="card-body">
                  <p>Restraunt Landing page</p>
                  <a href="https://sayemhaque.github.io/Foods/">
                    <button className="btn bg-outline-dark text-white fw-bold">
                      View site
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-4">
            <div data-aos='fade-up'>
            <div className="card bg-dark">
              <div className="card-img-top">
                <img src={WORKING2} alt="" style={{ width: "100%" }} />
              </div>
              <div className="card-body">
                <p>Instragram HomePage clone </p>
                <a href="https://sayemhaque.github.io/Instragram-2.0/">
                  <button className="btn bg-outline-dark text-white fw-bold">
                    View site
                  </button>
                </a>
              </div>
            </div>
            </div>
          </div>
          <div className=" col-md-4 ">
            <div data-aos="fade-up">
              <div className="card bg-dark">
                <div className="card-img-top">
                  <img src={WORKING} alt="" style={{ width: "100%" }} />
                </div>
                <div className="card-body">
                  <p>Restraunt Landing page</p>
                  <a href="https://sayemhaque.github.io/Foods/">
                    <button className="btn bg-outline-dark text-white fw-bold">
                      View site
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
