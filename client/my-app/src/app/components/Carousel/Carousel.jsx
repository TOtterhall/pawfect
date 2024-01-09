"use Client";
// import Image from "next/image";
// import Golden from "../../../assets/carousel/golden_dog.jpg";
export default function Carousel() {
  return (
    <div>BILDER</div>
    // <Image
    //   class="imageOne"
    //   src={Golden}
    //   width={1200}
    //   height={700}
    //   alt="Picture of the author"
    // />
  );
}
// "use Client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Golden from "../../../assets/carousel/golden_dog.jpg";
// import Dalmatines from "../../../assets/carousel/dalmatine_dogs.jpg";
// import Aussie from "../../../assets/carousel/aussie_dog.jpg";

// export default function Carousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div>
//       <div id="carouselOfPawfect" class="carousel slide" data-ride="carousel">
//         <div class="carousel-inner">
//           <div class={`carousel-item  ${currentSlide === 0 ? "active" : ""}`}>
//             <Image
//               class="d-block w-auto h-100"
//               src={Golden}
//               alt="First slide"
//             />
//           </div>
//           <div class={`carousel-item  ${currentSlide === 1 ? "active" : ""}`}>
//             <Image
//               className="d-block w-vw"
//               src={Dalmatines}
//               alt="Second slide"
//             />
//           </div>
//           <div class={`carousel-item ${currentSlide === 2 ? "active" : ""}`}>
//             <Image class="d-block w-100" src={Aussie} alt="Third slide" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
