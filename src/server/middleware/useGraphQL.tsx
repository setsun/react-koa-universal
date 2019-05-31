const route = require('koa-route');

const useGraphQL = (app) => {
  const graphql = () => {};

  app.use(route.get('/graphql', graphql));

  return app;
}

export default useGraphQL;
