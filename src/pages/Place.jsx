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
import Gudauri from "../assets/gudauri.jpg";
import Gudauri1 from "../assets/gudauri1.jpg";
import Gudauri2 from "../assets/gudauri2.jpg";
import Gudauri3 from "../assets/gudauri3.jpg";
import Borjomi from "../assets/borjomi.jpg";
import Borjomi1 from "../assets/borjomi1.jpg";
import Borjomi2 from "../assets/borjomi2.jpg";
import Borjomi3 from "../assets/borjomi3.jpg";
import Bakuriani from "../assets/bakuriani.jpg";
import Bakuriani1 from "../assets/bakuriani1.jpg";
import Bakuriani2 from "../assets/bakuriani2.jpg";
import Bakuriani3 from "../assets/bakuriani3.jpg";

import Rabati from "../assets/rabati.jpg";
import Rabati1 from "../assets/rabati1.jpg";
import Rabati2 from "../assets/rabati2.jpg";
import Rabati3 from "../assets/rabati3.jpg";

const data = [
  {
    id: "tbilisi",
    name: "Tbilisi: The Intersection of Tradition and Modernity",
    text: " Our odyssey begins in Tbilisi, a city that effortlessly blends ancient charm with modern vibrancy. Wander through the labyrinthine streets of the Old Town, discovering hidden gems like the Narikala   Fortress and the Holy Trinity Cathedral. As dusk falls, witness the city come alive with the energy of Rustaveli Avenue and the serenity of Rike Park.",
    image1: Tbilisi,
    image2: BotanicGarden,
    image3: Mtawminda,
    image4: OldTbilisi,
    link: "https://www.youtube.com/watch?si=mFYv9CA28uGMpR-K&fbclid=IwAR3CmHSTnPsQS6s1JLx9sBWGs8nUGbQI498xFiSq1bf7NsD2eYyRHn7KLwg&v=f3lV2SchOX8&feature=youtu.be",
  },
  {
    id: "sighnaghi",
    name: "Sighnaghi: The City of Love and Mesmerizing Views",
    text: "Embark on a romantic journey in Sighnaghi, the charming City of Love nestled in the heart of Kakheti. As you wander through cobblestone streets, feel the essence of love that permeates the air. Marvel at the breathtaking views of the Alazani Valley and the Caucasus Mountains that surround this picturesque town.",
    image1: Sighnaghi,
    image2: Sighnaghi1,
    image3: Sighnaghi2,
    image4: Sighnaghi3,
    link: "https://www.youtube.com/watch?si=CsgAfbWqwr3n0rZ2&fbclid=IwAR2JUCwZTUG8HNPdIos9Dgg7s4362PCWH0HTKvq36VQVXv41uuknCM38L6o&v=GvMyfgoucNo&feature=youtu.be",
  },
  {
    id: "bodbe",
    name: "Bodbe: Tranquility at the Confluence of Nature and Spirituality",
    text: "Discover serenity in Bodbe, a place where nature and spirituality converge harmoniously. Visit the St. Nino Monastery, surrounded by lush greenery and blooming gardens. Feel a sense of peace as you stroll through the peaceful grounds and witness the tranquil convergence of nature and religious heritage.",
    image1: Bodbe,
    image2: Bodbe1,
    image3: Bodbe2,
    image4: Bodbe3,
    link: "https://www.youtube.com/watch?si=GAGaw4E8NxRVMPrI&fbclid=IwAR1Wx3y75H6cU1pisoOx2tk9ZZLnYxv3EsbJU-LO11xBeAXlJuQ8JUMClM4&v=SIvC9craikM&feature=youtu.be",
  },
  {
    id: "mtskheta",
    name: "Mtskheta: Where Ancient History Unfolds",
    text: "Step back in time in Mtskheta, the ancient capital and UNESCO World Heritage site. Explore the sacred Svetitskhoveli Cathedral, an architectural masterpiece, and ascend to the Jvari Monastery perched on a hill, offering panoramic views of the confluence of two rivers. The cobbled streets whisper tales of bygone eras, making Mtskheta a captivating journey through Georgia's rich history.",
    image1: Mtskheta,
    image2: Mtskheta1,
    image3: Mtskheta2,
    image4: Mtskheta3,
    link: "https://www.youtube.com/watch?si=BsHegaceph93DixZ&fbclid=IwAR2jmONx5nxWnK3sZQ2fkC6Q6YVFATeYkFd2z7CxEPyJg4lQ-05UE1-yxN8&v=es4tltVw7F4&feature=youtu.be",
  },
  {
    id: "ananuri",
    name: "Ananuri: Fortress by the Aragvi River",
    text: "Immerse yourself in history at Ananuri, a fortress perched on the banks of the Aragvi River. Explore the well-preserved architectural wonders, including the Ananuri Castle and churches, dating back to the medieval period. Marvel at the stunning views of the turquoise Zhinvali Reservoir as you step back in time within the walls of this historic complex.",
    image1: Ananuri,
    image2: Ananuri1,
    image3: Ananuri2,
    image4: Ananuri3,
    link: "https://www.youtube.com/watch?si=eGrNtozfdANEJKba&fbclid=IwAR1uaaqP_6YvEgoylZlm4wmXrygQlEZBBp87JgZMJ7bnxpnSJhj4kcQAa60&v=vOkAP5BziHg&feature=youtu.be",
  },
  {
    id: "gudauri",
    name: "Gudauri: Alpine Adventure and Mountain Majesty",
    text: "Embark on an alpine adventure in Gudauri, a mountain paradise nestled in the breathtaking Caucasus. Whether you're a winter sports enthusiast or a nature lover, Gudauri offers a haven for those seeking adventure amid snow-capped peaks. Experience the thrill of skiing or hiking while surrounded by the majestic beauty of Gudauri's pristine landscapes.",
    image1: Gudauri,
    image2: Gudauri1,
    image3: Gudauri2,
    image4: Gudauri3,
    link: "https://www.youtube.com/watch?v=J2coBioLsvs",
  },
  {
    id: "borjomi",
    name: "Borjomi: Rejuvenation in the Heart of Georgia",
    text: "Indulge in the healing ambiance of Borjomi, renowned for its world-class mineral waters and lush greenery. Explore the Borjomi-Kharagauli National Park, a haven for nature lovers, where rolling hills and pristine landscapes create a serene escape. Immerse yourself in the rejuvenating properties of Borjomi's mineral waters and discover the perfect blend of relaxation and natural beauty.",
    image1: Borjomi,
    image2: Borjomi1,
    image3: Borjomi2,
    image4: Borjomi3,
    link: "https://www.youtube.com/watch?v=0Ug8etBDkjY",
  },
  {
    id: "bakuriani",
    name: "Bakuriani: Alpine Retreat and Winter Wonderland",
    text: "Escape to the charming alpine retreat of Bakuriani, where the magic of winter unfolds against a backdrop of snow-covered peaks. Whether you're a winter sports enthusiast or seeking a cozy mountain getaway, Bakuriani offers a haven of enchantment. Experience the thrill of skiing, embrace the serenity of the pine-clad landscapes, and revel in the warmth of Bakuriani's welcoming atmosphere.",
    image1: Bakuriani,
    image2: Bakuriani1,
    image3: Bakuriani2,
    image4: Bakuriani3,
    link: "https://www.youtube.com/watch?v=b9pUwmtPDWI",
  },
  {
    id: "rabati",
    name: "Rabati: Fortress of Diversity and Historical Splendor",
    text: "Step into the captivating world of Rabati, a fortress that stands as a testament to Georgia's rich history and cultural diversity. Explore the well-preserved structures within the fortress walls, from the Rabati Castle to the stunning St. Nicholas Church. With influences from various historical periods, Rabati offers a fascinating journey through time, showcasing the unique blend of architecture and heritage.",
    image1: Rabati,
    image2: Rabati1,
    image3: Rabati2,
    image4: Rabati3,
    link: "https://www.youtube.com/watch?v=5KKdR-f47uw",
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
      <div className=" flex flex-col gap-5 md:flex-row mt-5 md:mt-10">
        <div className="md:w-[40%] md:mt-10">
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
