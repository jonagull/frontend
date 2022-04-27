import { useEffect } from "react";

export const useGetMics = (setMicData) => {
  const fetchData = () => {
    fetch("http://localhost:1337/api/microphones/?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setMicData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
