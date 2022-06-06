import React from "react";
import styled from "styled-components";
import calendar from "../img/icon-calendar.svg"; // with import
import coin from "../img/icon-coin.svg"; // with import

const MainContent = styled.div`
  color: #002a61;
  background-color: #f4f7fb;
  width: 25%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const Text = styled.div`
  font-weight: 700;
  font-size: 12px;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const StyledHr = styled.hr`
  border: 1px solid #d2d3d4;
  width: 100%;
`;

function Sidebar() {
  return (
    <MainContent>
      <Wrapper>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Icon src={coin} />
          <Text>Make an extra payment</Text>
        </div>
        <span>{">"}</span>
      </Wrapper>
      <StyledHr />
      <Wrapper>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Icon src={calendar} />
          <Text>Change repayment date</Text>
        </div>
        <span>{">"}</span>
      </Wrapper>
      <StyledHr />
      <Wrapper>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Icon src={coin} />
          <Text>Change repayment amount</Text>
        </div>
        <span>{">"}</span>
      </Wrapper>
    </MainContent>
  );
}

export default Sidebar;
