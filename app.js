require('dotenv').config();
const express = require('express');
const routes = require('./src/routes/v1');
const helmet = require('helmet')
const cors = require('cors')


const app = express();
const port = process.env.PORT || 1453;


app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.send('Word Quiz App launched');
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send('Something went wrong!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});

