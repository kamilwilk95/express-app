
import app from './app'

export default (async function () {
    const port = 3000;
    return app.listen(port, function () {
        console.log(`API listening on port ${port}!`)
    })
})()
