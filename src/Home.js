import React from "react";
function Home() {
  return (
    <>
      <div className="intro">
        <h1>Sherman Auto link</h1>
        <h3>Nayabazar,Kathmandu</h3>
      </div>
      <div className="Main-slide">
        <div className="slider">
          <h1 className="title">Trending right now!!</h1>
          <i className="fas fa-chevron-left prev"></i>
          <i className="fas fa-chevron-right next"></i>
          <div className="img-slider">
            <div className="post">
              <img src="./images/slide1.jpg" className="slider-image" alt="a" />
            </div>
            <div className="post">
              <img src="./images/slide2.jpg" className="slider-image" alt="a" />
            </div>
            <div className="post">
              <img src="./images/slide3.jpg" className="slider-image" alt="a" />
            </div>
            <div className="post">
              <img src="./images/slide4.jpg" className="slider-image" alt="a" />
            </div>
            <div className="post">
              <img src="./images/slide5.jpg" className="slider-image" alt="a" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
