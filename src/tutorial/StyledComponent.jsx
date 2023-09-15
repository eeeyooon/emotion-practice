import React from "react";
import styled from "@emotion/styled";

function StyledComponent() {
  return <Button>Styled-Button</Button>;
}

export default StyledComponent;

const Button = styled.button`
  color: hotpink;
  width: 150px;
  height: 60px;
  border-radius: 10px;
  border: none;
  font-size: large;
  display: block;
  margin: 10px;
  font-weight: bold;
`;
