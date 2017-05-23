const path = require('path');

const koa = require('koa');
const reactView = require('koa-react-view');
const register = require('babel-register');

const app = new koa();

const reactViewsPath = path.join(__dirname, 'containers');

reactView(app, {
  views: reactViewsPath
});

register({
  presets: ['react-app'],
  extensions: ['.jsx'],
});

app.use(function* () {
  this.render('Index', {
    title: 'Index',
    list: [
      'hello koa',
      'hello react'
    ]
  });
});

app.listen(8818);
console.log('Started!');
