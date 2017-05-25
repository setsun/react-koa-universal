import path from 'path';
import koa from 'koa';
import serve from 'koa-static-cache';
import mount from 'koa-mount';
import compress from 'koa-compress';

import React from 'react';
import {renderToString} from 'react-dom/server';
import {createStore} from 'redux';
import rootReducer from 'data/rootReducer';

import {StaticRouter} from 'react-router';
import {matchPath} from 'react-router-dom';

import {ServerStyleSheet} from 'styled-components';
import theme from 'style/theme';
import injectGlobalStyles from 'style/injectGlobalStyles';

import AppContainer from 'containers/AppContainer';
import AppProvider from 'providers/AppProvider';

import renderFullPage from 'utils/renderFullPage';

const env = process.env.NODE_ENV || 'test';
const port = process.env.PORT || 8800;

const routes = [
  '/',
];

const staticFiles = new koa();

staticFiles.use(serve(path.join(__dirname, '/client'), {
  maxAge: 365 * 24 * 60 * 60
}));
staticFiles.use(serve(path.join(__dirname, '../public'), {
  maxAge: 365 * 24 * 60 * 60
}));

const app = new koa();

app.use(mount('/static', staticFiles));

app.use(compress({
  threshold: 512,
  flush: require('zlib').Z_SYNC_FLUSH
}));

app.use(async (ctx, next) => {
  const match = routes.reduce((acc, route) => (
    matchPath(ctx.request.url, route, { exact: true}
  ) || acc), false);

  if (match) {
    const sheet = new ServerStyleSheet();
    const store = createStore(rootReducer);
    const initialState = store.getState();

    injectGlobalStyles();

    const html = renderToString(
      sheet.collectStyles(
        <AppProvider store={store} theme={theme} locale="en">
          <StaticRouter context={{}} location={ctx.request.url}>
            <AppContainer />
          </StaticRouter>
        </AppProvider>
      )
    );

    const css = sheet.getStyleTags();

    ctx.body = renderFullPage(html, css, initialState);
  }
});

app.listen(port, function() {
  console.log(`Started on env:${env} and port:${this.address().port}`);
});
