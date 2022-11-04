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
    <div className="TopCollection-section">
      <div className="container-fluid">
        <Carousel responsive={responsive}>
          <div>
            <div className="card position-relative">
              <div className="card-body p-0">
            <img src="./Assists/10001.png" className=" w-100" alt="" />
            .
            </div>
            </div>
          </div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div>Item 6</div>
          <div>Item 7</div>
          <div>Item 8</div>
        </Carousel>
        
      </div>
    </div>
  );
};

export default TopCollection;
