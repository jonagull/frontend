import { useEffect } from "react";
import { apiUrl } from "../constants/baseApiUrl";

export const useGetCarouselImages = (setCarouselData) => {
  let fetchData = async () => {
    let response = await fetch(`${apiUrl}/api/carousel-pictures/?populate=*`);
    let data = await response.json();
    setCarouselData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
};
