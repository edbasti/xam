import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  color: #474c50;
`;
const Subheader = styled.div`
  font-size: 9px;
  margin-bottom: 8px;
`;
const Details = styled.div`
  font-size: 24px;
`;
const StyledHr = styled.hr`
  border: 1px solid #d2d3d4;
  margin-bottom: 20px;
  width: 100%;
`;
const Wrapper = styled.div`
  margin-bottom: 10px;
`;

function Main() {
  return (
    <Container>
      <Wrapper>
        <Subheader>NEXT DIRECT DEBIT</Subheader>
        <Details>$356.95 in 10 days (29 Jul)</Details>
        <StyledHr />
      </Wrapper>
      <Wrapper>
        <Subheader>PAYMENT FREQUENCY</Subheader>
        <Details>Weekly on Wednesdays</Details>
        <StyledHr />
      </Wrapper>
    </Container>
  );
}

export default Main;
