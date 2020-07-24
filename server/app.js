if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
  require('dotenv').config();
};
const express = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');
const app = express();
const router = require('./routers');
const errorHandler = require('./middlewares/errorHandler.js');
const http = require('http');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use(errorHandler);

const server = http.createServer(app);

if (process.env.NODE_ENV != 'test') {
  server.listen(port, () => {
    console.log(`FamTree App is running on port: ${port}`);
  })
}

module.exports = app;