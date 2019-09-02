import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';

const app = express();
app.use(express.static('dist'));

app.get('/', (req, res) => {
  const appComponent = ReactDOMServer.renderToString(<App />);

  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="index.css">
        <title>Document</title>
    </head>
    <body>
        <div id="main">${appComponent}</div>
        <script>window.appComponent='${appComponent}'</script>
        <script src="main.js"></script>
    </body>
    </html>`);
});

app.listen(3000, () => console.log('Listening on port 3000'));
