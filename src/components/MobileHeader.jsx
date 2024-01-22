import React from "react";
import { Link } from "react-router-dom";
export const MobileHeader = () => {
  return (
    <div className="absolute w-full h-[200px] left-5 top-[100px] bg-white">
      <Link to="/">
        <h5 className=" text-2xl font-bold	">Home</h5>
      </Link>
      <Link to="/about">
        <h5 className=" text-2xl font-bold	">About</h5>
      </Link>
      <Link to="/tours">
        <h5 className=" text-2xl font-bold	">Tours</h5>
      </Link>
      <Link to="/contact">
        <h5 className=" text-2xl font-bold	">Contact</h5>
      </Link>
    </div>
  );
};
