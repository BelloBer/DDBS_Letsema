// src/components/Sidebar.js
import React, { useState } from "react";
import { FaHome, FaUsers, FaMoneyBillWave, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: ${(props) => (props.collapsed ? "60px" : "250px")};
  height: 100vh;
  background: #1e293b;
  color: white;
  position: fixed;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-left: 10px;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #334155;
  }
`;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContainer collapsed={collapsed}>
      <ToggleButton onClick={() => setCollapsed(!collapsed)}>
        <FaBars />
      </ToggleButton>
      <MenuItem to="/">
        <FaHome />
        {!collapsed && "Dashboard"}
      </MenuItem>
      <MenuItem to="/borrowers">
        <FaUsers />
        {!collapsed && "Borrowers"}
      </MenuItem>
      <MenuItem to="/loans">
        <FaMoneyBillWave />
        {!collapsed && "Loans"}
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
