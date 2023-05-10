import * as React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/icon.jpg";
import "./styles/menu.scss";
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

export default function Menu() {
  return (
    <>
      <navbar className="nav-container bg-light">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Full gospel churches of kenya machakos branch"/>
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            {navlinks.map((link,index)=>{
              return <li key={index} className="nav-link">
                <Link to={link.link}>{link.name}</Link>
              </li>
            })}
          </ul>
        </div>
      </navbar>
    </>
  );
}
