import { useEffect } from "react";

export const useGetDukProjects = (setDukProjects) => {
  const fetchData = () => {
    fetch("http://localhost:1337/api/duk-projects?populate=*")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDukProjects(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
