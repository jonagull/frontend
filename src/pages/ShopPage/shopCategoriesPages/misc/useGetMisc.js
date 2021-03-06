import { useEffect } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";

export const useGetMisc = (setMiscData) => {
  const fetchMics = () => {
    fetch(`${apiUrl}/api/miscs/?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setMiscData(data);
      });
  };
  useEffect(() => {
    fetchMics();
  }, []);
};
