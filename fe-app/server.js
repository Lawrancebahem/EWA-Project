//configuration
const express = require('express');

const pjson = require('./package.json');

const app = express();

const port = process.env.PORT | 8080;

app.use(express.static(`./dist/${pjson.name}`));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: `dist/${pjson.name}`}),
);

console.log(`${pjson.name} running on port ${port}`)

app.listen(port);
