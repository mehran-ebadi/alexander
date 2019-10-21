// Application start point
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const EventsSubscription = require('./eventsSubscription');

// TODO: There are some variable which should be read from environment

const app = express();
const port = 3000;

// Connect to the MongoDB
// TODO: Read form env
const databaseConnection = 'mongodb://localhost/hiquery';
const db = mongoose.connect(databaseConnection);

const Hobby = require('./models/hobbyModel');
const hobbyRouter = require('./routes/hobbyRouter')(Hobby);

const Interest = require('./models/interestModel');
const interestRouter = require('./routes/interestRouter')(Interest);

// Setup RestFul services routing
app.use(cors());

app.use('/api', hobbyRouter);

app.use('/api', interestRouter)

app.get('/', (req, res) => {
    res.send('Welcome HI Query API!');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

// Subscribe to the events
const eventsSubscriber = new EventsSubscription();
eventsSubscriber.subscribeForEvents();

