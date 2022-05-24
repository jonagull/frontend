import { useEffect } from "react";
import { apiUrl } from "../../../../../apiShit";

export const useGetMics = (setMicData) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/microphones/?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setMicData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
