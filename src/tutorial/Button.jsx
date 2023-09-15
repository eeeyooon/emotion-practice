/** @jsxImportSource @emotion/react */

function Button({ children }) {
  return (
    <button
      css={{
        borderRadius: "6px",
        border: "1px solid rgba(27, 31, 36, 0.15)",
        backgroundColor: "rgb(246, 248, 250)",
        color: "rgb(36, 41, 47)",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: "600",
        lineHeight: "20px",
        fontSize: "14px",
        padding: "5px 16px",
        textAlign: "center",
        cursor: "pointer",
        appearance: "none",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
