import compose from 'lodash/fp/compose';

import useBodyParser from './server/middleware/useBodyParser';
import useCors from './server/middleware/useCors';
import useLogger from './server/middleware/useLogger';
import useCompress from './server/middleware/useCompress';
import useServeStatic from './server/middleware/useServeStatic';
import useGraphQL from './server/middleware/useGraphQL';
import useRender from './server/middleware/useRender';

const Koa = require('koa');

const env = process.env.NODE_ENV || 'test';
const port = process.env.PORT || 8800;

const koa = new Koa();
const app = compose(
  useBodyParser,
  useCors,
  useLogger,
  useCompress,
  useServeStatic,
  useGraphQL,
  useRender,
)(koa);

app.listen(port, function() {
  console.log(`Started on env:${env} and http://localhost:${this.address().port}`);
});
