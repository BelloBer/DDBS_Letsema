// src/pages/Loans.js
import React from "react";
import styled from "styled-components";

const LoansContainer = styled.div`
  margin-left: 260px;
  padding: 20px;
`;

const Loans = () => {
  return (
    <LoansContainer>
      <h2>Loans</h2>
      <p>Manage loan applications and approvals here.</p>
    </LoansContainer>
  );
};

export default Loans;
