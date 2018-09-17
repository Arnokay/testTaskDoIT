import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import expressValidation from 'express-validation'
import cors from 'cors'

import config from './config'
import routes from './routes'

const app = express();

mongoose.connect(process.env.NODE_ENV === 'test' ? config.mongoUrlTest : config.mongoUrl)
  .then(
    () =>   console.log('Database Connected'),
    err =>  console.log('Database Error: ' + err)
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.use((err, req, res, next) => {

  if(err instanceof expressValidation.ValidationError){
    res.status(err.status).json(err);
  } else {
    res.status(err.status)
      .json({
        status: err.status,
        message: err.message
      });
  }
});

app.listen(3000, () => {
  console.log('Listen on port 3000');
});