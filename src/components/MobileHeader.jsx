import React from "react";
import { Link } from "react-router-dom";
export const MobileHeader = ({ active, setActive, setMobileOpen }) => {
  return (
    <div className="absolute w-full h-[200px] left-5 top-[100px] bg-white">
      <>
        <Link
          to="/"
          onClick={() => {
            setMobileOpen(false);
            setActive("Home");
          }}
        >
          <h5 className={`text-xl ${active === "Home" && "text-[#BB84E8]"}`}>
            Home
          </h5>
        </Link>
        {/* <Link
          to="/about"
          onClick={() => {
            setActive("About");
            setMobileOpen(false);
          }}
        >
          <h5 className={`text-xl ${active === "About" && "text-[#BB84E8]"}`}>
            About
          </h5>
        </Link> */}
        {/* <Link
          to="/tours"
          onClick={() => {
            setActive("Tours");
            setMobileOpen(false);
          }}
        >
          <h5 className={`text-xl ${active === "Tours" && "text-[#BB84E8]"}`}>
            Tours
          </h5>
        </Link> */}
        {/* <Link
          to="/contact"
          onClick={() => {
            setActive("Contact");
            setMobileOpen(false);
          }}
        >
          <h5 className={`text-xl ${active === "Contact" && "text-[#BB84E8]"}`}>
            Contact
          </h5>
        </Link> */}
      </>
    </div>
  );
};
