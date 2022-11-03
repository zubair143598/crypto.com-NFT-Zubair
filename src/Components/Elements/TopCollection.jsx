import React from "react";
import Carousel from "react-bootstrap/Carousel";

const TopCollection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,

      // slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="TopCollection-section">
<div className="d-flex justify-content-between">
            <div>
              <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img
                    src="./Assists/10001.png"
                    alt="img"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="card_txt d-flex justify-content-start align-items-center">
                    
                  <img
                    src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                    className="img-fluid img_1 mx-1 w-25"
                    alt=""
                  />
                  <p className="mt-2">Art Blocks</p>
                  <img
                    src="./Assists/1.svg"
                    className="img-fluid mx-1"
                    style={{width:"15%"}}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img
                    src="assets/images/caro2.jpeg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="card_txt d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/po1.png"
                    className="img-fluid img_1 mx-1"
                    alt=""
                  />
                  <p className="mx-2">Mutant Ape Yatch</p>
                  <img
                    src="assets/images/pa1.svg"
                    className="img-fluid mx-1"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img
                    src="assets/images/caro3.jpeg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="card_txt d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/po1.png"
                    className="img-fluid img_1 mx-1"
                    alt=""
                  />
                  <p className="mx-2">Meebits</p>
                  <img
                    src="assets/images/pa1.svg"
                    className="img-fluid mx-1"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img
                    src="assets/images/caro4.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="card_txt d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/po1.png"
                    className="img-fluid img_1 mx-1"
                    alt=""
                  />
                  <p className="mx-2">Board Ape Yatch</p>
                  <img
                    src="assets/images/pa1.svg"
                    className="img-fluid mx-1"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img
                    src="assets/images/caro5.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="card_txt d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/po1.png"
                    className="img-fluid img_1 mx-1"
                    alt=""
                  />
                  <p className="mx-2">Otherdeed For</p>
                  <img
                    src="assets/images/pa1.svg"
                    className="img-fluid mx-1 "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          </div>

  );
};

export default TopCollection;
