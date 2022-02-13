import dotenv from 'dotenv-flow'
dotenv.config()

import app from './app'
import { config } from './app/config/config'

export default (async function () {
    const port = config.get('port');
    return app.listen(port, function () {
        console.log(`API listening on port ${port}!`)
    })
})()
