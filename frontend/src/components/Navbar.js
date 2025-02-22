// src/components/Navbar.js
import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  background: #1e293b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #38bdf8;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Letsema</Logo>
      <NavItems>
        <IconButton>
          <FaBell />
        </IconButton>
        <IconButton>
          <FaUserCircle />
        </IconButton>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
