import React from "react";
import AboutImage from "../assets/home1.jpg";
import Tbilisi from "../assets/tbilisi1.jpg";
import Gudauri from "../assets/gudauri1.jpg";
import Bakuriani from "../assets/bakuriani1.jpg";
import Borjomi from "../assets/borjomi1.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-5 md:flex-row md:gap-10">
        <img
          className="m-auto w-[350px] h-[538px] lg:w-[600px]"
          src={AboutImage}
        />
        <div className="m-auto">
          <h1 className=" text-3xl mb-4">Discover Georgia</h1>
          <p>
            Welcome to Discover Georgia Tours, your gateway to the enchanting
            beauty and rich cultural tapestry of this hidden gem in the heart of
            the Caucasus – Georgia! At Discover Georgia Tours, we are passionate
            about curating unforgettable travel experiences that immerse you in
            the wonders of this diverse and hospitable country.
          </p>
          <Link to="/about">
            <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 mt-14">
              More About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
              >
                <path d="M15 1L24 10L15 19" stroke="white" stroke-width="2" />
                <path d="M0 10H24" stroke="white" stroke-width="2" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-16 m-auto flex flex-col">
        <h2 className=" text-3xl">
          Embark on a Journey Through Georgia's Wonders:
        </h2>
        <div className="flex  gap-5 flex-wrap mt-10">
          <div className="relative w-fit cursor-pointer lg:w-[48%]">
            <img className="w-[400px] h-[538px] lg:w-full" src={Tbilisi} />
            <Link to="/tbilisi">
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 ">
                Tbilisi
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path d="M15 1L24 10L15 19" stroke="white" stroke-width="2" />
                  <path d="M0 10H24" stroke="white" stroke-width="2" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="relative w-fit cursor-pointer lg:w-[48%]">
            <img className="w-[400px] h-[538px]  lg:w-full" src={Gudauri} />
            <Link to="/gudauri">
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 ">
                Gudauri
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path d="M15 1L24 10L15 19" stroke="white" stroke-width="2" />
                  <path d="M0 10H24" stroke="white" stroke-width="2" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="relative w-fit cursor-pointer lg:w-[48%]">
            <img className="w-[400px] h-[538px]  lg:w-full" src={Borjomi} />
            <Link to="/borjomi">
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 ">
                Borjomi
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path d="M15 1L24 10L15 19" stroke="white" stroke-width="2" />
                  <path d="M0 10H24" stroke="white" stroke-width="2" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="relative w-fit cursor-pointer lg:w-[48%]">
            <img className="w-[400px] h-[538px]  lg:w-full" src={Bakuriani} />
            <Link to="/bakuriani">
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 ">
                Bakuriani
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path d="M15 1L24 10L15 19" stroke="white" stroke-width="2" />
                  <path d="M0 10H24" stroke="white" stroke-width="2" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
