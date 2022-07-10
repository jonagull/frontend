import { useEffect } from "react";
import { apiUrl } from "../../constants/baseApiUrl";

export const useGetThumbnails = (setCategoryThumbnail) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/category-thumbnails/?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryThumbnail(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
