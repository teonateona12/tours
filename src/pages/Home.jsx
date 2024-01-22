import React from "react";
import AboutImage from "../assets/home1.jpg";
import Tbilisi from "../assets/tbilisi1.jpg";
import Gudauri from "../assets/gudauri1.jpg";
import Bakuriani from "../assets/bakuriani1.jpg";
import Borjomi from "../assets/borjomi1.jpg";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-5 md:gap-10">
        <img className="m-auto  " src={AboutImage} />
        <div className="m-auto">
          <h1>Explore the Beauty</h1>
          <h2 className=" text-3xl mb-4">Discover Georgia</h2>
          <p>
            Welcome to Discover Georgia Tours, your gateway to the enchanting
            beauty and rich cultural tapestry of this hidden gem in the heart of
            the Caucasus – Georgia! At Discover Georgia Tours, we are passionate
            about curating unforgettable travel experiences that immerse you in
            the wonders of this diverse and hospitable country.
          </p>
          <Link to="/about">
            <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 mt-3 lg:mt-14 rounded-sm">
              More About Us
              <img className="w-[24px] h-[24px]" src={Arrow} />
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-16 m-auto flex flex-col lg:mt-32">
        <h1 className="text-center">Explore The Beauty</h1>
        <h2 className=" text-3xl text-center">
          Embark on a Journey Through Georgia's Wonders:
        </h2>
        <div className="flex gap-5 flex-wrap mt-10 ">
          <div className="relative w-fit cursor-pointer lg:w-[43%] m-auto">
            <img className="w-[400px] h-[538px] lg:w-full" src={Tbilisi} />
            <Link to="/tbilisi">
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 rounded-sm ">
                Tbilisi
                <img className="w-[24px] h-[24px]" src={Arrow} />
              </button>
            </Link>
          </div>

          <div className="relative w-fit cursor-pointer lg:w-[43%] m-auto">
            <img className="w-[400px] h-[538px]  lg:w-full" src={Gudauri} />
            <Link to="/gudauri">
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 rounded-sm">
                Gudauri
                <img className="w-[24px] h-[24px]" src={Arrow} />
              </button>
            </Link>
          </div>

          <div className="relative w-fit cursor-pointer lg:w-[43%] m-auto">
            <img className="w-[400px] h-[538px]  lg:w-full" src={Borjomi} />
            <Link to="/borjomi">
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 rounded-sm">
                Borjomi
                <img className="w-[24px] h-[24px]" src={Arrow} />
              </button>
            </Link>
          </div>

          <div className="relative w-fit cursor-pointer lg:w-[43%] m-auto">
            <img className="w-[400px] h-[538px]  lg:w-full" src={Bakuriani} />
            <Link to="/bakuriani">
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 rounded-sm">
                Bakuriani
                <img className="w-[24px] h-[24px]" src={Arrow} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
