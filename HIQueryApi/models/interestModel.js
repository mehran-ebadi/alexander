// Mongoose model of Interest
// It use to manipulate data in MongoDB
const mongoose = require('mongoose');

const interestModel = new mongoose.Schema({
    userId: { type: String },
    interest: { type: String }
});

module.exports = mongoose.model('Interest', interestModel);
