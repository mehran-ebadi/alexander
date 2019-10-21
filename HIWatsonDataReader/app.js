// Application start point

const { IamAuthenticator } = require('ibm-watson/auth');
const AssistantV1 = require('ibm-watson/assistant/v1');
const dataReader = require('./dataReader');
const dataWriter = require('./dataWriter');


// TODO: Read form environment
const readingIntervals = 30000;

// Call dataReader at the defined interval
// setInterval(() => {
//     dataReader(dataWriter);
// }, readingIntervals);

console.log('HI Watson Data Reader started...');
console.log('I read data from Watson every ', readingIntervals + ' milisecond');



// Delete following codes
// Temp fot test
const userHobby = {
    entities: [{ entity: 'hobby', value: 'Movie' }],
    context: {
        conversation_id: 123,
        metadata: {
            user_id: 'New Test user'
        }
    }
};


const userInterest = {
    entities: [{ entity: 'interest', value: 'Rest' }],
    context: {
        conversation_id: 123,
        metadata: {
            user_id: 'New Test user'
        }
    }
};


setInterval(() => {
    dataWriter(userInterest);
}, 10000);


setInterval(() => {
    dataWriter(userHobby);
}, 10000);
