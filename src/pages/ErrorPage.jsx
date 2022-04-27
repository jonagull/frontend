import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const ErrorPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Error page go back!</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};
