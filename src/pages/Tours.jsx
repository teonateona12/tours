import React from "react";
import Mtawminda from "../assets/mtawminda.jpg";
import BotanicGarden from "../assets/botanicGarden.jpg";
import OldTbilisi from "../assets/oldTbilisi.jpg";
import Shopping from "../assets/shopping.jpg";

import Ananuri from "../assets/ananuri.jpg";
import CableWays from "../assets/cableways.jpg";
import Jeep from "../assets/jeep.jpg";
import Panorama from "../assets/panorama.jpg";

import CableWays1 from "../assets/cableway1.jpg";
import Jeep1 from "../assets/jeep1.jpg";
import Borjomi2 from "../assets/borjomi2.jpg";
import Borjomi3 from "../assets/borjomi3.jpg";

import Mtskheta from "../assets/mtskheta.jpg";
import Kutaisi from "../assets/kutaisi.jpg";
import Martvili from "../assets/Martvili.jpg";
import Batumi from "../assets/batumi.jpg";
import Kakheti from "../assets/kakheti.jpeg";
import Borjomi from "../assets/borjomi2.jpg";
import Bakuriani from "../assets/bakuriani1.jpg";
import Gudauri from "../assets/gudauri1.jpg";
import { useState } from "react";

let data = [
  {
    name: "Tbilisi: The Intersection of Tradition and Modernity",
    text: " Our odyssey begins in Tbilisi, a city that effortlessly blends ancient charm with modern vibrancy. Wander through the labyrinthine streets of the Old Town, discovering hidden gems like the Narikala   Fortress and the Holy Trinity Cathedral. As dusk falls, witness the city come alive with the energy of Rustaveli Avenue and the serenity of Rike Park.",
    image: OldTbilisi,
  },
  {
    name: "Mtskheta: Ancient Capital, Timeless Beauty    ",
    text: " Travel back in time to Mtskheta, the ancient capital and a UNESCO World Heritage site. Marvel at the Svetitskhoveli Cathedral and the Jvari Monastery, where history is etched into every stone. The cobbled streets whisper tales of bygone eras, making Mtskheta a must-visit destination on our odyssey.",
    image: Mtskheta,
  },
  {
    name: "Kutaisi: Gateway to Western Georgia    ",
    text: "Continue your exploration to Kutaisi, the historic heart of western Georgia. Delve into the mysteries of the Prometheus Cave, where underground wonders unfold. Take in the grandeur of the Bagrati Cathedral and the Gelati Monastery, both UNESCO treasures that showcase the country's rich heritage.",
    image: Kutaisi,
  },
  {
    name: "Martvili and Tskaltubo: Nature's Marvels and Spa Retreat",
    text: "Venture into the pristine natural beauty of Martvili, where the vibrant blue waters of the Martvili Canyon create a breathtaking spectacle. Relax in the historic Tskaltubo, known for its healing mineral waters and grand Soviet-era spa architecture.",
    image: Martvili,
  },
  {
    name: "Batumi: Black Sea",
    text: "Our journey brings us to Batumi, the coastal gem of the Black Sea. Stroll along the Batumi Boulevard, adorned with modern sculptures and botanical wonders. Feel the pulse of the city at the Batumi Piazza and marvel at the futuristic architecture of the Alphabet Tower.",
    image: Batumi,
  },

  {
    name: "Kakheti: Wine Country Paradise",
    text: "Our grand odyssey concludes in Kakheti, the wine region that captivates with its lush vineyards and ancient winemaking traditions. Visit local wineries to taste the finest Georgian wines and experience the warm hospitality of the region.",
    image: Kakheti,
  },
  {
    name: "Borjomi: Healing Waters and Lush Greenery",
    text: "Immerse yourself in the rejuvenating atmosphere of Borjomi, known for its world-renowned mineral waters and stunning landscapes. Explore the Borjomi-Kharagauli National Park, where lush greenery and pristine nature await.",
    image: Borjomi,
  },
  {
    name: "Bakuriani: Alpine Retreat",
    text: "Continue your adventure to Bakuriani, a charming alpine resort town surrounded by snow-capped peaks. Whether you're a winter sports enthusiast or a nature lover, Bakuriani offers a serene escape with its enchanting landscapes and cozy atmosphere.",
    image: Bakuriani,
  },
  {
    name: "Gudauri: Mountain Majesty",
    text: "Ascend to the heights of Gudauri, a mountain paradise offering panoramic views and thrilling outdoor activities. Whether it's skiing in winter or hiking in summer, Gudauri is a haven for those seeking adventure amid the breathtaking Caucasus Mountains.",
    image: Gudauri,
  },
];
export const Tours = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderDestinations = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map((destination, index) => (
      <div
        key={index}
        className=" lg:w-[45%] bg-[#e8d9f5] p-5  rounded-md mt-5 lg:mt-0"
      >
        <h2 className=" text-2xl font-medium text-[#BB84E8]">
          {destination.name}
        </h2>
        <h1 className="text-xl my-3">Explore The Beauty</h1>

        <h3 className=" text-md mb-4 mt-5">{destination.text}</h3>
        <img
          className="w-[340px] h-[340px] md:w-[360px] md:h-[360px]"
          src={destination.image}
        />
      </div>
    ));
  };

  return (
    <div>
      <h2 className="text-3xl text-center mt-20">Discover Georgia</h2>
      <h1 className="text-2xl text-center mb-9">Explore The Beauty</h1>
      <h2 className="text-2xl">Embark on a Grand Georgian Odyssey.</h2>

      <div className=" mt-5 lg:flex flex-wrap justify-between gap-10">
        <div>
          <div className="mt-5 lg:flex flex-wrap justify-between gap-10">
            {renderDestinations()}
          </div>
          <div className="pagination flex gap-3 mt-9">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  className={` ${
                    currentPage == page ? "bg-slate-400" : null
                  } py-3 px-4 rounded-sm`}
                  key={page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
        {/* <div className=" lg:w-[45%] bg-[#e8d9f5] p-5  rounded-md">
          <h2 className=" text-2xl font-medium text-[#BB84E8]">
            Tbilisi: The Intersection of Tradition and Modernity
          </h2>
          <h1 className="text-xl my-3">Explore The Beauty</h1>

          <h3 className=" text-md mb-4 mt-5">
            Our odyssey begins in Tbilisi, a city that effortlessly blends
            ancient charm with modern vibrancy. Wander through the labyrinthine
            streets of the Old Town, discovering hidden gems like the Narikala
            Fortress and the Holy Trinity Cathedral. As dusk falls, witness the
            city come alive with the energy of Rustaveli Avenue and the serenity
            of Rike Park.
          </h3>
          <img
            className="w-[340px] h-[340px] md:w-[360px] md:h-[360px]"
            src={OldTbilisi}
          />
        </div> */}

        {/* <div className=" lg:w-[45%] bg-[#e8d9f5] p-5  rounded-md mt-5 lg:mt-0">
          <h2 className=" text-2xl font-medium text-[#BB84E8]">
            Mtskheta: Ancient Capital, Timeless Beauty
          </h2>
          <h1 className="text-xl my-3">Explore The Beauty</h1>

          <h3 className=" text-md mb-4 mt-5">
            Travel back in time to Mtskheta, the ancient capital and a UNESCO
            World Heritage site. Marvel at the Svetitskhoveli Cathedral and the
            Jvari Monastery, where history is etched into every stone. The
            cobbled streets whisper tales of bygone eras, making Mtskheta a
            must-visit destination on our odyssey.
          </h3>
          <img
            className="w-[340px] h-[340px] md:w-[360px] md:h-[360px]"
            src={Mtskheta}
          />
        </div> */}

        {/* <div className=" lg:w-[45%] bg-[#e8d9f5] p-5  rounded-md mt-5 lg:mt-0">
          <h2 className=" text-2xl font-medium text-[#BB84E8]">
            Kutaisi: Gateway to Western Georgia
          </h2>
          <h1 className="text-xl my-3">Explore The Beauty</h1>

          <h3 className=" text-md mb-4 mt-5">
            Continue your exploration to Kutaisi, the historic heart of western
            Georgia. Delve into the mysteries of the Prometheus Cave, where
            underground wonders unfold. Take in the grandeur of the Bagrati
            Cathedral and the Gelati Monastery, both UNESCO treasures that
            showcase the country's rich heritage.
          </h3>
          <img
            className="w-[340px] h-[340px] md:w-[360px] md:h-[360px]"
            src={Kutaisi}
          />
        </div> */}

        {/* <div className=" lg:w-[45%] bg-[#e8d9f5] p-5  rounded-md mt-5 lg:mt-0">
          <h2 className=" text-2xl font-medium text-[#BB84E8]">
            Martvili and Tskaltubo: Nature's Marvels and Spa Retreat
          </h2>
          <h1 className="text-xl my-3">Explore The Beauty</h1>

          <h3 className=" text-md mb-4 mt-5">
            Venture into the pristine natural beauty of Martvili, where the
            vibrant blue waters of the Martvili Canyon create a breathtaking
            spectacle. Relax in the historic Tskaltubo, known for its healing
            mineral waters and grand Soviet-era spa architecture.
          </h3>
          <img
            className="w-[340px] h-[340px] md:w-[360px] md:h-[360px]"
            src={Martvili}
          />
        </div> */}

        {/* <div className=" lg:w-[45%] bg-[#e8d9f5] p-5  rounded-md mt-5 lg:mt-0">
          <h2 className=" text-2xl font-medium text-[#BB84E8]">
            Batumi: Black Sea
          </h2>
          <h1 className="text-xl my-3">Explore The Beauty</h1>

          <h3 className=" text-md mb-4 mt-5">
            Our journey brings us to Batumi, the coastal gem of the Black Sea.
            Stroll along the Batumi Boulevard, adorned with modern sculptures
            and botanical wonders. Feel the pulse of the city at the Batumi
            Piazza and marvel at the futuristic architecture of the Alphabet
            Tower.
          </h3>
          <img
            className="w-[340px] h-[340px] md:w-[360px] md:h-[360px]"
            src={Batumi}
          />
        </div> */}

        {/* <div className=" lg:w-[45%] bg-[#e8d9f5] p-5  rounded-md mt-5 lg:mt-0">
          <h2 className=" text-2xl font-medium text-[#BB84E8]">
            Kakheti: Wine Country Paradise
          </h2>
          <h1 className="text-md my-3">Explore The Beauty</h1>
          <h3 className=" text-xl mb-4 mt-5">
            Our grand odyssey concludes in Kakheti, the wine region that
            captivates with its lush vineyards and ancient winemaking
            traditions. Visit local wineries to taste the finest Georgian wines
            and experience the warm hospitality of the region.
          </h3>
          <img
            className="w-[340px] h-[340px] md:w-[360px] md:h-[360px]"
            src={Kakheti}
          />
        </div> */}

        {/* <div className=" lg:w-[45%] bg-[#e8d9f5] p-5  rounded-md mt-5 lg:mt-0">
          <h2 className=" text-2xl font-medium text-[#BB84E8]">
            Borjomi: Healing Waters and Lush Greenery
          </h2>
          <h1 className="text-xl my-3">Explore The Beauty</h1>
          <h3 className=" text-md mb-4 mt-5">
            Immerse yourself in the rejuvenating atmosphere of Borjomi, known
            for its world-renowned mineral waters and stunning landscapes.
            Explore the Borjomi-Kharagauli National Park, where lush greenery
            and pristine nature await.
          </h3>
          <img
            className="w-[340px] h-[340px] md:w-[360px] md:h-[360px]"
            src={Borjomi}
          />
        </div> */}

        {/* <div className=" lg:w-[45%] bg-[#e8d9f5] p-5  rounded-md mt-5 lg:mt-0">
          <h2 className=" text-2xl font-medium text-[#BB84E8]">
            Bakuriani: Alpine Retreat
          </h2>
          <h1 className="text-xl my-3">Explore The Beauty</h1>
          <h3 className=" text-md mb-4 mt-5">
            Continue your adventure to Bakuriani, a charming alpine resort town
            surrounded by snow-capped peaks. Whether you're a winter sports
            enthusiast or a nature lover, Bakuriani offers a serene escape with
            its enchanting landscapes and cozy atmosphere.
          </h3>
          <img
            className="w-[340px] h-[340px] md:w-[360px] md:h-[360px]"
            src={Bakuriani}
          />
        </div> */}

        {/* <div className=" lg:w-[45%] bg-[#e8d9f5] p-5  rounded-md mt-5 lg:mt-0">
          <h2 className=" text-2xl font-medium text-[#BB84E8]">
            Gudauri: Mountain Majesty
          </h2>
          <h1 className="text-xl my-3">Explore The Beauty</h1>
          <h3 className=" text-md mb-4 mt-5">
            Ascend to the heights of Gudauri, a mountain paradise offering
            panoramic views and thrilling outdoor activities. Whether it's
            skiing in winter or hiking in summer, Gudauri is a haven for those
            seeking adventure amid the breathtaking Caucasus Mountains.
          </h3>
          <img
            className="w-[340px] h-[340px] md:w-[360px] md:h-[360px]"
            src={Gudauri}
          />
        </div> */}
      </div>

      <h1 className="text-xl mt-8">Explore The Beauty</h1>
      <h3 className=" text-lg mb-4 ">
        Your Journey, Your Way At "Discover Georgia", we believe in tailoring
        the experience to your desires. Feel free to change directions, alter
        itineraries, and customize your adventure. Our knowledgeable guides are
        here to ensure your journey is as unique as you are. Let us know your
        preferences, and we'll make it happen. Choose "Discover Georgia" for a
        comprehensive exploration of Georgia's treasures. Immerse yourself in
        the beauty, history, and hospitality that define this remarkable
        country. Book your journey now and let the magic of Georgia unfold
        before your eyes!
      </h3>
      {/* <h2 className=" text-3xl font-medium text-[#BB84E8]">Tbilisi</h2>
      <h3 className=" text-xl mb-4">
        Discover the magic of Tbilisi at your own pace with our flexible two-day
        discovery tour. Whether you're a history buff, a nature enthusiast, or a
        shopping connoisseur, our Tbilisi Discovery Tour allows you to tailor
        your experience to match your interests.
      </h3>

      <div className=" flex flex-wrap gap-10 justify-between">
        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[200px] h-[300px] my-5"
            src={Mtawminda}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Mtawminda - The Holy Mountain: Begin your Tbilisi adventure with
            breathtaking views from Mtawminda. A perfect spot to start your
            exploration and gain a panoramic perspective of the city.
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[200px] h-[300px] my-5"
            src={BotanicGarden}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Botanic Garden Escape: Immerse yourself in the tranquility of
            Tbilisi's Botanic Garden. Wander through its diverse landscapes,
            take in the beauty of nature, and find a peaceful retreat in the
            heart of the city.
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[200px] h-[300px] my-5"
            src={OldTbilisi}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Old Tbilisi Exploration: Stroll through the historic streets of Old
            Tbilisi, where every corner tells a story. Explore the architecture,
            visit churches, and absorb the unique atmosphere of this charming
            district.
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[200px] h-[300px] my-5"
            src={Shopping}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Shopper's Paradise: Indulge in a shopping spree in Tbilisi's vibrant
            markets and boutiques. Discover traditional crafts, modern designs,
            and unique souvenirs. Our guides can provide tips on the best
            shopping spots to suit your taste.
          </h4>
        </div>
      </div>

     
      <h2 className=" mt-20  text-3xl font-medium text-[#BB84E8]">Gudauri</h2>
      <h3 className=" text-xl mb-4">
        Immerse yourself in the breathtaking beauty of Gudauri, an alpine
        paradise nestled in the Georgian mountains. Our Gudauri Alpine Retreat
        is a three-day escape that combines thrilling experiences, cultural
        exploration, and serene landscapes.
      </h3>

      <div className=" flex flex-wrap gap-10 justify-between">
        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[200px] h-[300px] my-5"
            src={Ananuri}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Ananuri Fortress Complex: Kick off your journey with a visit to the
            Ananuri Fortress Complex, a historical gem perched on the shores of
            the Zhinvali Reservoir. Explore the medieval architecture and marvel
            at the picturesque surroundings before continuing your ascent to
            Gudauri.
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[200px] h-[300px] my-5"
            src={CableWays}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Start your day with an exhilarating cableway ride, offering
            breathtaking aerial views of Gudauri's landscapes. Continue your
            exploration with a visit to the Panorama platform, where you can
            marvel at the expansive views of the majestic mountains, valleys,
            and the iconic Friendship Arch.
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img className="w-[350px] lg:w-[200px] h-[300px] my-5" src={Jeep} />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Embark on a thrilling jeep tour through the rugged landscapes
            surrounding Gudauri. Traverse off-road trails and discover hidden
            corners of the mountains, all while experiencing the adrenaline rush
            of an off-road adventure.
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[200px] h-[300px] my-5"
            src={Panorama}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Wrap up your Gudauri Alpine Retreat with a visit to the Panorama
            platform. Marvel at the expansive views of the majestic mountains,
            valleys, and the iconic Friendship Arch. This panoramic spectacle is
            the perfect finale to your mountainous escapade.
          </h4>
        </div>
      </div>

     
      <h2 className=" mt-20  text-3xl font-medium text-[#BB84E8]">Bakuriani</h2>
      <h3 className=" text-xl mb-4">
        Embark on a delightful two-day journey to Bakuriani, a charming highland
        retreat surrounded by the beauty of Georgian landscapes. Our Bakuriani
        Bliss tour promises an escape filled with cultural discoveries, outdoor
        thrills, and the serenity of nature.
      </h3>

      <div className=" flex flex-wrap gap-10 justify-between">
        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[400px] h-[300px] lg:h-[350px] my-5"
            src={Borjomi2}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Borjomi: Begin your Bakuriani adventure with a visit to the renowned
            town of Borjomi. Famous for its mineral water springs, take a
            leisurely stroll through the park, and enjoy a sip of the refreshing
            Borjomi water.
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[400px] h-[300px] lg:h-[350px] my-5"
            src={Borjomi3}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Borjomi Forest: Immerse yourself in the enchanting Borjomi Forest. A
            magical haven filled with towering trees and serene pathways, the
            forest provides a perfect backdrop for a peaceful nature walk.
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[220px] h-[300px] lg:h-[350px] my-5"
            src={Jeep1}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Jeep Tour: Embark on an exhilarating jeep tour through the rugged
            landscapes surrounding Bakuriani. Traverse off-road trails, witness
            breathtaking vistas, and experience the thrill of an off-road
            adventure.
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img
            className="w-[350px] lg:w-[230px] h-[300px] lg:h-[350px] my-5"
            src={CableWays1}
          />
          <h4 className=" md:mt-16 w-[320px] lg:w-full">
            Cableway Excursion: Soar above the treetops with a scenic cableway
            ride in Bakuriani. Marvel at the panoramic views of the surrounding
            mountains as you ascend to higher altitudes.
          </h4>
        </div>
      </div> */}
    </div>
  );
};
