const mongoose = require('mongoose');

const userIDString = {
    type: String,
    required: true,
    primaryKey: true
}

const reqString = {
    type: String,
    required: true
}

const animedraftSchema = mongoose.Schema({
    userID: userIDString,
    anime1: reqString,

})

module.exports = mongoose.model("animedraft", animedraftSchema);