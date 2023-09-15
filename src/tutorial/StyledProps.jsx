import styled from "@emotion/styled";
import { css } from "@emotion/react";

import React from "react";

function StyledProps() {
  return (
    <Container column>
      <Button>This is a regular button.</Button>
      <Button primary>This is a primary button.</Button>
      <Fancy />
      <DynamicBox color="lightgreen">This is lightgreen</DynamicBox>
      <ButtonLikeA as="a" href="https://github.com/emotion-js/emotion">
        Emotion on GitHub
      </ButtonLikeA>
      <Example>
        This is <strong>nested</strong>.
      </Example>
    </Container>
  );
}

export default StyledProps;

// Changing based on props
const Button = styled.button`
  color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
`;

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: props.column && "column",
}));

//Styling any component
const Basic = ({ className }) => <div className={className}>Some text</div>;

const Fancy = styled(Basic)`
  color: hotpink;
`;

// Composing dynamic styles
const dynamicStyle = (props) => css`
  color: ${props.color};
`;
const DynamicBox = styled.div`
  ${dynamicStyle}
`;

// as prop
const ButtonLikeA = styled.button`
  color: hotpink;
`;

// Nesting Components
const Example = styled("span")`
  color: lightgreen;

  & > strong {
    color: hotpink;
  }
`;
