import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'JetBrains Mono', monospace;
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.6rem;
    height: 100%;
  }

  input {
    font: inherit;
    color: inherit;
    border: none;
    background: none;
    outline: 0;
  }

  input[type='button'] {
    padding: 0;
    cursor: pointer;
  }

  ul,
  li {
  margin: 0;
  padding: 0;
  }

  li {
    list-style: none;
  }

  button {
    display: inline-block;

    font: inherit;

    padding: 0;
    margin: 0;

    user-select: none;

    cursor: pointer;

    border: none;
    background: none;

    &:focus {
      outline: 0;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    margin: 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
