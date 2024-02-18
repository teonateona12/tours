import React from "react";
import { useParams } from "react-router-dom";
import Tbilisi from "../assets/tbilisi1.jpg";
import BotanicGarden from "../assets/botanicGarden.jpg";
import Mtawminda from "../assets/mtawminda.jpg";
import OldTbilisi from "../assets/oldTbilisi.jpg";
import Youtube from "../assets/youtube.png";
import Sighnaghi from "../assets/sighnaghi.jpg";
import Sighnaghi1 from "../assets/sighnaghi1.jpg";
import Sighnaghi2 from "../assets/sighnaghi2.jpeg";
import Sighnaghi3 from "../assets/sighnaghi3.jpg";

const data = [
  {
    id: "tbilisi",
    name: "Tbilisi: The Intersection of Tradition and Modernity",
    text: " Our odyssey begins in Tbilisi, a city that effortlessly blends ancient charm with modern vibrancy. Wander through the labyrinthine streets of the Old Town, discovering hidden gems like the Narikala   Fortress and the Holy Trinity Cathedral. As dusk falls, witness the city come alive with the energy of Rustaveli Avenue and the serenity of Rike Park.",
    image1: Tbilisi,
    image2: BotanicGarden,
    image3: Mtawminda,
    image4: OldTbilisi,
    link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutu.be%2Ff3lV2SchOX8%3Fsi%3DmFYv9CA28uGMpR-K%26fbclid%3DIwAR09Bz7asBx0jUGEkfEMMPAfZ1Y4SlPAbdVC_koxMQZgkva9NFJ6m1qC0Kc&h=AT28VkwR2k2PfXakUBYeZHHOt9vMz0y7FUGJFZVZIQ5OXAU-zhN4fmMyVZaY9dHBJUT3wlUrA0o7cRPimwgyaVP9liEw_b6ML-3jQ7yHBZOxZ9MFFa44q7J-y0qgFQWWOfjx3Q",
  },
  {
    id: "sighnaghi",
    name: "Sighnaghi: The City of Love and Mesmerizing Views",
    text: "Embark on a romantic journey in Sighnaghi, the charming City of Love nestled in the heart of Kakheti. As you wander through cobblestone streets, feel the essence of love that permeates the air. Marvel at the breathtaking views of the Alazani Valley and the Caucasus Mountains that surround this picturesque town.",
    image1: Sighnaghi,
    image2: Sighnaghi1,
    image3: Sighnaghi2,
    image4: Sighnaghi3,
    link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutu.be%2FGvMyfgoucNo%3Fsi%3DCsgAfbWqwr3n0rZ2%26fbclid%3DIwAR2We_zD81zno0vK78WCfhRUE5kkzLJN9YBzFIXNBLH9REh4_IQEiUQ8hs8&h=AT28VkwR2k2PfXakUBYeZHHOt9vMz0y7FUGJFZVZIQ5OXAU-zhN4fmMyVZaY9dHBJUT3wlUrA0o7cRPimwgyaVP9liEw_b6ML-3jQ7yHBZOxZ9MFFa44q7J-y0qgFQWWOfjx3Q",
  },
];

export const Place = () => {
  const route = useParams();
  const place = data.find((item) => item.id === route.id);

  const openYoutubeLink = () => {
    window.open(place.link, "_blank");
  };
  return (
    <div className=" mt-20">
      <p className=" text-3xl text-center">{place.name}</p>
      <h1 className=" text-center">Explore the beauty</h1>
      <div className=" flex flex-col md:flex-row mt-5 md:mt-10">
        <div className="md:w-[40%]">
          <p className="order-2 flex mt-10 md:mt-0 mb-10">{place.text}</p>
          <a href="#" onClick={openYoutubeLink}>
            <p>Explore the beauty in the YouTube link below:</p>
            <div className=" flex gap-2 ">
              <img className="w-[24px] h-[24px]" src={Youtube} />
              <p>Youtube</p>
            </div>
          </a>
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
