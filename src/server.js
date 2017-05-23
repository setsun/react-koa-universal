import path from 'path';
import koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';

import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {matchPath} from 'react-router-dom';
import Routes from './routes/Routes';
import renderFullPage from './utils/renderFullPage';

const app = new koa();

const routes = [
  '/'
];

const staticFiles = new koa();
staticFiles.use(serve(path.join(__dirname, '/client')));

app.use(mount('/static', staticFiles));

app.use(async (ctx, next) => {
  const match = routes.reduce((acc, route) => (
    matchPath(ctx.request.url, route, { exact: true}
  ) || acc), false);

  if (match) {
    const html = renderToString(
      <StaticRouter context={{}} location={ctx.request.url}>
        <Routes />
      </StaticRouter>
    );

    ctx.body = renderFullPage(html);
  }
});

app.listen(8818, function() {
  console.log(`Started on env:${process.env.NODE_ENV} and port:${this.address().port}`);
});
