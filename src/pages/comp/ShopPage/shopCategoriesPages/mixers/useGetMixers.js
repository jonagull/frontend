import { useEffect } from "react";

export const useGetMixers = (setMixerData) => {
  const fetchData = () => {
    fetch("http://localhost:1337/api/mixers/?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setMixerData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
