import React from "react";
import AboutImg from "../assets/about1.jpg";

export const About = () => {
  return (
    <div className=" mt-20">
      <img className=" rounded-lg w-[350px] h-[350px] m-auto" src={AboutImg} />
      <h2 className=" text-3xl text-center ">Discover Georgia</h2>
      <h1 className=" text-3xl text-center mb-9">Explore The Beauty</h1>
      <>
        <h2 className=" text-2xl mb-2 ">About us</h2>
        <p>
          At "Discover Georgia", we believe that travel is not just about
          visiting new places; it's about immersing yourself in the beauty,
          culture, and experiences that make each destination unique. Our
          journey began with a passion for showcasing the captivating allure of
          Georgia, a state blessed with diverse landscapes, rich history, and
          warm hospitality.
        </p>
        <h2 className=" text-xl mt-5 mb-2 ">Our Mission</h2>
        <p>
          At the core of our mission is the commitment to introduce you to the
          hidden gems and iconic landmarks that define Georgia's soul. We strive
          to create travel adventures that blend the comforts of exploration
          with the thrill of discovery. With a focus on responsible tourism, we
          aim to leave a positive impact on the communities we visit while
          ensuring our guests have a seamless and enriching experience.
        </p>
        <h2 className=" text-xl mt-5 mb-2 ">Why Choose "Discover Georgia"</h2>
        <ul>
          <li>
            1. Expertise: Our team comprises seasoned travel enthusiasts with an
            in-depth knowledge of Georgia's landscapes, history, and local
            culture.
          </li>
          <li>
            2. Tailored Experiences: From personalized itineraries to
            off-the-beaten-path adventures, we customize every trip to suit your
            interests and preferences.
          </li>
          <li>
            3. Quality Accommodations: We partner with top-notch accommodations
            that reflect the unique character of each destination, ensuring
            comfort and authenticity.
          </li>
          <li>
            4. Local Connections: Immerse yourself in the true spirit of Georgia
            with our handpicked local guides who bring each place to life with
            their stories and insights.
          </li>
        </ul>
        <h2 className=" text-xl mt-5 mb-2 ">Join Us on Your Next Adventure</h2>
        <p>
          Whether you're a nature lover, history buff, or someone seeking a
          retreat from the hustle and bustle, [Your Company Name] invites you to
          embark on a journey through the beauty of Georgia. Let us be your
          guide to the wonders that await, as we create memories that last a
          lifetime. Come, explore with us, and see why Georgia is not just a
          destination—it's an experience.
        </p>
        <p className=" mt-5">Gaga Lapachi</p>
      </>
    </div>
  );
};
