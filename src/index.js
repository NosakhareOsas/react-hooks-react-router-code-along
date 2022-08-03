import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";


/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          //style={linkStyles}
          /* add prop for activeStyle */
          style={({ isActive }) => ({
            display: "inline-block",
            width: "50px",
            padding: "12px",
            margin: "0 6px 6px",
            background: isActive ? "red": "blue",
            textDecoration: "none",
            color: "white",
          })}
        >
          Home
      </NavLink>
      <NavLink
          to="/about"
          exact
          style={({ isActive }) => ({
            display: "inline-block",
            width: "50px",
            padding: "12px",
            margin: "0 6px 6px",
            background: isActive ? "red": "blue",
            textDecoration: "none",
            color: "white",
          })}
        >
          About
      </NavLink>
      <NavLink
          to="/login"
          style={({ isActive }) => ({
            display: "inline-block",
            width: "50px",
            padding: "12px",
            margin: "0 6px 6px",
            background: isActive ? "red": "blue",
            textDecoration: "none",
            color: "white",
          })}
        >
          Login
      </NavLink>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

// Step 2. Change so router is coordinating what is displayed
ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);