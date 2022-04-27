import { useEffect } from "react";

export const useGetDukContent = (setDukContent) => {
  const fetchData = () => {
    fetch("http://localhost:1337/api/duk-contents/?populate=*")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDukContent(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
};
