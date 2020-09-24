import React from "react";

function Laptop() {
  return (
    <div className="col-md-6 col-sm-12 col-lg-3 col-xl-3 mt-3 bg-white border">
      <div className="mt-1">
        <img
          src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
          alt="laptop_img"
          className="img-fluid mb-4 product__pointer"
          height="300px"
        />

        <small className="text-primary product__pointer">See more...</small>
      </div>
    </div>
  );
}

export default Laptop;
