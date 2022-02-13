import dotenv from 'dotenv-flow'
dotenv.config()

import { config } from './app/config/config'
import express from 'express'
import { publicApiRouter } from './app/use-cases/find-public-api/find-public-api.http.controller'

export const app = express()
app.use(express.json())
app.use(publicApiRouter);

const port = config.get('port');
app.listen(port, function () {
    console.log(`API listening on port ${port}!`)
})
