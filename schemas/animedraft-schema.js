const mongoose = require('mongoose');

const userIDString = {
    type: String,
    required: true,
    primaryKey: true
}

const animedraftSchema = mongoose.Schema({
    userID: userIDString,
    anime1: String,
    anime2: String,
    anime3: String,
    anime4: String,
    anime5: String,
    antipick1: String,
    antipick2: String    
})

module.exports = mongoose.model("animeDraft", animedraftSchema);