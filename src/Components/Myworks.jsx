import React from "react";
import WORKING from "../Images/FireShot Capture 007 - FoodZone - sayemhaque.github.io.png";
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
          <div className="col-6 col-md-4">
            <div data-aos="fade-right">
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
          <div className="col-6 col-md-4">
            <div data-aos='fade-in'>
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
          <div className="col-6 col-md-4 ">
            <div data-aos="fade-left">
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
