import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


@font-face {
  font-family: 'Roboto-Black';
  src: url('../assets/fonts/Roboto/Roboto-Black.ttf') format('truetype'); /* IE9 Compat Modes */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }

  html , body, #root {
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Roboto-Black', 'Open Sans', 'Helvetica Neue', sans-serif
    }

    html {
        background: var(--black);
    }


    :root {
        --green: #1DB954;
        --white: #FFFFFF;
        --black: #191414;
        --gray: #b3b3b3;
        --black-hover: #282828;

    }

`;