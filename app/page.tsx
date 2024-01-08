"use client";
import styled, { css } from "styled-components";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Gameplan from "./components/Gameplan";
import Ecosystem from "./components/Ecosystem";
import Details from "./components/Details";
import Form from "./components/Form";
import Footer from "./components/Footer";

const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: "#BF4F74";
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: "#BF4F74";
      color: blue;
    `};
`;

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Gameplan />
      <Ecosystem />
      <Details />
      <Form />
      <Footer />
      {/* <Button>Normal Button</Button>
      <Button $primary>Primary Button</Button> */}
    </>
  );
}
