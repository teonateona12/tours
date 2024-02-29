import React from "react";
import LogoBlack from "../assets/black-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const openWhatsApp = () => {
    if (phoneNumber) {
      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
      window.open(whatsappLink, "_blank");
    }
  };

  return (
    <div className=" bg-[#BB84E8] ">
      <div className="flex justify-between mt-16 py-5 px-6 flex-col gap-5 md:flex-row lg:px-[10%]">
        <img className="w-[140px] h-[100px]" src={LogoBlack} />
        <div>
          <h1 className=" text-3xl mb-4">Explore the beauty</h1>
        </div>
        <div>
          <div>
            <h1 className=" text-3xl mb-4">Contact on whatsApp</h1>
            <div
              className=" cursor-pointer"
              onClick={() => {
                setPhoneNumber("+995598377982");
                openWhatsApp();
              }}
            >
              <h5>Gaga Lapachi</h5>
              <h5>+995598377982</h5>
            </div>

            <div
              className="mt-3 cursor-pointer"
              onClick={() => {
                setPhoneNumber("+995574543543");
                openWhatsApp();
              }}
            >
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
