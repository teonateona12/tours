import React from "react";
import LogoBlack from "../assets/black-logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className=" bg-[#BB84E8] ">
      <div className="flex justify-between mt-16 py-16 px-6 flex-col gap-5 md:flex-row lg:px-[10%]">
        <img className="w-[140px] h-[100px]" src={LogoBlack} />
        <div>
          <h1 className=" text-3xl mb-4">Explore the beauty</h1>
          <Link to="/">
            <h5 className=" text-xl">Home</h5>
          </Link>

          <Link to="/tours">
            <h5 className=" text-xl">Tours</h5>
          </Link>
        </div>
        <div>
          <div>
            <h1 className=" text-3xl mb-4">Contact</h1>
            <div>
              <h5>Gaga Lapachi</h5>
              <h5>+995598377982</h5>
            </div>
            <div className="mt-3">
              <h5>Omar Chaghiashvili</h5>
              <h5>+995574543543</h5>
            </div>
          </div>
        </div>
      </div>
      <p className=" mt-[10px] text-center pb-10">
        Copyright ©2024 "Discover Georgia". All Rights Reserved.
      </p>
    </div>
  );
};
