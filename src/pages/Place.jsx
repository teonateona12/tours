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
import Bodbe from "../assets/bodbe.jpg";
import Bodbe1 from "../assets/bodbe1.jpeg";
import Bodbe2 from "../assets/bodbe2.jpg";
import Bodbe3 from "../assets/bodbe3.jpeg";
import Mtskheta from "../assets/mtskheta.jpg";
import Mtskheta1 from "../assets/mtskheta1.jpg";
import Mtskheta2 from "../assets/mtskheta2.jpg";
import Mtskheta3 from "../assets/mtskheta3.jpg";

import Ananuri from "../assets/ananuri.jpg";
import Ananuri1 from "../assets/ananuri1.jpg";
import Ananuri2 from "../assets/ananuri2.jpg";
import Ananuri3 from "../assets/ananuri3.jpg";

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
  {
    id: "bodbe",
    name: "Bodbe: Tranquility at the Confluence of Nature and Spirituality",
    text: "Discover serenity in Bodbe, a place where nature and spirituality converge harmoniously. Visit the St. Nino Monastery, surrounded by lush greenery and blooming gardens. Feel a sense of peace as you stroll through the peaceful grounds and witness the tranquil convergence of nature and religious heritage.",
    image1: Bodbe,
    image2: Bodbe1,
    image3: Bodbe2,
    image4: Bodbe3,
    link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutu.be%2FSIvC9craikM%3Fsi%3DGAGaw4E8NxRVMPrI%26fbclid%3DIwAR3U7lZ0De-PQNPGE-pLSFQGVuP8nId74hj9tWcAe1rN8A650zzGFIH820Q&h=AT28VkwR2k2PfXakUBYeZHHOt9vMz0y7FUGJFZVZIQ5OXAU-zhN4fmMyVZaY9dHBJUT3wlUrA0o7cRPimwgyaVP9liEw_b6ML-3jQ7yHBZOxZ9MFFa44q7J-y0qgFQWWOfjx3Q",
  },
  {
    id: "mtskheta",
    name: "Mtskheta: Where Ancient History Unfolds",
    text: "Step back in time in Mtskheta, the ancient capital and UNESCO World Heritage site. Explore the sacred Svetitskhoveli Cathedral, an architectural masterpiece, and ascend to the Jvari Monastery perched on a hill, offering panoramic views of the confluence of two rivers. The cobbled streets whisper tales of bygone eras, making Mtskheta a captivating journey through Georgia's rich history.",
    image1: Mtskheta,
    image2: Mtskheta1,
    image3: Mtskheta2,
    image4: Mtskheta3,
    link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutu.be%2Fes4tltVw7F4%3Fsi%3DBsHegaceph93DixZ%26fbclid%3DIwAR2hkMqe5_5bKTm8Id7eAqegxd6n569Sbxu5wKO2VUbWXjDt7LtVPZiJMco&h=AT28VkwR2k2PfXakUBYeZHHOt9vMz0y7FUGJFZVZIQ5OXAU-zhN4fmMyVZaY9dHBJUT3wlUrA0o7cRPimwgyaVP9liEw_b6ML-3jQ7yHBZOxZ9MFFa44q7J-y0qgFQWWOfjx3Q",
  },
  {
    id: "ananuri",
    name: "Ananuri: Fortress by the Aragvi River",
    text: "Immerse yourself in history at Ananuri, a fortress perched on the banks of the Aragvi River. Explore the well-preserved architectural wonders, including the Ananuri Castle and churches, dating back to the medieval period. Marvel at the stunning views of the turquoise Zhinvali Reservoir as you step back in time within the walls of this historic complex.",
    image1: Ananuri,
    image2: Ananuri1,
    image3: Ananuri2,
    image4: Ananuri3,
    link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutu.be%2FvOkAP5BziHg%3Fsi%3DeGrNtozfdANEJKba%26fbclid%3DIwAR0uYKhdagwKlr3Bz76PRnTXrx8i1e_kh0PUrumbAkQaVWb3xxqLjjAxOEA&h=AT28VkwR2k2PfXakUBYeZHHOt9vMz0y7FUGJFZVZIQ5OXAU-zhN4fmMyVZaY9dHBJUT3wlUrA0o7cRPimwgyaVP9liEw_b6ML-3jQ7yHBZOxZ9MFFa44q7J-y0qgFQWWOfjx3Q",
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
