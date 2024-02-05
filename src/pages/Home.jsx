import React from "react";
import AboutImage from "../assets/home1.jpg";
import Tbilisi from "../assets/tbilisi1.jpg";
import Gudauri from "../assets/gudauri1.jpg";
import Bakuriani from "../assets/bakuriani1.jpg";
import Borjomi from "../assets/borjomi1.jpg";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";
import AboutImg from "../assets/about1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../assets/slider1.jpg";
import Slider2 from "../assets/slider2.jpg";
import Slider3 from "../assets/slider3.jpg";
import Slider4 from "../assets/slider4.jpg";
import Slider5 from "../assets/slider5.jpg";
import Slider6 from "../assets/slider6.jpg";
import Slider7 from "../assets/slider7.jpg";
import Slider8 from "../assets/slider8.jpg";
import Slider9 from "../assets/slider9.jpg";

export const Home = ({ setActive }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(12);
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-5 md:gap-10">
        <img className="m-auto  " src={AboutImage} />
        <div className="m-auto">
          <h1>Explore the Beauty</h1>
          <h2 className=" text-3xl mb-4">Discover Georgia</h2>
          <p>
            At 'Discover Georgia,' we believe that travel is not just about
            visiting new places; it's about immersing yourself in the beauty,
            culture, and experiences that make each destination unique. Our
            journey began with a passion for showcasing the captivating allure
            of Georgia, a state blessed with diverse landscapes, rich history,
            and warm hospitality. But that's not all – at 'Discover Georgia,' we
            understand that each traveler is unique, and preferences vary.
            That's why we offer the flexibility to tailor your experience to
            your liking. We can change tour directions and tour days to ensure
            that your journey with us is personalized and unforgettable.
            Additionally, we provide seamless transportation services to and
            from the airport, ensuring a hassle-free start and end to your
            adventure. Because we believe that travel should be as unique and
            convenient as you are.
          </p>
          <div className="lg:flex mt-16 gap-10">
            <img
              className=" rounded-lg w-[350px] h-[350px] m-auto"
              src={AboutImg}
            />
            <div>
              <h2 className=" text-xl mt-5 mb-2 ">Our Mission</h2>
              <p>
                At the core of our mission is the commitment to introduce you to
                the hidden gems and iconic landmarks that define Georgia's soul.
                We strive to create travel adventures that blend the comforts of
                exploration with the thrill of discovery. With a focus on
                responsible tourism, we aim to leave a positive impact on the
                communities we visit while ensuring our guests have a seamless
                and enriching experience.
              </p>
              <h2 className=" text-xl mt-5 mb-2 ">
                Why Choose "Discover Georgia"
              </h2>
              <ul>
                <li>
                  1. Expertise: Our team comprises seasoned travel enthusiasts
                  with an in-depth knowledge of Georgia's landscapes, history,
                  and local culture.
                </li>
                <li>
                  2. Tailored Experiences: From personalized itineraries to
                  off-the-beaten-path adventures, we customize every trip to
                  suit your interests and preferences.
                </li>
                <li>
                  3. Quality Accommodations: We partner with top-notch
                  accommodations that reflect the unique character of each
                  destination, ensuring comfort and authenticity.
                </li>
                <li>
                  4. Local Connections: Immerse yourself in the true spirit of
                  Georgia with our handpicked local guides who bring each place
                  to life with their stories and insights.
                </li>
              </ul>
              <h2 className=" text-xl mt-5 mb-2 ">
                Join Us on Your Next Adventure
              </h2>
              <p>
                Whether you're a nature lover, history buff, or someone seeking
                a retreat from the hustle and bustle, "Discover Georgia" invites
                you to embark on a journey through the beauty of Georgia. Let us
                be your guide to the wonders that await, as we create memories
                that last a lifetime. Come, explore with us, and see why Georgia
                is not just a destination—it's an experience.
              </p>
            </div>
          </div>
          {/* <Link to="/about" onClick={() => setActive("About")}>
            <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 mt-3 lg:mt-14 rounded-sm">
              More About Us
              <img className="w-[24px] h-[24px]" src={Arrow} />
            </button>
          </Link> */}
        </div>
      </div>

      <div className="mt-16 m-auto flex flex-col lg:mt-32">
        <h1 className="text-center">Explore The Beauty</h1>
        <h2 className=" text-3xl text-center">
          Embark on a Journey Through Georgia's Wonders:
        </h2>
        <Slider {...settings} className="mt-10">
          {/* Slide 1 */}
          <div>
            <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-start">
              <div>
                <img
                  className="w-[400px] h-[200px] rounded-md"
                  src={Slider1}
                  alt="Slide 1"
                />
                <Link to="/tours" onClick={() => setActive("Tours")}>
                  <button className="py-3 px-0 flex gap-3  rounded-sm ">
                    Tbilisi
                    <img className="w-[20px] h-[20px]" src={Arrow} />
                  </button>
                </Link>
              </div>
              <div>
                <img
                  className="w-[400px] h-[200px] rounded-md"
                  src={Slider2}
                  alt="Slide 2"
                />
                <Link to="/tours" onClick={() => setActive("Tours")}>
                  <button className="py-3 px-0 flex gap-3  rounded-sm ">
                    Mtskheta
                    <img className="w-[20px] h-[20px]" src={Arrow} />
                  </button>
                </Link>
              </div>
              <div>
                <img
                  className="w-[400px] h-[200px] rounded-md"
                  src={Slider3}
                  alt="Slide 3"
                />
                <Link to="/tours" onClick={() => setActive("Tours")}>
                  <button className="py-3 px-0 flex gap-3  rounded-sm ">
                    Mtskheta
                    <img className="w-[20px] h-[20px]" src={Arrow} />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-start">
              <div>
                <img
                  className="w-[400px] h-[200px] rounded-md"
                  src={Slider4}
                  alt="Slide 1"
                />
                <Link to="/tours" onClick={() => setActive("Tours")}>
                  <button className="py-3 px-0 flex gap-3  rounded-sm ">
                    Kutaisi
                    <img className="w-[20px] h-[20px]" src={Arrow} />
                  </button>
                </Link>
              </div>
              <div>
                <img
                  className="w-[400px] h-[200px] rounded-md"
                  src={Slider5}
                  alt="Slide 2"
                />
                <Link to="/tours" onClick={() => setActive("Tours")}>
                  <button className="py-3 px-0 flex gap-3  rounded-sm ">
                    Prometheus Cave
                    <img className="w-[20px] h-[20px]" src={Arrow} />
                  </button>
                </Link>
              </div>
              <div>
                <img
                  className="w-[400px] h-[200px] rounded-md"
                  src={Slider6}
                  alt="Slide 3"
                />

                <Link to="/tours" onClick={() => setActive("Tours")}>
                  <button className="py-3 px-0 flex gap-3  rounded-sm ">
                    Makhuntseti
                    <img className="w-[20px] h-[20px]" src={Arrow} />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-start">
              <div>
                <img
                  className="w-[400px] h-[200px] rounded-md"
                  src={Slider7}
                  alt="Slide 1"
                />
                <Link to="/tours" onClick={() => setActive("Tours")}>
                  <button className="py-3 px-0 flex gap-3  rounded-sm ">
                    Sighnaghi
                    <img className="w-[20px] h-[20px]" src={Arrow} />
                  </button>
                </Link>
              </div>
              <div>
                <img
                  className="w-[400px] h-[200px] rounded-md"
                  src={Slider8}
                  alt="Slide 2"
                />
                <Link to="/tours" onClick={() => setActive("Tours")}>
                  <button className="py-3 px-0 flex gap-3  rounded-sm ">
                    Bakuriani
                    <img className="w-[20px] h-[20px]" src={Arrow} />
                  </button>
                </Link>
              </div>
              <div>
                <img
                  className="w-[400px] h-[200px] rounded-md"
                  src={Slider9}
                  alt="Slide 3"
                />
                <Link to="/tours" onClick={() => setActive("Tours")}>
                  <button className="py-3 px-0 flex gap-3  rounded-sm ">
                    Gudauri
                    <img className="w-[20px] h-[20px]" src={Arrow} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Slider>

        {/* <div className="flex gap-5 flex-wrap mt-10 ">
          <div className="relative w-fit cursor-pointer lg:w-[40%] m-auto">
            <Link to="/tours" onClick={() => setActive("Tours")}>
              <img className="w-[300px] h-[438px] lg:w-full" src={Tbilisi} />
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 rounded-sm ">
                Tours
                <img className="w-[24px] h-[24px]" src={Arrow} />
              </button>
            </Link>
          </div>

          <div className="relative w-fit cursor-pointer lg:w-[40%] m-auto">
            <Link to="/tours" onClick={() => setActive("Tours")}>
              <img className="w-[300px] h-[438px]  lg:w-full" src={Gudauri} />
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 rounded-sm">
                Tours
                <img className="w-[24px] h-[24px]" src={Arrow} />
              </button>
            </Link>
          </div>

          <div className="relative w-fit cursor-pointer lg:w-[40%] m-auto">
            <Link to="/tours" onClick={() => setActive("Tours")}>
              <img className="w-[300px] h-[438px]  lg:w-full" src={Borjomi} />
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 rounded-sm">
                Tours
                <img className="w-[24px] h-[24px]" src={Arrow} />
              </button>
            </Link>
          </div>

          <div className="relative w-fit cursor-pointer lg:w-[40%] m-auto">
            <Link to="/tours" onClick={() => setActive("Tours")}>
              <img className="w-[300px] h-[438px]  lg:w-full" src={Bakuriani} />
              <button className="bg-[#BB84E8] py-3 px-5 flex gap-4 absolute top-0 rounded-sm">
                Tours
                <img className="w-[24px] h-[24px]" src={Arrow} />
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};
