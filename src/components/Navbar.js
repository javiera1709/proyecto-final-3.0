import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../img/POKESTORE-7-11-2023.png";

function Navbar() {
    return (
      <div className="Navbar mb-5">
        <nav className="navbar bg-body-tertiary fixed-top">
          <div className="container-fluid">
          <div> 
              <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src={Logo} style={{ height: '50px', width: 'auto' }} alt="Logo" />
            </a>
          </div>
          <div className="mx-5 my-2">
          <Link to="/carrito" class="nav-link">          <button type="button" class="btn btn-light position-relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0
              <span class="visually-hidden">Elementos en el carrito</span>
            </span>
          </button></Link>

          </div>

            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
 <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
          <li class="nav-item">
            <Link to="/" class="nav-link">Inicio</Link>
          </li>
        <li class="nav-item">
            <Link to="/catalogo" class="nav-link">Catálogo</Link>
        </li>
          
        </ul>
            </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
export default Navbar;
  
