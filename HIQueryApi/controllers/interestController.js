// It is responsible to handle different RestFul call of Interest
const InterestService = require('./../services/interestService');
function interestController(Interest) {

    function get(req, res) {
        const query = {};
        if (req.query.userId) {
            query.userId = req.query.userId;
        }
        const interestService = new InterestService(Interest);
        interestService.find(query, (err, interests) => {
            if (err) {
                res.send(err);
                return;
            }
            res.json(interests);
        });
    }

    function findById(req, res) {
        const interestService = new InterestService(Interest);
        interestService.findById(req.params.id, (err, interest) => {
            if (err) {
                res.send(err);
                return;
            }
            if (interest) {
                res.json(interest);
                return;
            }

            res.sendStatus(404);
            return;
        });
    }

    return { get, findById };
}

module.exports = interestController;