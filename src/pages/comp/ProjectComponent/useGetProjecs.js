import { useEffect, useState } from "react";

export const useGetProjects = (setProjectData) => {
  let fetchData = async () => {
    let response = await fetch(
      "http://localhost:1337/api/portfolioprojects?populate=*"
    );
    let data = await response.json();
    setProjectData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
};
