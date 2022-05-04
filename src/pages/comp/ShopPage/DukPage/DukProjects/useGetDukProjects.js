import { useEffect } from "react";
import { apiUrl } from "../../../../../apiShit";

export const useGetDukProjects = (setDukProjects) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/duk-projects?populate=*`)
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
