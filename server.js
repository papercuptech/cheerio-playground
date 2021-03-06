const path = require('path');
const express = require('express');
const api = require('./build/api');

const app = express();
const port = (process.env.PORT || 8080);
const indexFile = path.join(__dirname, './index.html');
const publicPath = express.static(path.join(__dirname, './static'));

app.use('/static', publicPath);
app.get('/', (_, res) => res.sendFile(indexFile));

api(app);

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
