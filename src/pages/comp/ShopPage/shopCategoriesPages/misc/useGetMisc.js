import { useEffect } from "react";

export const useGetMisc = (setMiscData) => {
  const fetchMics = () => {
    fetch("http://localhost:1337/api/miscs/?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setMiscData(data);
      });
  };
  useEffect(() => {
    fetchMics();
  }, []);
};
