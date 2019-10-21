// Mongoose model of Hobby
// It use to manipulate data in MongoDB
const mongoose = require('mongoose');

const hobbyModel = new mongoose.Schema({
    userId: { type: String },
    hobby: { type: String }
});

module.exports = mongoose.model('Hobby', hobbyModel);
