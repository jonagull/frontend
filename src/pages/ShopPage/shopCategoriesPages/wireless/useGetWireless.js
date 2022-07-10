import { useEffect } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";

export const useGetWireless = (setWirelessData) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/wirelesses/?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setWirelessData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
