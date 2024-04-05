import { createGlobalStyle, styled } from "styled-components";

export const Reset = createGlobalStyle`
/*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

    *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    height: 100%;
    font-size: 18px;
    font-family: sans-serif;

    cursor: none;
  }

  body {
    height: 100%;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100%;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  span, p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    text-shadow: 0 0 1em currentColor;
  }

  ol, ul {
    list-style: none;
  }

  #root, #__next {
    isolation: isolate;
  }

  * {
    margin: 0;
    padding: 0;
  }`;

export const App = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #000;
`;

export const Score = styled.span`
  position: fixed;
  top: 16px;
  right: 16px;

  color: #fff;
  font-size: 32px;

  user-select: none;
`;
