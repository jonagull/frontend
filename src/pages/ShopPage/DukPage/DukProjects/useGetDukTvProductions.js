import { useEffect } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";

export const useGetDukTvProductions = (setDukTvProductions) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/duk-tvproductions?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setDukTvProductions(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
