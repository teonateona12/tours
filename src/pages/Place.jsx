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
import Kutaisi from "../assets/kutaisi.jpg";
import Kutaisi1 from "../assets/kutaisi1.jpg";
import Kutaisi2 from "../assets/kutaisi2.jpg";
import Kutaisi3 from "../assets/kutaisi3.jpg";
import Martvili from "../assets/martvili.jpg";
import Martvili1 from "../assets/martvili1.jpg";
import Martvili2 from "../assets/martvili2.jpg";
import Martvili3 from "../assets/martvili3.jpg";
import Promete from "../assets/promete.jpg";
import Promete1 from "../assets/promete1.jpg";
import Promete2 from "../assets/promete2.jpg";
import Promete3 from "../assets/promete3.jpg";
import Batumi from "../assets/batumi.jpg";
import Batumi1 from "../assets/batumi1.jpg";
import Batumi2 from "../assets/batumi2.jpg";
import Batumi3 from "../assets/batumi3.jpg";
import Svaneti from "../assets/svaneti.jpg";
import Svaneti1 from "../assets/svaneti1.jpg";
import Svaneti2 from "../assets/svaneti2.jpg";
import Svaneti3 from "../assets/svaneti3.jpg";
import Bateti from "../assets/bateti.jpg";
import Bateti1 from "../assets/bateti1.jpg";
import Bateti2 from "../assets/bateti2.jpg";
import Bateti3 from "../assets/bateti3.jpg";
import Vardzia from "../assets/vardzia.jpeg";
import Vardzia1 from "../assets/vardzia1.jpg";
import Vardzia2 from "../assets/vardzia2.jpg";
import Vardzia3 from "../assets/vardzia3.jpeg";
import { useEffect } from "react";
const data = [
  {
    id: "tbilisi",
    name: "Tbilisi: The Intersection of Tradition and Modernity",
    text: "Embark on a captivating odyssey in Tbilisi, a city where the echoes of history resonate in every cobblestone, yet modern vibrancy pulses through its veins. Begin your journey wandering through the labyrinthine streets of the Old Town, a treasure trove of tales adorned with architectural wonders and charming courtyards. Discover hidden gems like the Narikala Fortress, standing sentinel over the city, and the Holy Trinity Cathedral, an awe-inspiring masterpiece of Georgian architecture. As the sun begins its descent, Tbilisi undergoes a transformative dance between the old and the new. Dusk casts a warm glow over the city, and the energy of Rustaveli Avenue surges with life. The boulevard, lined with shops, theaters, and cafes, becomes a bustling artery where locals and visitors alike intertwine. Yet, amid the urban hustle, find serenity in Rike Park, a green oasis nestled along the banks of the Kura River. Here, the soft rustle of leaves and the gentle flow of water provide a tranquil counterpoint to the city's lively tempo.",
    image1: Tbilisi,
    image2: BotanicGarden,
    image3: Mtawminda,
    image4: OldTbilisi,
    link: "https://www.youtube.com/watch?si=mFYv9CA28uGMpR-K&fbclid=IwAR3CmHSTnPsQS6s1JLx9sBWGs8nUGbQI498xFiSq1bf7NsD2eYyRHn7KLwg&v=f3lV2SchOX8&feature=youtu.be",
  },
  {
    id: "mtskheta",
    name: "Mtskheta: Where Ancient History Unfolds",
    text: "Embark on a captivating journey through time as you explore Mtskheta, the ancient capital and a UNESCO World Heritage site. The air is imbued with the weight of history as you stand before the majestic Svetitskhoveli Cathedral, an architectural marvel that resonates with the echoes of centuries past. Ascend to the Jvari Monastery, perched on a hill, where the panoramic views unveil the confluence of two rivers, creating a breathtaking tapestry of nature and culture. Wander through the cobbled streets that wind through Mtskheta, each stone bearing witness to the stories of bygone eras.",
    image1: Mtskheta,
    image2: Mtskheta1,
    image3: Mtskheta2,
    image4: Mtskheta3,
    link: "https://www.youtube.com/watch?si=BsHegaceph93DixZ&fbclid=IwAR2jmONx5nxWnK3sZQ2fkC6Q6YVFATeYkFd2z7CxEPyJg4lQ-05UE1-yxN8&v=es4tltVw7F4&feature=youtu.be",
  },
  {
    id: "sighnaghi",
    name: "Sighnaghi: The City of Love and Mesmerizing Views",
    text: "Embark on a romantic journey in Sighnaghi, the charming City of Love nestled in the heart of Kakheti. As you wander through cobblestone streets, feel the essence of love that permeates the air. Marvel at the breathtaking views of the Alazani Valley and the Caucasus Mountains that surround this picturesque town. Sighnaghi is more than a destination; it's a poetic symphony where love and beauty converge. The cobblestone streets weave a romantic tapestry, inviting you to explore hidden corners and intimate cafes. As you absorb the essence of love in the air, let the panoramic views of the Alazani Valley and the majestic Caucasus Mountains serve as a backdrop to your own love story. Sighnaghi beckons you to immerse yourself in the charm of its streets, where every step is a dance, and every moment is a serenade.",
    image1: Sighnaghi,
    image2: Sighnaghi1,
    image3: Sighnaghi2,
    image4: Sighnaghi3,
    link: "https://www.youtube.com/watch?si=CsgAfbWqwr3n0rZ2&fbclid=IwAR2JUCwZTUG8HNPdIos9Dgg7s4362PCWH0HTKvq36VQVXv41uuknCM38L6o&v=GvMyfgoucNo&feature=youtu.be",
  },
  {
    id: "kutaisi",
    name: "Kutaisi: Gateway to Western Georgia's Rich Heritage",
    text: "Embark on a journey through Kutaisi, the historic heart of western Georgia, where every cobblestone tells a story. Delve into the mysteries of the Prometheus Cave, a mesmerizing underground wonder. Explore the grandeur of the Bagrati Cathedral and the Gelati Monastery, both UNESCO treasures that showcase the region's rich cultural heritage. Kutaisi invites you to immerse yourself in a tapestry of history, nature, and architectural splendor. As you stroll through the vibrant streets, feel the echoes of the past whisper through the air. The Prometheus Cave, with its stalactite-adorned chambers, unveils the secrets of the underground, while the Bagrati Cathedral and Gelati Monastery stand as proud witnesses to centuries of cultural richness. In Kutaisi, history comes alive, and nature's embrace becomes an integral part of the narrative, inviting you to explore, discover, and appreciate the essence of western Georgia's heritage.",
    image1: Kutaisi,
    image2: Kutaisi1,
    image3: Kutaisi2,
    image4: Kutaisi3,
    link: "https://www.youtube.com/watch?v=UyxZoDrOdF4",
  },
  {
    id: "promete",
    name: "Prometheus Cave: Subterranean Wonderland",
    text: "Embark on a mesmerizing journey into the depths of Prometheus Cave, a subterranean wonder that unfolds beneath the surface of Georgia. Marvel at the intricate formations of stalactites and stalagmites that create a mystical underground landscape. As you venture through the illuminated chambers, each step reveals the natural beauty and geological marvels that make Prometheus Cave an enchanting destination for explorers and nature enthusiasts alike. Immerse yourself in the subterranean world, where time seems to stand still, and the play of light and shadow paints a masterpiece on the cave walls. Prometheus Cave is more than an underground marvel; it's a journey into the Earth's ancient secrets, an exploration of nature's artistic prowess that leaves an indelible mark on all who dare to venture into its depths.",
    image1: Promete,
    image2: Promete1,
    image3: Promete2,
    image4: Promete3,
    link: "https://www.youtube.com/watch?v=sVfh2FQdbGc",
  },
  {
    id: "batumi",
    name: "Batumi & Makhunceti: Coastal Bliss and Tranquil Monastery",
    text: "Experience the best of both worlds with Batumi's coastal charm and Makhunceti's tranquil monastery. In Batumi, stroll along the vibrant Batumi Boulevard, marvel at the modern sculptures, and absorb the energy of the Black Sea. Then, venture to Makhunceti to find solace in its peaceful monastery surrounded by nature. This unique combination invites you to discover the dynamic allure of Batumi and the serene spirituality of Makhunceti in one unforgettable journey. Batumi, with its seafront promenade, becomes a lively canvas where the sea breeze mingles with the vibrant energy of the city. Modern architecture and seaside attractions create a lively atmosphere that contrasts beautifully with Makhunceti's calm sanctuary. Makhunceti Monastery, nestled in the embrace of nature, offers a retreat for contemplation, surrounded by the whispers of the wind and the rustle of leaves. Together, Batumi and Makhunceti provide a harmonious blend of coastal bliss and spiritual tranquility, inviting you to savor the richness of this dual experience.",
    image1: Batumi,
    image2: Batumi1,
    image3: Batumi2,
    image4: Batumi3,
    link: "https://www.youtube.com/watch?v=ETsuzGQ7tPw",
  },
  {
    id: "bodbe",
    name: "Bodbe: Tranquility at the Confluence of Nature and Spirituality",
    text: "Discover serenity in Bodbe, a place where nature and spirituality converge harmoniously. Visit the St. Nino Monastery, surrounded by lush greenery and blooming gardens. Feel a sense of peace as you stroll through the peaceful grounds and witness the tranquil convergence of nature and religious heritage. Bodbe is more than a destination; it's a sanctuary for the soul, where the echoes of spiritual devotion resonate through the monastery's ancient walls. Surrounded by verdant landscapes, Bodbe invites you to pause, reflect, and find solace in the simplicity of nature's embrace. The blooming gardens, adorned with vibrant colors, create a serene backdrop to the St. Nino Monastery, inviting contemplation and connection with the divine. Bodbe's essence lies in the delicate balance between the natural beauty of the surroundings and the spiritual aura that permeates every corner, providing a haven for those seeking tranquility and introspection.",
    image1: Bodbe,
    image2: Bodbe1,
    image3: Bodbe2,
    image4: Bodbe3,
    link: "https://www.youtube.com/watch?si=GAGaw4E8NxRVMPrI&fbclid=IwAR1Wx3y75H6cU1pisoOx2tk9ZZLnYxv3EsbJU-LO11xBeAXlJuQ8JUMClM4&v=SIvC9craikM&feature=youtu.be",
  },
  {
    id: "bakuriani",
    name: "Bakuriani: Alpine Retreat and Winter Wonderland",
    text: "Escape to the charming alpine retreat of Bakuriani, where the magic of winter unfolds against a backdrop of snow-covered peaks. Whether you're a winter sports enthusiast or seeking a cozy mountain getaway, Bakuriani offers a haven of enchantment. Experience the thrill of skiing, embrace the serenity of the pine-clad landscapes, and revel in the warmth of Bakuriani's welcoming atmosphere. Bakuriani, with its snow-kissed slopes and frosty air, transforms into a winter wonderland that captivates the senses. The crisp mountain breeze carries the promise of adventure as you navigate the pristine trails. Yet, Bakuriani is not only a destination for winter enthusiasts; it's a year-round haven where the splendor of nature beckons in every season. In the summer, the lush greenery and alpine meadows invite you to explore, making Bakuriani a versatile retreat for those seeking both adventure and relaxation amid the Caucasus Mountains.",
    image1: Bakuriani,
    image2: Bakuriani1,
    image3: Bakuriani2,
    image4: Bakuriani3,
    link: "https://www.youtube.com/watch?v=b9pUwmtPDWI",
  },
  {
    id: "gudauri",
    name: "Gudauri: Alpine Adventure and Mountain Majesty",
    text: "Embark on an alpine adventure in Gudauri, a mountain paradise nestled in the breathtaking Caucasus. Whether you're a winter sports enthusiast or a nature lover, Gudauri offers a haven for those seeking adventure amid snow-capped peaks. Experience the thrill of skiing or hiking while surrounded by the majestic beauty of Gudauri's pristine landscapes. Gudauri's charm lies in its majestic mountain peaks that stand as sentinels against the vast, clear sky. The air is crisp with the promise of adventure, and the snow-covered slopes create a pristine canvas for winter enthusiasts. As you carve through the powder or traverse scenic trails, Gudauri unfolds its grandeur in every direction. In the warmer months, the mountainous landscapes transform into a lush tapestry of greenery, inviting exploration and awe. Gudauri is not just a destination; it's an alpine retreat where every season unveils a new facet of its natural splendor, promising an immersive experience in the heart of Georgia's mountain majesty.",
    image1: Gudauri,
    image2: Gudauri1,
    image3: Gudauri2,
    image4: Gudauri3,
    link: "https://www.youtube.com/watch?v=J2coBioLsvs",
  },
  {
    id: "ananuri",
    name: "Ananuri: Fortress by the Aragvi River",
    text: "Journey into the past at Ananuri, a citadel that stands as a testament to Georgia's rich history and architectural grandeur. Perched on the banks of the Aragvi River, Ananuri invites you to explore its ancient fortifications, intricate churches, and towers that whisper tales of bygone eras. The citadel complex, with its commanding views of the surrounding landscapes, offers a captivating glimpse into Georgia's cultural heritage. Ananuri is not merely a historical site; it's a journey through the ages, where each stone carries the weight of centuries. The churches, adorned with detailed carvings and vibrant frescoes, reflect the artistic prowess of their time. As you wander through the complex, the Aragvi River adds a soothing melody to the historic ambiance, creating a picturesque setting that merges the strength of fortifications with the tranquility of nature. Ananuri beckons you to step into a living history book, where the chapters unfold against the backdrop of riverside beauty and architectural splendor.",
    image1: Ananuri,
    image2: Ananuri1,
    image3: Ananuri2,
    image4: Ananuri3,
    link: "https://www.youtube.com/watch?si=eGrNtozfdANEJKba&fbclid=IwAR1uaaqP_6YvEgoylZlm4wmXrygQlEZBBp87JgZMJ7bnxpnSJhj4kcQAa60&v=vOkAP5BziHg&feature=youtu.be",
  },
  {
    id: "borjomi",
    name: "Borjomi: Rejuvenation in the Heart of Georgia",
    text: "Embark on a journey to Borjomi, a town embraced by nature's lush beauty and renowned for its healing mineral waters. Nestled amidst the rugged landscapes of the Lesser Caucasus, Borjomi beckons with promises of relaxation, rejuvenation, and exploration. The heart of Borjomi lies in its unique mineral springs, known for their therapeutic properties. As you wander through the verdant Borjomi Central Park, feel the soothing embrace of nature and breathe in the crisp mountain air. The park, adorned with century-old trees and vibrant flora, provides a tranquil setting for leisurely strolls or picnics beside the Borjomi River. Beyond the park's boundaries, discover the historical wonders of Borjomi, including the Romanov Palace and the intriguing Green Monastery. Borjomi is not just a destination; it's a holistic retreat where the convergence of nature and history creates a sanctuary for the soul. Let the mineral springs rejuvenate your spirit, the landscapes inspire your senses, and the historical sites unfold tales of centuries past. In Borjomi, find solace, adventure, and a timeless connection with Georgia's natural wonders.",
    image1: Borjomi,
    image2: Borjomi1,
    image3: Borjomi2,
    image4: Borjomi3,
    link: "https://www.youtube.com/watch?v=0Ug8etBDkjY",
  },
  {
    id: "rabati",
    name: "Rabati: Fortress of Diversity and Historical Splendor",
    text: "Step into the embrace of history at Rabati, a fortress that stands as a testament to the crossroads of diverse cultures and centuries of heritage. Nestled in the heart of Akhaltsikhe, Rabati invites you to explore its fortified walls, mosques, churches, and citadel towers that bear witness to the confluence of different civilizations. The fortress, with its striking architecture, reflects the influences of Ottoman, Persian, and Georgian cultures, creating a harmonious tapestry of cross-cultural heritage. As you traverse the cobbled paths within Rabati, each step carries you through epochs marked by architectural marvels and the echoes of bygone eras. The fortifications, adorned with intricate details, house a mosaic of religious structures, blending together in a symbolic representation of unity amid diversity. Beyond the fortress walls, the panoramic views of Akhaltsikhe unfold, providing a backdrop to the rich narrative of Rabati's historical significance. Rabati is more than a fortress; it's a living monument that invites you to walk through the corridors of time, where cultural exchanges have shaped its identity and created a timeless legacy.",
    image1: Rabati,
    image2: Rabati1,
    image3: Rabati2,
    image4: Rabati3,
    link: "https://www.youtube.com/watch?v=5KKdR-f47uw",
  },
  {
    id: "martvili",
    name: "Martvili: Nature's Marvel and Blue Oasis",
    text: "Embark on a journey to Martvili, a haven of natural splendor nestled in Georgia's landscape. Discover the enchanting Martvili Canyon, where emerald-green waters carve through limestone, creating a symphony of tranquility and beauty. As you traverse the wooden pathways, be captivated by the lush greenery, towering cliffs, and the crystal-clear flow of the Abasha River. Martvili is a canvas painted by nature, inviting you to immerse yourself in its serene ambiance. The canyon, with its unique geological formations and vibrant flora, offers a sensory experience that transcends the ordinary. Board a boat to navigate the river's gentle current, passing beneath lush canopies and through rocky corridors that unveil hidden alcoves. Martvili is not just a destination; it's a natural masterpiece that captures the essence of untouched beauty. Let the whispers of the river and the rustle of leaves guide you through this tranquil haven, where every moment becomes a brushstroke on the canvas of Martvili's serene landscape.",
    image1: Martvili,
    image2: Martvili1,
    image3: Martvili2,
    image4: Martvili3,
    link: "https://www.youtube.com/watch?v=IuY0fCzUZ9A",
  },
  {
    id: "svaneti",
    name: "Svaneti: Majestic Mountains and Timeless Traditions",
    text: "Embark on an awe-inspiring journey to Svaneti, a region where the majestic peaks of the Caucasus Mountains stand as sentinels over a land steeped in ancient traditions. Explore the iconic Svanetian towers, remarkable stone structures that bear witness to centuries of history and culture. As you traverse the landscapes of Upper Svaneti, be mesmerized by the juxtaposition of snow-capped peaks and lush valleys, creating a breathtaking panorama that encapsulates the rugged beauty of this mountainous terrain. Svaneti beckons you to delve into its rich cultural heritage, where the traditions of the Svan people have endured through the ages. The iconic towers, standing tall against the backdrop of the pristine mountains, tell stories of resilience and community. In Svaneti, every step is a journey through time, and every vista is a testament to the enduring spirit of a region that has preserved its unique identity amidst the grandeur of nature. Discover the timeless allure of Svaneti, where the mountains echo with the whispers of history, and the traditions of the Svan people create an indelible connection between past and present.",
    image1: Svaneti,
    image2: Svaneti1,
    image3: Svaneti2,
    image4: Svaneti3,
    link: "https://www.youtube.com/watch?v=zIDxYeMdAhI",
  },
  {
    id: "bateti",
    name: "Bateti lake: Tranquility in Nature's Embrace",
    text: "Embark on a journey to Bateti, a serene lake where tranquility and natural beauty intertwine to create an enchanting escape. Nestled amidst rolling hills and embraced by lush forests, Bateti captivates with its mystic allure. Wander along the tranquil shores and immerse yourself in the reflective calm of its pristine waters.",
    image1: Bateti,
    image2: Bateti1,
    image3: Bateti2,
    image4: Bateti3,
    link: "https://www.youtube.com/watch?v=w6iFM1yOJw8",
  },
  {
    id: "vardzia",
    name: "Vardzia: Cave City and Living Heritage",
    text: "Embark on a journey to Vardzia, a marvel that seamlessly blends ancient history with the rugged beauty of Georgia's landscapes. Explore the intricate network of cave dwellings carved into the cliffs, a testament to the region's rich heritage. Stand in awe of the panoramic views from the Vardzia complex, where the rocky terrain meets the blue sky. Vardzia invites you to delve into the living history of this cave city and discover the enduring legacy etched into its rocky foundations. As you navigate the tunnels and chambers, imagine the lives of those who sought refuge within these walls centuries ago. The cave monastery, with its rock-cut churches and dwellings, stands as a testament to the ingenuity of the medieval builders and the resilience of Vardzia through the ages. Surrounded by the natural beauty of the Erusheti Mountain, Vardzia captures the essence of a bygone era while offering a unique experience for modern explorers. Let the echoes of history guide you through this living heritage, where each cavern tells a story, and the panoramic vistas unfold a landscape that transcends time.",
    image1: Vardzia,
    image2: Vardzia1,
    image3: Vardzia2,
    image4: Vardzia3,
    link: "https://www.youtube.com/watch?v=VbvdbCVNl4c",
  },
];

export const Place = () => {
  const route = useParams();
  const place = data.find((item) => item.id === route.id);

  const openYoutubeLink = () => {
    window.open(place.link, "_blank");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.id]);

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
