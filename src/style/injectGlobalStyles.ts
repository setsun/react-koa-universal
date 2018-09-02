import { injectGlobal } from 'styled-components';

export default () => {
  injectGlobal`
    *,
    :after,
    :before {
      box-sizing: inherit;
    }

    html {
      box-sizing: border-box;
      font-size: 16px;
    }

    @media screen and (min-width: 900px) {
      html {
        font-size: 18px;
      }
    }

    @media screen and (min-width: 1200px) {
      html {
        font-size: 20px;
      }
    }

    body {
      font-family: Roboto, serif;
      margin: 0;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  `;
};
