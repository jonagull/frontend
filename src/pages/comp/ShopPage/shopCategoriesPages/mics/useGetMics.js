import { useEffect } from "react";

export const useGetMics = (setMicData) => {
  const fetchMics = () => {
    fetch("http://localhost:1337/api/microphones/?populate=*")
      .then((res) => res.json())
      .then((res) => {
        setMicData(res);
      });
  };
  useEffect(() => {
    fetchMics();
  }, []);
};
