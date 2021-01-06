import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box
  }
  *:focus{
    outline:0;
  }
  html, body, #root{
    height:100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font: 14px 'Ubuntu', sans-serif;
  }
    a{
      text-decoration:none;
    }
    ul{
      list-style: none;
    }
    button{
      cursor: pointer
    }
`;
