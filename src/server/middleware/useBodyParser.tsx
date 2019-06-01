const parser = require('koa-bodyparser');

const useBodyParser = (app) => {
  app.use(parser());

  return app;
}

export default useBodyParser;
