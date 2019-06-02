import * as React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { renderToStringWithData } from 'react-apollo';
import { collect } from 'linaria/server';

import App from '../../components/App';
import Provider from '../../components/Provider';

const route = require('koa-route');
const fs = require('fs');

const useRender = (app) => {
  async function render ({ response }) {
    const css = fs.readFileSync('./dist/styles.css', 'utf8');
    const client = new ApolloClient({
      ssrMode: true,
      link: ApolloLink.from([]),
      cache: new InMemoryCache(),
    });

    renderToStringWithData(
      <Provider client={client}>
        <App />
      </Provider>
    )
      .then(html => {
        const { critical, other }  = collect(html, css);

        response.status = 200;

        response.body = `
          <!doctype html>
          <html lang="en">
            <head>
              <title>React Apollo Universal</title>
              <meta charset="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
              <meta name="theme-color" content="#000000"/>
              <link rel="manifest" href="/manifest.json">
              <link rel="shortcut icon" href="/favicon.ico">
              <style>
                @import url('https://fonts.googleapis.com/css?family=Roboto');
              </style>
              <style type="text/css">${critical}</style>
            </head>
            <body>
              <div id="root">${html}</div>
              <script src="/static/client.js"></script>
            </body>
          </html>
        `;
      })
      .catch(e => {
        response.status = 500;
        response.body = `A rendering error occurred:\n\n${e.stack}`;
        console.error('SSR Error:', e);
      });
  }

  app.use(route.get('*', render));

  return app;
}

export default useRender;
