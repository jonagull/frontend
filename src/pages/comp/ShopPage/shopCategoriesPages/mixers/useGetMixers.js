import { useEffect } from "react";

const useGetMixers = () => {
  const fetchMixers = () => {
    fetch();
  };
  useEffect(() => {
    fetchMixers();
  }, []);
};
