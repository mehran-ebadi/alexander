// This function is responsible to read data from IBM Watson
const { IamAuthenticator } = require('ibm-watson/auth');
const AssistantV1 = require('ibm-watson/assistant/v1');

// TODO: There are some value which should be read from environment
function dataReader(dataConsumer) {

    // Create a service to read data from IBM Watson
    const service = new AssistantV1({
        version: '2019-02-28',
        authenticator: new IamAuthenticator({
            apikey: 'FMTtmhiSQnJR2htiBgwPUIQ3v-wfQPYYHeAat3yRo7s5',
        }),
        url: 'https://gateway.watsonplatform.net/assistant/api/',
    });

    // Reading parameters for fetching data from IBM Watson
    const params = {
        workspaceId: 'f101471c-4bbe-4a35-95b3-4d06980985c9',
        filter: 'response.intents:intent::bot_user_hobbies,response.entities:entity::hobby'
    };
    
    const readingIntervals = 30000;
    const readingDelay = 30000;

    const readingDate = Date.now() - readingDelay;
    const fromDate = new Date(readingDate).toISOString();
    const toDate = new Date(readingDate - readingIntervals).toISOString();
    params.filter += ',response_timestamp<' + fromDate;
    params.filter += ',response_timestamp>' + toDate;


    console.log('Reading data from Watson from: ' + fromDate + ' to: ', toDate);

    // Read data from IBM Watson and call the dataConsumer for each of them
    service.listLogs(params)
        .then(res => {
            //console.log(JSON.stringify(res, null, 2));
            let logs = res.result.logs;
            console.log('number of items:', logs.length);
            for (i = 0; i < logs.length; i++) {
                dataConsumer(logs[i].response);
            }
        })
        .catch(err => {
            console.log(err)
        });

    return;
}

module.exports = dataReader;
