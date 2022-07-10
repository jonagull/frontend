import { useEffect } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";

export const useGetDukClients = (setDukClients) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/duk-clients?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setDukClients(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
