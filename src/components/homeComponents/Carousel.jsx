import React from "react";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpg?crop=1.00xw:0.752xh;0.00160xw,0.120xh&resize=1200:*"
            className="w-full h-[30vh] md:h-[50vh]"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg/500px-Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg"
            className="w-full h-[30vh] md:h-[50vh]"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://www.cam.ac.uk/sites/default/files/styles/content-885x432/public/about-the-university/kings-8489564479-o.jpg?itok=0MziluRV"
            className="w-full h-[30vh] md:h-[50vh]"
          />
        </div>
        
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
       
      </div>
    </div>
  );
};

export default Carousel;
