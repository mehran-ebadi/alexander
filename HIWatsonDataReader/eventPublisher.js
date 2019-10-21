// It is a helper for creating a publisher facility for the others.
// It use redis as a media for Publisher/Subscriber
const redis = require('redis');

function eventPublisher(){

    const publisher = redis.createClient();

    function publishEvent(eventType, data ) {
        publisher.publish(eventType, JSON.stringify(data));
        console.log(`Event published on: ${eventType} with value: ${data}`);
    }

    return {publishEvent};    
}

module.exports = eventPublisher;
