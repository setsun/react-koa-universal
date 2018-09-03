import { injectGlobal } from 'styled-components';
import theme from './theme';

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

    @media screen and (min-width: ${theme.breakpoints.md}) {
      html {
        font-size: 18px;
      }
    }

    @media screen and (min-width: ${theme.breakpoints.lg}) {
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
      margin-top: ${theme.spacing[2]};
      margin-bottom: ${theme.spacing[2]};
    }
  `;
};
