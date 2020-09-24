import React from "react";

const data = [
  {
    heading: "For efficient home working",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg",
  },
  {
    heading: "Stationery & office supplies",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OP/Dashboard/D14264916_IN_Printers_OP_GW_revamp_nov19_dashbord_Card_1x_5._SY304_CB444949569_.jpg",
  },
  {
    heading: "Masks, sanitizers & more",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/PSS_260x260._SY304_CB429046195_.jpg",
  },
  {
    heading: "Up to 45% off | Air conditioners",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/GWdesktopcards/Desktop-category-card-adapt_379x304._SY304_CB448536033_.jpg",
  },
];

function HomeWorking() {
  return (
    <div className="homeWorking container-fluid">
      <div className="row">
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className="product__pointer col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 bg-white border mt-2"
            >
              <h4 className="font-weight-bold">{value.heading}</h4>
              <div className="homeWorking__img">
                <img src={value.image} alt="eff1" className="img-fluid" />
              </div>
              <small className="text-primary product__pointer">See more</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeWorking;
