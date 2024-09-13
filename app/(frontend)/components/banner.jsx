"use client"
import { Carousel } from "@material-tailwind/react";
 
export function Banner() {
  return (
    <Carousel loop={true} autoplay={true} autoplayDelay={2000} className="rounded-xl h-[500px]">
      <img
        src="https://picsum.photos/1000/300"
        alt="image 1"
        className="h-[450px] w-full object-cover"
      />
      <img
        src="https://picsum.photos/1000/300"
        alt="image 2"
        className="h-[450px] w-full object-cover"
      />
      <img
        src="https://picsum.photos/1000/300"
        alt="image 3"
        className="h-[450px] w-full object-cover"
      />
    </Carousel>
  );
}