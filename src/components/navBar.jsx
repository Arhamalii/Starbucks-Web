import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import logo from "../assets/logo.png";

const navLinks = [
  {
    label: "Home",
    path: "",
  },
  {
    label: "Product",
    path: "",
  },
  {
    label: "Faq",
    path: "",
  },
  {
    label: "Contact",
    path: "",
  },
];

window.addEventListener("scroll", function () {
  const navigationBar = document.getElementById("nav");
  if (window.scrollY > 600) {
    navigationBar.classList.add("shadow-xl");
  } else {
    navigationBar.classList.remove("shadow-xl");
  }
});
const navBar = () => {
  const [open, setOpen] = useState(false);
  const hadnleMemu = () => {
    setOpen(!open);
  };
  return (
    <header>
      <nav
        className="w-full bg-main flex justify-between items-center px-16 max-sm:px-10 py-3 fixed top-0 right-0 z-10 "
        id="nav"
      >
        <div>
          <a href="#">
            <img src={logo} alt="logo" className="w-[180px] " />
          </a>
        </div>
        <ul className=" gap-14 hidden md:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.path}
                className="text-primary font-semibold ease-in-out duration-700 transition-all   hover:text-secondary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ease-in-out duration-700 md:hidden">
          {!open ? (
            <AiOutlineMenu
              className="w-8 h-8 text-primary font-semibold  block md:hidden"
              onClick={hadnleMemu}
            />
          ) : (
            <AiOutlineClose
              className="w-8 h-8 text-primary font-semibold md:hidden"
              onClick={hadnleMemu}
            />
          )}
        </div>
      </nav>
      {open && (
        <div className=" transition-all ease-in-out duration-1000 fixed w-full h-max z-50 bg-secondary rounded-b-xl top-[100vh]${open && top-0} ">
          <ul className=" block w-full px-2 py-2 ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.path}
                  className="text-main font-semibold ease-in-out duration-700 transition-all px-6 py-6 w-full  block hover:text-yellow-50  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default navBar;
