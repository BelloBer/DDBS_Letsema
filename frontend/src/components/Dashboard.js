// src/components/Dashboard.js
import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  margin-left: 260px;
  padding: 20px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      <p>Welcome to Letsema Loan Management System.</p>
    </DashboardContainer>
  );
};

export default Dashboard;
