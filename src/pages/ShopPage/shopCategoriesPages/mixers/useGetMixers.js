import { useEffect } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";

export const useGetMixers = (setMixerData) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/mixers/?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setMixerData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
