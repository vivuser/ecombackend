const express = require('express');
const app = express();
const env = require('dotenv').config();
const PORT = process.env.PORT || 8000;


(async () => {
    try {
        require('dotenv').config();
        // require('./startup/config')()
        await require('./startup/middleware')(app)
        await require('./startup/db')()
        require('./startup/routes')(app)

    } catch (ex) {
        console.log(ex, 'error in index.js')
    }
})()

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`))
