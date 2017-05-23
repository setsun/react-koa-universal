const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Setsun\'s World';
});

app.listen(3000);
