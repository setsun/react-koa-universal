import path from 'path';
import koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';

import React from 'react';
import {renderToString} from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';
import {matchPath} from 'react-router-dom';
import Routes from './routes/Routes';
import renderFullPage from './utils/renderFullPage';
import rootReducer from './data/rootReducer';

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
    const store = createStore(rootReducer);
    const initialState = store.getState();

    const html = renderToString(
      <Provider store={store}>
        <StaticRouter context={{}} location={ctx.request.url}>
          <Routes />
        </StaticRouter>
      </Provider>
    );


    ctx.body = renderFullPage(html, initialState);
  }
});

app.listen(port, function() {
  console.log(`Started on env:${env} and port:${this.address().port}`);
});
