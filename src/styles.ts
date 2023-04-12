import { styled } from "@stitches/react";

export const Container = styled("main", {
  display: "flex",
  gap: "20px",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#2c2c2c",
  fontFamily: "Inter, sans-serif",
  color: "#FFFFFF",
});

export const Form = styled("form", {
  gap: "20px",
  display: "flex",
  padding: "40px",
  borderRadius: "10px",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
});

export const Input = styled("input", {
  width: "300px",
  height: "50px",
  padding: "0 10px",
  borderRadius: "5px",
  backgroundColor: "#f1f1f1",
  color: "#2c2c2c",
  fontFamily: "Inter, sans-serif",
});

export const InputError = styled("span", {
  color: "#2c2c2c",
  fontFamily: "Inter, sans-serif",
  fontSize: "12px",
});

export const Button = styled("button", {
  width: "300px",
  height: "50px",
  padding: "0 10px",
  borderRadius: "5px",
  backgroundColor: "#2c2c2c",
  color: "#FFFFFF",
  fontWeight: "medium",
  fontFamily: "Inter, sans-serif",
  cursor: "pointer",
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: "#3c3c3c",
  },
});
