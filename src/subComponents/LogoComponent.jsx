import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return (
    <NavLink to="/">
      <Logo color={props.theme}>黎興</Logo>
    </NavLink>
  );
};

export default LogoComponent;
