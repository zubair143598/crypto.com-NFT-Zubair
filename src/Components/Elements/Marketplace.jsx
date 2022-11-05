import React from "react";
import { useLocation, Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { GrShare } from "react-icons/gr";

const Marketplace = () => {
  const location = useLocation();
  console.log(location.state);
  const value = location.state;
  // const { img,img2,text1,img3,title,text2,text3,price,text4,time,bit,
  // } = state;

  return (
    <div className="Marketplace-section  bg-white">
      <div className="container ">
        <div className="row">
          <div className="col-md-4 ">
            <div className="img1">
              <img src={value.img} className="w-100" alt="" />
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-center border p-3">
              <p className="fw-bold mb-0">View Crypto.org Chain details</p>
              <GrShare className="" />
            </div>
          </div>
          <div className="col-md-5 col2">
            <a className="text-decoration-none" href="">
              Back
            </a>
            <p>
              <AiOutlineHeart size={35} /> 4{" "}
              <BsFillEyeFill className="mx-2" size={35} /> 116{" "}
              <FaShare className="mx-3" size={25} />
              Share
            </p>
            <p>
              Chain: <span className="fw-bold">Polygon</span>
            </p>

            <div className="row">
              <div className="col-md-4 d-flex">
                <div className="position-relative">
                  <img src={value.img2} className="rounded-5" alt="" />
                  <img
                    src={value.img3}
                    className="position-absolute"
                    style={{ bottom: "0", right: "0" }}
                    alt=""
                  />
                </div>
                <div >
                  <p className="ms-3 m-0 p-0 text-muted">Creator</p>
                  <p className="ms-3 m-0 p-0">{value.text1}</p>
                </div>
              </div>
              <div className="col-md-4">
                <p>0x5b</p>
              </div>
              <div className="col-md-4 d-flex">
                <div className="position-relative">
                  <img src={value.img2} className="rounded-5" alt="" />
                  <img
                    src={value.img3}
                    className="position-absolute"
                    style={{ bottom: "0", right: "0" }}
                    alt=""
                  />
                </div>
                <div >
                  <p className="ms-3 m-0 p-0 text-muted">Collection</p>
                  <p className="ms-3 m-0 p-0">{value.text1}</p>
                </div>
              </div>
            </div>

            <h2>
              {value.title}{" "}
              <span
                className="border p-2 text-muted rounded-5"
                style={{ fontSize: "15px" }}
              >
                MarketPlace
              </span>
            </h2>
            <div className="row">
              <div className="col-md-3">
                <p>Current Bit</p>
                <p className="">
                  $ <span className="fs-1 ps-0 fw-bolder"> 1</span>
                </p>
              </div>
              <div
                className="col-md-6"
                style={{ borderLeft: "2px solid #e3e3e3FF" }}
              >
                <p>Auction END IN</p>
                <h3>Timer</h3>
              </div>
            </div>
            <div className="d-flex">
              <p
                className=" p-2 ms-3 mt-3 rounded-3"
                style={{ color: "#1199fa", border: "2px solid #1199fa" }}
              >
                Gaming
              </p>
              <p
                className=" p-2 ms-3 mt-3 rounded-3"
                style={{ color: "#1199fa", border: "2px solid #1199fa" }}
              >
                Sport
              </p>
              <p
                className=" p-2 ms-3 mt-3 rounded-3"
                style={{ color: "#1199fa", border: "2px solid #1199fa" }}
              >
                Cross Chain
              </p>
            </div>
            <div className="">
              <ul className="d-flex list-unstyled">
                <li className="fw-bold">Ownership</li>
                <li className="ms-5 fw-bold">History</li>
                <li className="ms-5 fw-bold">Bids</li>
                <li className="ms-5 fw-bold">Offers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 shd justify-content-between align-items-center d-flex border mt-5">
            <div className="d-flex align-items-center d-flex">
            <img src={value.img} style={{width:"15%"}} alt="" />
            <h3 className="ms-3">{value.title}</h3>
            </div>
            <button className="rounded-3 placeBit" 
            style={{width:"14rem"}}
            >Place a bit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
