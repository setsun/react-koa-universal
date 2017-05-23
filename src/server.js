import path from 'path';
import koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';

import React from 'react';
import {renderToString} from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './data/rootReducer';

import {StaticRouter} from 'react-router';
import {matchPath} from 'react-router-dom';
import Routes from './routes/Routes';

import {ThemeProvider, ServerStyleSheet} from 'styled-components';
import theme from './style/theme';

import renderFullPage from './utils/renderFullPage';

const env = process.env.NODE_ENV || 'test';
const port = process.env.PORT || 8800;

const routes = [
  '/'
];

const staticFiles = new koa();

staticFiles.use(serve(path.join(__dirname, '/client')));

const app = new koa();

app.use(mount('/static', staticFiles));

app.use(async (ctx, next) => {
  const match = routes.reduce((acc, route) => (
    matchPath(ctx.request.url, route, { exact: true}
  ) || acc), false);

  if (match) {
    const sheet = new ServerStyleSheet();
    const store = createStore(rootReducer);
    const initialState = store.getState();

    const html = renderToString(
      sheet.collectStyles(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <StaticRouter context={{}} location={ctx.request.url}>
              <Routes />
            </StaticRouter>
          </Provider>
        </ThemeProvider>
      )
    );

    const css = sheet.getStyleTags();

    ctx.body = renderFullPage(html, css, initialState);
  }
});

app.listen(port, function() {
  console.log(`Started on env:${env} and port:${this.address().port}`);
});
