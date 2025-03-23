// src/pages/Borrowers.js
import React from "react";
import styled from "styled-components";

const BorrowersContainer = styled.div`
  margin-left: 260px;
  padding: 20px;
`;

const Borrowers = () => {
  return (
    <BorrowersContainer>
      <h2>Borrowers</h2>
      <p>List of registered borrowers will appear here.</p>
    </BorrowersContainer>
  );
};

export default Borrowers;
