import path from 'path';

import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerLocation } from '@reach/router';

import { ServerStyleSheet } from 'styled-components';
import theme from '../style/theme';
import injectGlobalStyles from '../style/injectGlobalStyles';

import AppContainer from '../containers/AppContainer';
import AppProvider from '../providers/AppProvider';

import renderFullPage from '../utils/renderFullPage';

const env = process.env.NODE_ENV || 'test';
const port = process.env.PORT || 8800;

const routes = ['/'];

const app = new express();

app.use('/', express.static(path.join(__dirname, '/client')));
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();

  injectGlobalStyles();

  const html = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <AppProvider theme={theme} locale="en">
        <ServerLocation url={req.url}>
          <AppContainer />
        </ServerLocation>
      </AppProvider>,
    )
  );

  const css = sheet.getStyleTags();

  res.send(renderFullPage(html, css));
});

app.listen(port, function() {
  console.log(`Started on env:${env} and port:${this.address().port}`);
});
