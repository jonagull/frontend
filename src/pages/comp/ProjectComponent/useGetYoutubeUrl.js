import { useEffect } from "react";
import { apiUrl } from "../../../apiShit";

export const useGetYoutubeUrl = (setYoutubeUrl) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/youtube-links?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setYoutubeUrl(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
};
