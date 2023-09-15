import styled from "@emotion/styled";

import React from "react";

function StyledProps() {
  return (
    <Container column>
      <Button>This is a regular button.</Button>
      <Button primary>This is a primary button.</Button>
      <Fancy />
      <Example>
        This is <strong>nested</strong>.
      </Example>
    </Container>
  );
}

export default StyledProps;

const Button = styled.button`
  color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
`;

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: props.column && "column",
}));

const Basic = ({ className }) => <div className={className}>Some text</div>;

const Fancy = styled(Basic)`
  color: hotpink;
`;

const Example = styled("span")`
  color: lightgreen;

  & > strong {
    color: hotpink;
  }
`;
