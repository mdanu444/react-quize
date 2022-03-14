import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "./../styles/SignUpForm.module.css";
import Button from "./Button";
import InputBox from "./InputBox";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState();

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    signin(email, password);
    navigate("/");
  };

  return (
    <div>
      <form
        action=""
        onSubmit={submitHandler}
        className={`${classes.signup} form`}
      >
        <InputBox
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputBox
          type="password"
          placeholder="Enter password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        {error && (
          <>
            <p className="error">{error}</p> <br />
          </>
        )}

        <Button>
          <span>Submit Now</span>
        </Button>
      </form>

      <div className="info">
        Don't have an account? <NavLink to="/signup">Signup</NavLink> instead.
      </div>
    </div>
  );
}
