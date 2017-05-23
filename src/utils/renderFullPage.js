export default (html, css, initialState) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="theme-color" content="#000000"/>
        <link rel="manifest" href="/public/manifest.json">
        <link rel="shortcut icon" href="/public/favicon.ico">
        ${css}
        <title>Setsun</title>
      </head>
      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">
          ${html}
        </div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/client.js"></script>
      </body>
    </html>
  `;
};
