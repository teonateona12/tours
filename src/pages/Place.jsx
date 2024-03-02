import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { data } from "../data";

export const Place = () => {
  const route = useParams();
  const place = data.find((item) => item.id === route.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.id]);

  return (
    <div className=" mt-20">
      <p className=" text-3xl text-center">{place.name}</p>
      <h1 className=" text-center">Explore the beauty</h1>
      <div className=" flex flex-col gap-5 md:flex-row mt-5 md:mt-10">
        <div className="md:w-[40%]">
          <p className="order-2 flex  mb-10">{place.text}</p>
          <div className=" flex gap-2 mt-5">
            <iframe
              className="m-auto lg:m-0"
              width="300"
              height="300"
              src={`${place.link}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className=" mt-10 md:mt-0 m-auto order-1 ">
          <div className="flex gap-3">
            <img
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
              src={place.image1}
              alt=""
            />
            <img
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
              src={place.image2}
              alt=""
            />
          </div>
          <div className="flex gap-3 mt-3">
            <img
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
              src={place.image3}
              alt=""
            />
            <img
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
              src={place.image4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
