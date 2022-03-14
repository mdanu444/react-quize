import { NavLink } from "react-router-dom";
import classes from "../styles/Account.module.css";
import { useAuth } from "./../contexts/AuthContext";

export default function Account(props) {
  const { currentUser, logout } = useAuth();

  const SetlogOut = () => {
    logout();
  };

  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title={classes.Account}>
        account_circle
      </span>
      {currentUser !== null ? (
        <>
          {currentUser.displayName || ""}
          <span
            className="material-icons-outlined"
            onClick={SetlogOut}
            title="Logout"
          >
            {" "}
            logout{" "}
          </span>{" "}
        </>
      ) : (
        <>
          <NavLink to="signup">Signup</NavLink>
          <NavLink to="login">Login</NavLink>
        </>
      )}
    </div>
  );
}
