import path from 'path';
import koa from 'koa';

import React from 'react';
import {renderToString} from 'react-dom/server';
import renderFullPage from './utils/renderFullPage';

import Index from './containers/Index';

const app = new koa();

app.use(async (ctx, next) => {
  const html = renderToString(
    <Index />
  );

  ctx.body = renderFullPage(html);
});

app.listen(8818, function() {
  console.log(`Started on env:${process.env.NODE_ENV} and port:${this.address().port}`);
});
