import React from "react";

function HomeEssentials() {
  return (
    <div className="col-md-6 col-sm-12 col-lg-3 col-xl-3 mt-3 bg-white border">
      <div className="mt-1">
        <h5 className="text-center font-weight-bold">
          Home essentials | Amazon Brands & more
        </h5>
        <div className="row ">
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg"
              alt="h1"
              width="125px"
              height="120px"
              className="img-fluid"
            />
            <small>Bedsheets, curtains</small>
          </div>
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg"
              alt="h2"
              width="125px"
              className="img-fluid"
              height="120px"
            />
            <small>Cloth organizers</small>
          </div>
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg"
              alt="h1"
              width="125px"
              height="120px"
              className="img-fluid"
            />
            <small>Wall stickers & clocks</small>
          </div>
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg"
              alt="h1"
              width="125px"
              height="120px"
              className="img-fluid"
            />
            <small>Smart bulbs</small>
          </div>
        </div>
        <small className="text-primary product__pointer">See more...</small>
      </div>
    </div>
  );
}

export default HomeEssentials;
