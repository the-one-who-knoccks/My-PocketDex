import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: #fff;
    background: linear-gradient(459.54deg, #7159c1 10%, #00C7C7 100%);

  }
  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }
`;
