import { useEffect } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";

export const useGetDukProjects = (setDukProjects) => {
  const fetchData = () => {
    fetch(`${apiUrl}/api/duk-projects?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setDukProjects(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
};
