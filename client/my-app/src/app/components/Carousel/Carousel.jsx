"use Client";
//Måste kolla hur jag gör med bilder i next.js...att importera bild fungerar...
import { useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Golden from "../../../../public/assets/carousel/golden_dog.jpg";
import Dalmatines from "../../../../public/assets/carousel/dalmatine_dogs.jpg";
import Aussie from "../../../../public/assets/carousel/aussie_dog.jpg";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div>RENDERA UT KARUSELL</div>
      {/* <div
        id="carouselOfPawfect"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className={`carousel-item  ${currentSlide === 0 ? "active" : ""}`}
          >
            <Image
              className="d-block w-auto h-100"
              src={Golden}
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "300rem",
                height: "auto",
              }}
            />
          </div>
          <div
            className={`carousel-item  ${currentSlide === 1 ? "active" : ""}`}
          >
            <Image
              className="d-block w-vw"
              src={Dalmatines}
              alt="Second slide"
            />
          </div>
          <div
            className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}
          >
            <Image className="d-block w-100" src={Aussie} alt="Third slide" />
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}
