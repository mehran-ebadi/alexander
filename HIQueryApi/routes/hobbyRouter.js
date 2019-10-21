// This function is responsible to provide the RestFul path of Hobby
const express = require('express');
const hobbyController = require('../controllers/hobbyController');

function routes(Hobby) {

    const hobbyRouter = express.Router();
    const controller = hobbyController(Hobby);

    hobbyRouter.route('/hobbies')
        .get(controller.get);

    hobbyRouter.route('/hobbies/:hobbyId')
        .get(controller.findById);

    return hobbyRouter;
}

module.exports = routes;
