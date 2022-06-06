import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledHeader = styled.div`
  color: #002a61;
  font-size: 24px;
`;

const StyledHr = styled.hr`
  border: 0.5px solid #002a61;
  width: 100%;
  margin-bottom: 40px;
`;

function Header() {
  return (
    <Container>
      <StyledHeader>Repayments</StyledHeader>
      <StyledHr />
    </Container>
  );
}

export default Header;
