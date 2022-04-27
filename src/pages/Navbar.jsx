import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className="navbar__wrapper">
      <div className="title__container">
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          DUK
        </h1>
      </div>
      <div className="menu__container">Box</div>
    </div>
  );
};
