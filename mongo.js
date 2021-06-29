const mongoose = require('mongoose');

const { mongoPath } = require('./config.json');

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewURLParser: true,
        useUnifiedTopology: true,
    })
    return mongoose;

}