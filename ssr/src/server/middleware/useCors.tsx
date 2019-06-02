const cors = require('@koa/cors');

const useCors = (app) => {
  app.use(cors());
  return app;
}

export default useCors;
