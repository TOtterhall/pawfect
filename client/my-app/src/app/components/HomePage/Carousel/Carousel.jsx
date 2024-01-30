import { useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Golden from "../../../../../public/assets/carousel/golden_dog.jpg";
import Dalmatines from "../../../../../public/assets/carousel/dalmatine_dogs.jpg";
import Aussie from "../../../../../public/assets/carousel/aussie_dog.jpg";
//BYT BILDER//SE ÖVER STORLEKARNA
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div
            className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}
          >
            <Image
              className="d-block w-100 img-fluid"
              src={Golden}
              alt="Golden Dog"
              width={1920}
              height={1080}
            />
          </div>
          <div
            className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}
          >
            <Image
              className="d-block w-100 img-fluid"
              src={Dalmatines}
              alt="Dalmatine Dogs"
              width={1920}
              height={1080}
            />
          </div>
          <div
            className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}
          >
            <Image
              className="d-block w-100 img-fluid"
              src={Aussie}
              alt="Aussie Dog"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
