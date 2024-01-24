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

export const Tours = () => {
  return (
    <div>
      <h2 className=" text-3xl text-center mt-20">Discover Georgia</h2>
      <h1 className=" text-2xl text-center mb-9">Explore The Beauty</h1>
      <h2 className=" text-3xl font-medium text-[#BB84E8]">Tbilisi</h2>
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
            Shopper's Paradise: Indulge in a shopping spree in Tbilisi's vibrant
            markets and boutiques. Discover traditional crafts, modern designs,
            and unique souvenirs. Our guides can provide tips on the best
            shopping spots to suit your taste.
          </h4>
        </div>
      </div>

      {/* gudauri */}
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
            Start your day with an exhilarating cableway ride, offering
            breathtaking aerial views of Gudauri's landscapes. Continue your
            exploration with a visit to the Panorama platform, where you can
            marvel at the expansive views of the majestic mountains, valleys,
            and the iconic Friendship Arch.
          </h4>
        </div>

        <div className="flex flex-col gap-4 md:flex-row lg:w-[45%]">
          <img className="w-[350px] lg:w-[200px] h-[300px] my-5" src={Jeep} />
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
            Wrap up your Gudauri Alpine Retreat with a visit to the Panorama
            platform. Marvel at the expansive views of the majestic mountains,
            valleys, and the iconic Friendship Arch. This panoramic spectacle is
            the perfect finale to your mountainous escapade.
          </h4>
        </div>
      </div>

      {/* bakuriani */}
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
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
          <h4 className=" md:mt-16 w-[360px] lg:w-full">
            Cableway Excursion: Soar above the treetops with a scenic cableway
            ride in Bakuriani. Marvel at the panoramic views of the surrounding
            mountains as you ascend to higher altitudes.
          </h4>
        </div>
      </div>
    </div>
  );
};
