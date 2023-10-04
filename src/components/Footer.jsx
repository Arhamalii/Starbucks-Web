import React from "react";
import logo from "../assets/logo.png";
let footerStyles = "lg:w-1/4 xl:w-1/4 md:w-1/2 w-full px-4 flex flex-col";
const footerLinks = [
  {
    category: "CATEGORIES",
    links: ["Sea Foods", "Chinese", "Italian", "Springs Food"],
  },
  {
    category: "Services",
    links: ["Delivery", "Dining", "Reservation", "Events"],
  },
  {
    category: "CTA",
    links: ["Support", "Reviews", "Contact Us", "Book Now"],
  },
  {
    category: "Accounts",
    links: ["Facebook", "Linkedin", "Github", "Discord"],
  },
];
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto flex items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col justify-center">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left xl:pl-[60px] lg:pl-[26px]">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo} className="w-40" />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center  w-[80%]">
          <div className={footerStyles}>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              {footerLinks[0].category}
            </h2>
            <nav className="list-none mb-10">
              {footerLinks.map(
                (item, i) =>
                  item.category === "CATEGORIES" &&
                  item.links.map((links) => (
                    <li key={links}>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        {links}
                      </a>
                    </li>
                  ))
              )}
            </nav>
          </div>
          <div className={footerStyles}>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              {footerLinks[1].category}
            </h2>

            <nav className="list-none mb-10">
              {footerLinks.map(
                (item, i) =>
                  item.category === "Services" &&
                  item.links.map((links) => (
                    <li key={links}>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer ">
                        {links}
                      </a>
                    </li>
                  ))
              )}
            </nav>
          </div>
          <div className={footerStyles}>
            <h2 className="title-font  font-medium text-gray-900 tracking-widest text-sm mb-3">
              {footerLinks[2].category}
            </h2>
            <nav className="list-none mb-10">
              {footerLinks.map(
                (item, i) =>
                  item.category === "CTA" &&
                  item.links.map((links) => (
                    <li key={links}>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        {links}
                      </a>
                    </li>
                  ))
              )}
            </nav>
          </div>
          <div className={footerStyles}>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 ">
              {footerLinks[3].category}
            </h2>
            <nav className="list-none mb-10">
              {footerLinks.map(
                (item, i) =>
                  item.category === "Accounts" &&
                  item.links.map((links) => (
                    <li key={links}>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        {links}
                      </a>
                    </li>
                  ))
              )}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
