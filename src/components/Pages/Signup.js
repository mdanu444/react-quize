import { NavLink } from "react-router-dom";
import image from "../../Assets/images/signup.svg";
import Illustration from "../Illustration";
import SignUpForm from "../SignupForm";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={image} />
        <SignUpForm />
      </div>

      <div className="info">
        Already have an account? <NavLink to="/login">Login</NavLink> instead.
      </div>
    </>
  );
}
