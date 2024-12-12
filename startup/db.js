const mongoose = require('mongoose')

module.exports = async function () {
    const db = process.env.DATABASE_URL
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log(`Connected to ${db}`))
        .catch((e) => { throw new Error(e,'Error while connecting to DB') })
}
