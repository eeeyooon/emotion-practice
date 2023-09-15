/** @jsxImportSource @emotion/react */
//* JSX pragma : React의 jsx() 함수를 사용하지 말고, Emotion의 jsx() 함수를 대신 사용하라고 알려주기 위함
//* css prop에 넘어간 스타일이 제대로 반영이 되지 않을테니 주의

import React from "react";
import { css } from "@emotion/react";

function MyComponent() {
  const style = css`
    color: hotpink;
  `;

  const decoration = css({
    textDecoration: "underline",
    backgroundColor: "yellow",
  });

  return (
    <>
      <div css={decoration}>노란색 영역</div>
      <div css={style}>Some Hotpink Text</div>
    </>
  );
}

export default MyComponent;
