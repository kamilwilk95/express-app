import express from 'express';
import {router} from './app/use-cases/find-public-api/find-public-api.http.controller'

export const app = express();
const port = 3000;

app.use('', router)

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});