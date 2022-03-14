import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";
import classes from "./../styles/SignUpForm.module.css";
import Button from "./Button";
import Checkbox from "./Checkbox";
import InputBox from "./InputBox";

export default function SignupForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const { signup, currentUser } = useAuth();
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Confirm password must same to the password!");
    } else {
      await signup(email, password, userName);
      console.log(currentUser);
      navigate("/");
    }
  }
  return (
    <div>
      <form
        action=""
        onSubmit={submitHandler}
        method="post"
        className={`${classes.signup} form`}
      >
        <InputBox
          required
          type="text"
          placeholder="Enter name"
          icon="person"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputBox
          required
          type="email"
          placeholder="Enter email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox
          required
          type="password"
          placeholder="Enter password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputBox
          required
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <Checkbox
          required
          text=" I agree to the Terms &amp; Conditions"
          checked={agree}
          onChange={(e) => setAgree(!agree)}
        />
        {error && <p className="error"> {error} </p>}
        <br /> <br />
        <Button type="submit" onSubmit={submitHandler}>
          <span>Submit Now</span>
        </Button>
      </form>
    </div>
  );
}
