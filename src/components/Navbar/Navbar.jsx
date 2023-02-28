import ListNavbar from "../ListNavbar/ListNavbar";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <ul className="containerNavbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Todos" />
      </NavLink>

      <NavLink
        to="/category/Casual"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Casual" />
      </NavLink>

      <NavLink
        to="/category/Fiesta"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Fiesta" />
      </NavLink>
    </ul>
  );
};

// export default Navbar
