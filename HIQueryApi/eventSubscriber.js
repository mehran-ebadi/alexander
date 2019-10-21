// It is a helper for creating a Subscriber facility for the others.
// It use redis as a media for Publisher/Subscriber
const redis = require('redis');

function eventSubscriber() {

    const subbscriber = redis.createClient();

    function subscribeEvent(evetnType, eventReceived) {        

        subbscriber.on('message', eventReceived);

        subbscriber.subscribe(evetnType);

    }

    return { subscribeEvent };
}

module.exports = eventSubscriber;


