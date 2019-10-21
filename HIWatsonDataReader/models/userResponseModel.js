// Mongoose model of UserResponse
// It use to manipulate data in MongoDB
const mongoose = require('mongoose');

const entityModel = mongoose.Schema({
    entity: { type: String },
    value: { type: String }
});

const userResponseModel = new mongoose.Schema({

    entities: [entityModel],
    context: {
        conversation_id: { type: String },
        metadata: {
            user_id: String
        }
    }
}
);

module.exports = mongoose.model('UserResponse', userResponseModel);

