import React from "react";
import {ShoppingCart,MagnifyingGlass } from "phosphor-react";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-4 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            FakeShop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link active font-sans text-lg font-normal" aria-current="page" to="#/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-lg font-normal" to="#/">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-lg font-normal" to="#/">
                  Contacts
                </NavLink>
              </li>
             
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success d-flex" type="submit"><MagnifyingGlass size={24} />
              </button>
            </form>      
            <button className="btn btn-outline-warning ms-2 d-flex"><ShoppingCart size={24} />Cart</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;