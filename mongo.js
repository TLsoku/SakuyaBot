const mongoose = require('mongoose');

const { mongoPath } = require('./config.json');

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
    return mongoose;
}