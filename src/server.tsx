import * as React from 'react';
import { StaticRouter } from 'react-router';
import { matchPath } from 'react-router-dom';

import ApolloClient from 'apollo-client';
import { renderToStringWithData } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

import { ServerStyleSheet } from 'styled-components';
import theme from './style/theme';
import injectGlobalStyles from './style/injectGlobalStyles';

import AppContainer from './containers/AppContainer';
import AppProvider from './providers/AppProvider';

const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');

const env = process.env.NODE_ENV || 'test';
const port = process.env.PORT || 8800;

const app = express();
const routes = ['/'];

app.use('/', express.static(path.join(__dirname, '../public')));

if (process.env.NODE_ENV === 'production') {
  // In production we want to serve our JS from a file on the filesystem.
  app.use('/static', express.static(path.join(__dirname, 'dist/client')));
} else {
  // Otherwise we want to proxy the webpack development server.
  app.use(
    '/static',
    proxy({ target: 'http://localhost:8888', pathRewrite: { '^/static': '' } })
  );
}

app.get('*', (req, res) => {
  const match = routes.reduce(
    (acc, route) => matchPath(req.url, route, { exact: true }) || acc,
    false
  );

  if (!match) return;

  const client = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([]),
    cache: new InMemoryCache(),
  });

  const sheet = new ServerStyleSheet();

  injectGlobalStyles();

  renderToStringWithData(
    sheet.collectStyles(
      <AppProvider client={client} theme={theme} locale="en">
        <StaticRouter context={{}} location={req.url}>
          <AppContainer />
        </StaticRouter>
      </AppProvider>
    )
  )
    .then(html => {
      const css = sheet.getStyleTags();

      res.status(200);
      res.send(`
      <!doctype html>
      <html lang="en">
        <head>
          <title>React Apollo Universal</title>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="theme-color" content="#000000"/>
          <link rel="manifest" href="/manifest.json">
          <link rel="shortcut icon" href="/favicon.ico">
          ${css}
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/static/client.js"></script>
        </body>
      </html>
    `);
    })
    .catch(e => {
      console.error('SSR Error:', e);
      res.status(500);
      res.end(`A rendering error occurred:\n\n${e.stack}`);
    });
});

app.listen(port, function() {
  console.log(
    `Started on env:${env} and http://localhost:${this.address().port}`
  );
});
