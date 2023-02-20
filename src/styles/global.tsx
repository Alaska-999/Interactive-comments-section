import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

  * {
    /* Typography */
    --family: 'Rubik', sans-serif;
    --fz: 16px;

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: var(--family), sans-serif;
  }


  body {
    //colors

    --moderate-blue: hsl(238, 40%, 52%);
    --soft-red: hsl(358, 79%, 66%);
    --light-grayish-blue: hsl(239, 57%, 85%);
    --pale-red: hsl(357, 100%, 86%);
    --blue-dark: hsl(212, 24%, 26%);
    --light-gray: hsl(223, 19%, 93%);
    --very-light-gray: hsl(228, 33%, 97%);
    --white: hsl(0, 0%, 100%);
    --radii: 5px;

    background-color: var(--very-light-gray);
  }

`

export default GlobalStyle