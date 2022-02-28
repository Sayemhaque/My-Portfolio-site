import React from "react";

export const ContactMe = () => {
  return (
    <>
      <section className="contact" id="/contact">
      <div className="container bg-dark py-4 contact-form">
        <h4 className="heading-text text-center py-4">Connect with Me</h4>
        <form action="mailto:ssayem846@gamil.com" method="post" enctype="text/plain">
          <div className="row text-center align-items-center">
            <div className=" col-md-6">
              <div className="from-group mb-4">
                <label className="mx-2 fw-bold">Name :</label>
                <input type="text" className="bg-second" placeholder="Enter your Name" />
              </div>
              <label className="mx-2 fw-bold">Email :</label>
              <input className="bg-second" type="text" placeholder="Enter your email.." />
            </div>
            <div className=" col-md-4">
              <p className=" my-4 fw-bold">Massage :</p>
              <textarea className="bg-second" name="" id="" cols="30" rows="10">
                Hello Sayem.......
              </textarea>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit"  className="btn fw-bold btn-dark border text-white">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      </section>
    </>
  );
};
