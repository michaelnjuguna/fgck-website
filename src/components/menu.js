import * as React from "react";
import { Link } from "gatsby";
import "./styles/menu.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/logo.png";
// import { Navbar, Container,Nav } from "react-bootstrap";

// TODO Navbar component
// TODO Header component
// TODO Footer component
// TODO home page

let navlinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Give", link: "/give" },
  { name: "Contact", link: "/contact" },
];

function showMenu() {
  let nav = document.querySelector(".nav-links");
  // let navlink = document.querySelectorAll(".link")
  // navlink.classList.toggle("h3")
  // navlink.classList.toggle("h4")
  nav.classList.toggle("show");
}

export default function Menu() {
  return (
    <>
      <navbar className="nav-container px-5 bg-light">
        <div className="logo">
          <Link to="/">
            <img  src={Logo} alt="Full gospel churches of kenya machakos branch"/>
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            {navlinks.map((link,index)=>{
              return <li  key={index} className="nav-link nav-item text-dark">
                <Link to={link.link} className="h4 link">{link.name}</Link>
              </li>
            })}
          </ul>
        </div>
          <div className="toggler" onClick={showMenu}>
            <button className="h2 bg-light text-dark border border-3 p-2 border-dark">MENU</button>
          </div>
      </navbar>
    </>
  );
}
