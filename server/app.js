import path from 'path';
import koa from 'koa';
import reactView from 'koa-react-view';

const app = new koa();
const reactViewsPath = path.join(__dirname, 'containers');

reactView(app, {
  views: reactViewsPath
});

app.use(async (ctx, next) => {
  ctx.render('Index', {
    title: 'Index',
    list: [
      'hello koa',
      'hello react'
    ]
  });
});

app.listen(8818, function() {
  console.log(`Started on env:${process.env.NODE_ENV} and port:${this.address().port}`);
});
