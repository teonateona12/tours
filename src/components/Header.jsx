import React from "react";
import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = ({ active, setActive }) => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const route = useLocation();

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
    <div
      className={`flex justify-between w-full ${
        route.pathname === "/tours" ? "bg-white" : "bg-slate-200"
      }  p-5 rounded-md`}
    >
      <div>
        <Link to="/" onClick={() => setActive("Home")}>
          <img className="w-[180px] h-[60px]" src={Logo} />
        </Link>
      </div>
      <div className="flex justify-between gap-5 my-auto ">
        {pageWidth > 640 ? (
          <>
            <Link to="/" onClick={() => setActive("Home")}>
              <h1
                className={`text-xl ${active === "Home" && "text-[#BB84E8]"}`}
              >
                Explore the beauty
              </h1>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};
