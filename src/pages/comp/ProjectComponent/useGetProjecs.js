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

// token - 5e40db3f818b198d865ac5a5831e29f10b00a9c13417ae55709a8565e2fdd0865f02277200152ff5203b7087974b17edebb78d2099874bde8fdc2ea05cbbe24cee296027e513afdf19afff849fffb5a31972a06c1c3ddab53761feee8fb396121919e62d5c21efd7c7810dade3bdb4c7cff8ff722103fc5d3e3963b7fd493340
