import { useEffect } from "react";
import { apiUrl } from "../../../apiShit";

export const useGetProjects = (setProjectData) => {
  let fetchData = async () => {
    let response = await fetch(`${apiUrl}/api/portfolioprojects?populate=*`);
    let data = await response.json();
    setProjectData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
};
