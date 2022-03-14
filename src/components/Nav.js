import { NavLink } from "react-router-dom";
import Mainbrand from "../Assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/" className={classes.brand}>
            <img src={Mainbrand} alt="Brand Logo" />
            <h3>Learn with Sumit</h3>
          </NavLink>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
