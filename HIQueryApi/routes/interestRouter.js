// This function is responsible to provide the RestFul path of Interest
const express = require('express');
const interestController = require('../controllers/interestController');

function routes(Interest) {

    const interestRouter = express.Router();
    const controller = interestController(Interest);

    interestRouter.route('/interests')
        .get(controller.get);

    interestRouter.route('/interests/:id')
        .get(controller.findById);

    return interestRouter;
}

module.exports = routes;
