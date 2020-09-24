import React from "react";

function Donation() {
  return (
    <div className="col-md-6 col-sm-12 col-lg-3 col-xl-3 mt-3 bg-white border">
      <div className="mt-1">
        <h5 className="text-center font-weight-bold">
          Donation, recharges, bills, medicines & more
        </h5>
        <div className="row">
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/Covid/Donation_186x116._SY116_CB435243930_.jpg"
              alt="h1"
              width="125px"
              height="120px"
              className="img-fluid"
            />
            <small>COVID-19 Donations</small>
          </div>
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Ankit/gw/desktopcard/recharge_186_116._SY116_CB448565141_.jpg"
              alt="h2"
              width="125px"
              className="img-fluid"
              height="120px"
            />
            <small>Mobile Recharges</small>
          </div>
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Ankit/gw/desktopcard/bills_186_116._SY116_CB448565146_.jpg"
              alt="h1"
              width="125px"
              height="120px"
              className="img-fluid"
            />
            <small>Bills</small>
          </div>
          <div className="col-sm-6 col-6 product__pointer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonPay/Medicines_Icon_186x116_R._SY116_CB420120618_.jpg"
              alt="h1"
              width="125px"
              height="120px"
              className="img-fluid"
            />
            <small>Medicines</small>
          </div>
        </div>
        <small className="text-primary product__pointer">See more...</small>
      </div>
    </div>
  );
}

export default Donation;
