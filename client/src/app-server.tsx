import compose from 'lodash/fp/compose';

import useLogger from './server/middleware/useLogger';
import useServeStatic from './server/middleware/useServeStatic';
import useRender from './server/middleware/useRender';

const Koa = require('koa');

const env = process.env.NODE_ENV || 'test';
const port = process.env.PORT || 8800;

const koa = new Koa();
const app = compose(
  useLogger,
  useServeStatic,
  useRender,
)(koa);

app.listen(port, function() {
  console.log(`Started on env:${env} and http://localhost:${this.address().port}`);
});
