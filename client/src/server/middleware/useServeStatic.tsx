const route = require('koa-route');
const serve = require('koa-serve');
const path = require('path');
const proxy = require('http-proxy-middleware');

const useServeStatic = (app) => {
  const servePublic = serve(path.join(__dirname, '../public'));

  // In production we want to serve our JS from a file on the filesystem.
  // Otherwise we want to proxy the webpack development server.
  const serveClient = process.env.NODE_ENV === 'production' ?
    serve(path.join(__dirname, 'dist/client')) :
    proxy({ target: 'http://localhost:8888', pathRewrite: { '^/static': '' } })

  app.use(route.get('/', servePublic));
  app.use(route.get('/static', serveClient));

  return app;
}

export default useServeStatic;
