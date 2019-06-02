const logger = require('koa-logger');

const useLogger = (app) => {
  app.use(logger);
  return app;
}

export default useLogger;
