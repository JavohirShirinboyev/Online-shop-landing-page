import React from "react";
import navLogo from "../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import ResponsiveModal from "./ResponsiveModal";

const Nav = () => {
  return (
    <>
      <nav className="navigation">
        <a href="#" className="nav-logo">
          <img src={navLogo} alt="Navbar logo" />
        </a>

        <ResponsiveModal className="responsive-modal" />

        <div className="searchSection">
          <form action="#">
            <input
              type="text"
              className="searchInput"
              placeholder="Search For Products, Brands & Categories"
            />
            <button className="searchBtn" type="button">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <div className="icons">
          <a href="#" className="bolimlar">
            <AiFillHeart />
          </a>
          <a href="#" className="bolimlar">
            <AiOutlineUser />
          </a>
          <a href="#" className="bolimlar">
            <SlBasket />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
