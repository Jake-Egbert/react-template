import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink className="navlink" to="/login">
        Login
      </NavLink>
      <NavLink to="/component-one">ComponentOne</NavLink>
      <NavLink to="/component-two">ComponentTwo</NavLink>
    </div>
  );
}
