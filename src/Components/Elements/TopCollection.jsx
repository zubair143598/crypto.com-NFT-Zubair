import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopCollection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    <div className="TopCollection-section bg-black text-white">
      <div className="container-fluid" style={{marginTop:"4.2rem"}}>
        <h3 style={{marginTop:"4rem 0px 4px 4rem",paddingTop:"34px"}}>Top Collections</h3>
        <Carousel className="ms-5 " responsive={responsive}>
          <div>
            <div className="card  rounded-5 border-0 position-relative p-0 m-0">
              <div className="card-body m-0 p-0">
            <img src="./Assists/10001.png" className=" w-100"
            style={{height:"10rem"}}
            alt="" />
            </div>
            <div className="position-absolute  d-inline"
            style={{top:"120px"}}
            >
              <img src="./Assists/10007.png" className="ms-2 rounded-5" style={{width:"15%",borderRadius:"50%"}} alt="" />
              <p className="d-inline ms-3 fw-bold">Art Blocks</p>
              <img src="./Assists/1.svg" className="ms-3" alt="" />
            </div>
            </div>
          </div>

          <div>
          <div className="card rounded-5 border-0 mx-4 position-relative p-0 m-0">
              <div className="card-body m-0 p-0">
            <img src="./Assists/10002.jpeg" className=" w-100"
            style={{height:"10rem"}}
            alt="" />
            </div>
            <div className="position-absolute  d-inline"
            style={{top:"120px"}}
            >
              <img src="./Assists/10009.png" className="ms-2 rounded-5" style={{width:"15%",borderRadius:"50%"}} alt="" />
              <p className="d-inline ms-3 fw-bold">Mutant Ape Yacht</p>
              <img src="./Assists/1.svg" className="ms-3" alt="" />
            </div>
            </div>
          </div>

          <div>
          <div className="card rounded-5 border-0 position-relative p-0 m-0">
              <div className="card-body m-0 p-0">
            <img src="./Assists/10008.png" className=" w-100"
            style={{height:"10rem"}}
            alt="" />
            </div>
            <div className="position-absolute  d-inline"
            style={{top:"120px"}}
            >
              <img src="./Assists/10010.jpeg" className="ms-2 rounded-5" style={{width:"15%",borderRadius:"50%"}} alt="" />
              <p className="d-inline ms-3 fw-bold">Otherdeed for Otherside</p>
              <img src="./Assists/1.svg" className="ms-3" alt="" />
            </div>
            </div>
          </div>


          <div>
            <div className="card rounded-5 border-0 mx-3 position-relative p-0 m-0">
              <div className="card-body m-0 p-0">
            <img src="https://d2vi0z68k5oxnr.cloudfront.net/b5b3c713-1458-4baa-9792-aec580b83928/original.jpeg?d=lg-cover" className=" w-100"
            style={{height:"10rem"}}
            alt="" />
            </div>
            <div className="position-absolute  d-inline"
            style={{top:"120px"}}
            >
              <img src="https://d2vi0z68k5oxnr.cloudfront.net/75c36624-6eb1-487f-aa5a-1de8c3b71538/original.jpeg?d=sm-logo" className="ms-2 rounded-5" style={{width:"15%",borderRadius:"50%"}} alt="" />
              <p className="d-inline ms-3 fw-bold">Azuki</p>
              <img src="./Assists/1.svg" className="ms-3" alt="" />
            </div>
            </div>
            </div>

          <div>
          <div className="card rounded-5 border-0 position-relative p-0 m-0">
              <div className="card-body m-0 p-0">
            <img src="https://d2vi0z68k5oxnr.cloudfront.net/3c21cdf8-0603-48c8-a1d4-6e7a1bb4228c/original.png?d=lg-cover" className=" w-100"
            style={{height:"10rem"}}
            alt="" />
            </div>
            <div className="position-absolute  d-inline"
            style={{top:"120px"}}
            >
              <img src="./Assists/10001.jpeg" className="ms-2 rounded-5" style={{width:"15%",borderRadius:"50%"}} alt="" />
              <p className="d-inline ms-3 fw-bold">Doodles</p>
              <img src="./Assists/1.svg" className="ms-3" alt="" />
            </div>
            </div>  
          </div>


          <div>
            
          <div className="card rounded-5 mx-3 border-0 position-relative p-0 m-0">
              <div className="card-body m-0 p-0">
            <img src="https://d2vi0z68k5oxnr.cloudfront.net/3d1c8681-5943-456d-9606-823a937b9597/original.png?d=lg-cover" className=" w-100"
            style={{height:"10rem"}}
            alt="" />
            </div>
            <div className="position-absolute  d-inline"
            style={{top:"120px"}}
            >
              <img src="https://d2vi0z68k5oxnr.cloudfront.net/75c36624-6eb1-487f-aa5a-1de8c3b71538/original.jpeg?d=sm-logo" className="ms-2 rounded-5" style={{width:"15%",borderRadius:"50%"}} alt="" />
              <p className="d-inline ms-3 fw-bold">The sand box</p>
              <img src="./Assists/1.svg" className="ms-3" alt="" />
            </div>
            </div>
          </div>


          <div>
          <div className="card rounded-5 mx-3 border-0 position-relative p-0 m-0">
              <div className="card-body m-0 p-0">
            <img src="./Assists/10004.jpeg" className=" w-100"
            style={{height:"10rem"}}
            alt="" />
            </div>
            <div className="position-absolute  d-inline"
            style={{top:"120px"}}
            >
              <img src="https://d2vi0z68k5oxnr.cloudfront.net/75c36624-6eb1-487f-aa5a-1de8c3b71538/original.jpeg?d=sm-logo" className="ms-2 rounded-5" style={{width:"15%",borderRadius:"50%"}} alt="" />
              <p className="d-inline ms-3 fw-bold">Azuki</p>
              <img src="./Assists/1.svg" className="ms-3" alt="" />
            </div>
            </div>
          </div>

          <div>
          <div className="card rounded-5 border-0 position-relative p-0 m-0">
              <div className="card-body m-0 p-0">
            <img src="https://d2vi0z68k5oxnr.cloudfront.net/b5b3c713-1458-4baa-9792-aec580b83928/original.jpeg?d=lg-cover" className=" w-100"
            style={{height:"10rem"}}
            alt="" />
            </div>
            <div className="position-absolute  d-inline"
            style={{top:"120px"}}
            >
              <img src="https://d2vi0z68k5oxnr.cloudfront.net/75c36624-6eb1-487f-aa5a-1de8c3b71538/original.jpeg?d=sm-logo" className="ms-2 rounded-5" style={{width:"15%",borderRadius:"50%"}} alt="" />
              <p className="d-inline ms-3 fw-bold">Azuki</p>
              <img src="./Assists/1.svg" className="ms-3" alt="" />
            </div>
            </div>
          </div>

        </Carousel>
        <div>
          <h3 className="mt-4">Explore</h3>
          </div>
      </div>
    </div>
  );
};

export default TopCollection;
