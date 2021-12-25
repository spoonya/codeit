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
    color: inherit;

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

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.brand.primary};
  }

  /*================Resizer================*/
  .Resizer {
    z-index: 1;

    box-sizing: border-box;

    opacity: 1;
    background-color: ${({ theme }) => theme.divider};

    background-clip: padding-box;
  }

  .Resizer.horizontal {
    width: 100%;
    height: 11px;
    margin: -5px 0;

    cursor: row-resize;

    border-top: 5px solid rgba(255, 255, 255, 0);
    border-bottom: 5px solid rgba(255, 255, 255, 0);
  }

  .Resizer.vertical {
    width: 11px;
    margin: 0 -5px;

    cursor: col-resize;

    border-right: 5px solid rgba(255, 255, 255, 0);
    border-left: 5px solid rgba(255, 255, 255, 0);
  }

  .Resizer.disabled {
    cursor: not-allowed;
  }

  .DragLayer {
    z-index: 1;

    pointer-events: none;
  }

  .DragLayer.resizing {
    pointer-events: auto;
  }

  .DragLayer.horizontal {
    cursor: row-resize;
  }

  .DragLayer.vertical {
    cursor: col-resize;
  }
`;

export default GlobalStyle;
