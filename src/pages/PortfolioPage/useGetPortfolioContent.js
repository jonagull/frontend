import { useEffect } from "react";
import { apiUrl } from "../../constants/baseApiUrl";

export const useGetPortfolioContent = (setPortfolioContentData) => {
  let fetchData = async () => {
    let response = await fetch(
      `${apiUrl}/api/portfolio-side-contents/1?populate=*`
    );
    let data = await response.json();
    setPortfolioContentData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
};
