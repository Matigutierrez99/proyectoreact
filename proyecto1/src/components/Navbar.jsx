import React from "react";
import "./navbar.css";
import logo from "../assets/logo";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="navbarLista">
            <li className="navbarItem">
              <a href="">Inicio</a>
            </li>
            <li className="navbarItem">
              <a href="">Productos</a>
            </li>
            <li className="navbarItem">
              <a href="">Nosotros</a>
            </li>
            <li className="navbarItem">
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
