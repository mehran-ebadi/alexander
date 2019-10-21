// This function is responsible for writing the fetched data from IBM Watson, and 
// also publish them for any other one which need to be informed
const mongoose = require('mongoose');
const eventPublisher = require('./eventPublisher');

// TODO: Read form env
const databaseConnection = 'mongodb://localhost/hi';
const db = mongoose.connect(databaseConnection);
const UserResponse = require('./models/userResponseModel');

const userResponseEvetnType = 'UserHIReceived';

function dataWriter(data) {

    console.log('DataWriter start to writing data...')
    console.log(data);

    // Sava data in database
    const userResponse = new UserResponse(data);
    userResponse.save();

    // Publish data
    const publisher = eventPublisher();
    publisher.publishEvent(userResponseEvetnType, userResponse);

    return;
}

module.exports = dataWriter;
