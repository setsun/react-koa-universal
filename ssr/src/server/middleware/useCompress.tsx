const compress = require('koa-compress');

const useCompress = (app) => {
  const options = {
    filter: function (content_type) {
      return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  };

  app.use(compress(options));

  return app;
}

export default useCompress;
