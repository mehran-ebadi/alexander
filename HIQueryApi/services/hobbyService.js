// It is Hobby service
const HOBBY_ENTITY_NAME = 'hobby';

function hobbyService(Hobby) {

    function find(criteria, callback) {
        Hobby.find(criteria, callback);
    }

    function findById(id, callback) {
        Hobby.findById(id, callback);
    }

    function saveUserResponse(userResponse, callback) {

        if (userResponse == undefined || userResponse.entities == undefined || userResponse.entities.length == 0) {
            return callback(`invalid user response send to save in hobbies, ${JSON.stringify(userResponse)}`);
        }

        if (userResponse.entities[0].entity != HOBBY_ENTITY_NAME) {
            return callback(`invalid user response send to save in hobbies, ${JSON.stringify(userResponse)}`);
        }

        if (userResponse.context == undefined ||
            userResponse.context.metadata == undefined ||
            userResponse.context.metadata.user_id == undefined) {
                return callback(`invalid user response send to save in hobbies, ${JSON.stringify(userResponse)}`);
        }

        var hobbyData = {
            userId: userResponse.context.metadata.user_id,
            hobby: userResponse.entities[0].value
        }

        var hobby = new Hobby(hobbyData);
        hobby.save(callback);
    }

    return { find, findById, saveUserResponse };
}

module.exports = hobbyService;