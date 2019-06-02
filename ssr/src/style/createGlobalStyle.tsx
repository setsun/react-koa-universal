import { css } from 'linaria';

const createGlobalStyle = () => {
  css`
    :global(body) {
      *,
      :after,
      :before {
        box-sizing: inherit;
      }

      html {
        box-sizing: border-box;
        font-size: 16px;
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
        margin: 0;
      }
    }
  `;
};

export default createGlobalStyle;
