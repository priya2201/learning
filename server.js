const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const app = express();
const logger = require('morgan');
app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/api', routes);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))