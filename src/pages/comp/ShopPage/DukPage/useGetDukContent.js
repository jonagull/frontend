import { useEffect } from "react";
import { apiUrl } from "../../../../apiShit";

export const useGetDukContent = (setDukContent) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/duk-contents/?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setDukContent(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
};
