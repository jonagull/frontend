import { useEffect } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";

export const useGetDukFilmProductions = (setDukFilmProductions) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/duk-productions?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setDukFilmProductions(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
