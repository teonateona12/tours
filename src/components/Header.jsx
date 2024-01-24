import React from "react";
import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import MobilHeader from "../assets/mobileHeader.svg";
import { MobileHeader } from "./MobileHeader";
import { Link } from "react-router-dom";

export const Header = ({ active, setActive }) => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between w-full">
      <div>
        <Link to="/" onClick={() => setActive("Home")}>
          <img className="w-[180px] h-[60px]" src={Logo} />
        </Link>
      </div>
      <div className="flex justify-between gap-5 my-auto ">
        {pageWidth > 640 ? (
          <>
            <Link to="/" onClick={() => setActive("Home")}>
              <h5
                className={`text-xl ${active === "Home" && "text-[#BB84E8]"}`}
              >
                Home
              </h5>
            </Link>
            <Link to="/about" onClick={() => setActive("About")}>
              <h5
                className={`text-xl ${active === "About" && "text-[#BB84E8]"}`}
              >
                About
              </h5>
            </Link>
            <Link to="/tours" onClick={() => setActive("Tours")}>
              <h5
                className={`text-xl ${active === "Tours" && "text-[#BB84E8]"}`}
              >
                Tours
              </h5>
            </Link>
            <Link to="/contact" onClick={() => setActive("Contact")}>
              <h5
                className={`text-xl ${
                  active === "Contact" && "text-[#BB84E8]"
                }`}
              >
                Contact
              </h5>
            </Link>
          </>
        ) : (
          <img src={MobilHeader} onClick={() => setMobileOpen(!mobileOpen)} />
        )}
        {mobileOpen && (
          <MobileHeader
            active={active}
            setActive={setActive}
            setMobileOpen={setMobileOpen}
          />
        )}
      </div>
    </div>
  );
};
