import React from "react";
import { Link } from "react-router-dom";

function HomeProductCards() {
  const linkStyle = {
    color: "black",
  };

  return (
    <div className="col-md-6 col-sm-12 col-lg-3 col-xl-3 mt-3 bg-white border">
      <div className="mt-1">
        <h5 className="text-center font-weight-bold pb-4">
          Top picks for your home
        </h5>
        <div className="row">
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_186x116_1._SY116_CB433700928_.jpg"
              alt="h1"
              width="125px"
              height="120px"
              className="img-fluid"
            />
            <Link to="/products/dishwashers" style={linkStyle}>
              <small>Dishwasher</small>
            </Link>
          </div>
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_QC_Washing-machine_186x116._SY116_CB432544816_.jpg"
              alt="h2"
              width="125px"
              className="img-fluid"
              height="120px"
            />
            <Link to="/products/washingmachines" style={linkStyle}>
              <small>Washing Machines</small>
            </Link>
          </div>
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/April/MSO/DCQC_TV_186x116_5._SY116_CB434051404_.jpg"
              alt="h1"
              width="125px"
              height="120px"
              className="img-fluid"
            />
            <Link to="/products/televisions" style={linkStyle}>
              <small>Televisions</small>
            </Link>
          </div>
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Ref_graphic_desktop_QC_186x116._SY116_CB429411324_.png"
              alt="h1"
              width="125px"
              height="120px"
              className="img-fluid"
            />
            <Link to="/products/refrigerators" style={linkStyle}>
              <small>Refrigerators</small>
            </Link>
          </div>
        </div>
        <small className="text-primary product__pointer">See more...</small>
      </div>
    </div>
  );
}

export default HomeProductCards;
