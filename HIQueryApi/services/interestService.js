// It is Interest service
const Interest = require('../models/interestModel');
const INTEREST_ENTITY_NAME = 'interest';

function interestService() {

    function find(criteria, callback) {
        Interest.find(criteria, callback);
    }

    function findById(id, callback) {
        Interest.findById(id, callback);
    }

    function saveUserResponse(userResponse, callback) {

        if (userResponse == undefined || userResponse.entities == undefined || userResponse.entities.length == 0) {
            return callback(`invalid user response send to save in hobbies, ${userResponse}`);
        }

        if (userResponse.entities[0].entity != INTEREST_ENTITY_NAME) {
            return callback(`invalid user response send to save in hobbies, ${userResponse}`);
        }

        if (userResponse.context == undefined ||
            userResponse.context.metadata == undefined ||
            userResponse.context.metadata.user_id == undefined) {
                return callback(`invalid user response send to save in hobbies, ${userResponse}`);
        }


        var interestData = {
            userId: userResponse.context.metadata.user_id,
            interest: userResponse.entities[0].value
        }

        var interest = new Interest(interestData);
        interest.save(callback);
    }

    return { find, findById, saveUserResponse };

}

module.exports = interestService;