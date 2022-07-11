import React, { useState } from "react";
import Carousel from "better-react-carousel";
import { useGetCarouselImages } from "./useGetCarouselImages";
import { apiUrl } from "../constants/baseApiUrl";

export const CarouselComponent = () => {
  const [carouselData, setCarouselData] = useState(undefined);
  useGetCarouselImages(setCarouselData);

  if (carouselData === undefined) {
    return <div></div>;
  }

  return (
    <div>
      <Carousel cols={3} rows={1} gap={10} loop={true}>
        {carouselData &&
          carouselData.data.map((x, key) => (
            <Carousel.Item key={key}>
              <img
                key={key}
                width="100%"
                src={`${apiUrl}${x.attributes.picture.data.attributes.url}`}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};
