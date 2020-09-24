import React from "react";
import "./footer.css";
import logo from "../../Amazon_logo.png";
import LanguageIcon from "@material-ui/icons/Language";

const footerData = [
  {
    header: "Get to Know Us",
    lists: [
      "About Us",
      "Careers",
      "Press Releases",
      "Amazon Cares",
      "Gift a Smile",
    ],
  },
  {
    header: "Connect with Us",
    lists: ["Facebook", "Twitter", "Instagram"],
  },
  {
    header: "Make Money with Us",
    lists: [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Become an Affiliate",
      "Fulfilment by Amazon",
      "Advertise Your Products",
      "Amazon Pay on Merchants",
    ],
  },
  {
    header: "Let Us Help You",
    lists: [
      "COVID-19 and Amazon",
      "Your Account",
      "Returns Centre",
      "100% Purchase Protection",
      "Amazon App Download",
      "Amazon Assistant Download",
      "Help",
    ],
  },
];

const countries = [
  "Australia",
  "Brazil",
  "Canada",
  "Germany",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "Singapore",
  "Spain",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];

const footerCopyright = [
  "Conditions of Use & Sale",
  "Privacy Notice",
  "Interest-Based Ads",
  `© 1996-${new Date().getFullYear()}, Amazon.com, Inc. or its affiliates`,
];

const footerExtra = [
  { heading: "Books", links: ["Books, art", "& collectibles"] },
  {
    heading: "Amazon Web Services",
    links: ["Scalable Cloud", "Computing Services"],
  },
  {
    heading: "Audible",
    links: ["Download", "Audio Books"],
  },
  {
    heading: "DPReview",
    links: ["Digital", "Photography"],
  },
  {
    heading: "DPReview",
    links: ["Movies, TV", "& Celebrities"],
  },
  {
    heading: "Amazon Business",
    links: ["Everything For", "Your Business"],
  },
  {
    heading: "Prime Now",
    links: ["2-Hour Delivery", "on Everyday Items"],
  },
  {
    heading: "Amazon Prime Music",
    links: ["60 million songs"],
  },
];

function Footer() {
  const topHandler = () => {
    console.log("clicked");
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <div className="footer__topBtn text-center" onClick={topHandler}>
        <p>Back to top</p>
      </div>
      <div className="footer__content">
        <div className="container">
          <div className="row footer__links">
            {footerData.map((value, index, arr) => {
              return (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 text-white mt-4"
                >
                  <ul className="footer__list">
                    <li>
                      <h5 className="font-weight-bold">{value.header}</h5>
                    </li>
                    {value.lists.map((value, index, arr) => {
                      return <li key={index}>{value}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="row mt-3">
            <div className="col-md-6 pt-2 text-center">
              <img src={logo} alt="logo" height="40px" />
            </div>
            <div className="col-md-6 text-center d-flex align-items-center justify-content-center pt-2">
              <div className="footer__lang">
                <LanguageIcon className="text-white" />
                <p>English</p>
              </div>
            </div>
          </div>

          <div className="footer__country">
            {countries.map((value, index) => {
              return <small key={index}>{`${value}  `}</small>;
            })}
          </div>
        </div>
        <div className="footer__extraLinks mt-3 pt-5">
          <div className="container">
            <div className="row">
              {footerExtra.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="col-md-3 col-sm-6 col-6 text-white"
                  >
                    <ul className="footer__list">
                      <li>
                        <small className="font-weight-bold">
                          {value.heading}
                        </small>
                      </li>
                      {value.links.map((link, ind) => {
                        return (
                          <li key={ind}>
                            <small>{link}</small>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer__copyRight text-white text-center py-3">
          {footerCopyright.map((value, index) => {
            return <small key={index}>{value + " "} </small>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
