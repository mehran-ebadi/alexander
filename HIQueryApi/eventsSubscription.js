// It is responsilbe for subscribing the the all events releated to this application 
// which published by others
const eventSubscriber = require('./eventSubscriber');
const Hobby = require('./models/hobbyModel');
const Interest = require('./models/interestModel');
const HobbyService = require('./services/hobbyService');
const InterestService = require('./services/interestService');

const HOBBY_ENTITY_NAME = 'hobby';
const INTEREST_ENTITY_NAME = 'interest';


function eventsSubscription() {

    // Subscribe the the events
    function subscribeForEvents() {
        const userResponseEvetnType = 'UserHIReceived';
        const subscriber = eventSubscriber();
        subscriber.subscribeEvent(userResponseEvetnType, userResponseEventReceived);
    }

    // Call when User Response event received.
    // It check the validit of the event content and finally save it to database
    function userResponseEventReceived(channel, evetBody) {

        console.log('userResponseEventReceived');
        var eventMessage = JSON.parse(evetBody);
        console.log(`Channel: ${channel}`);
        console.log(`Event Body: ${evetBody}`);
        console.log();
        console.log();

        try {
            if (eventMessage == undefined || eventMessage.entities == undefined || eventMessage.entities.length == 0) {
                console.log(`invalid message received`);
                return;
            }

            if (eventMessage.entities[0].entity == undefined) {
                console.log(`invalid message: ${eventMessage}`);
                return;
            }

            if (eventMessage.entities[0].entity == HOBBY_ENTITY_NAME) {
                const hobbyService = new HobbyService(Hobby);
                hobbyService.saveUserResponse(eventMessage, (err, data) => {
                    console.log(err);
                });
            }
            else if (eventMessage.entities[0].entity == INTEREST_ENTITY_NAME) {
                const interestService = new InterestService(Interest);
                interestService.saveUserResponse(eventMessage);
            }
            else {
                console.log(`unsupported entity type: ${eventMessage.entities[0].entity} was sent. message: ${eventMessage}`);
                return;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return { subscribeForEvents, userResponseEventReceived };
}

module.exports = eventsSubscription;