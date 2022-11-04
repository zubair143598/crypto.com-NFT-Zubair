import React from "react";
import { useLocation } from "react-router-dom";

const Marketplace = () => {
  const { state } = useLocation();
  console.log(state);
  const { img,img2,text1,img3,title,text2,text3,price,text4,time,bit,
  } = state;

  return (
    <div className="Marketplace-sectionn">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
