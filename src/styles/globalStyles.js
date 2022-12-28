import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    align-items: center;
    background-image: url("https://i.pinimg.com/originals/4c/2d/5f/4c2d5fdb384a5e68eda0cc5886c00417.gif");
    background-position: 20% 80%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    color: white;
    display: flex;
    flex-direction: column;
    font-family: monospace;
    justify-content: center;
    height: 100vh;
    width: 100%;
    
  }

  #root {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
  }

  @media (min-width:600px) {
    body {
      background-size: 100% 100%;
      box-shadow: 0 8px 32px 0 rgba(238, 34, 238, 0.37);
    }
  }

`;
 
export default GlobalStyle;