import compose from 'lodash/fp/compose';

import useRender from './server/middleware/useRender';
import useGraphQL from './server/middleware/useGraphQL';
import useServeStatic from './server/middleware/useServeStatic';
import useLogger from './server/middleware/useLogger';

const Koa = require('koa');

const env = process.env.NODE_ENV || 'test';
const port = process.env.PORT || 8800;

const koa = new Koa();
const app = compose(
  useRender,
  useGraphQL,
  useServeStatic,
  useLogger,
)(koa);

app.listen(port, function() {
  console.log(`Started on env:${env} and http://localhost:${this.address().port}`);
});
