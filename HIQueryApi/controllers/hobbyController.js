// It is responsible to handle different RestFul call of Hobby
const HobbyService = require('./../services/hobbyService');

function hobbyController(Hobby) {
    
    function get(req, res) {
        const query = {};
        if (req.query.userId) {
            query.userId = req.query.userId;
        }
        
        const service = new HobbyService(Hobby);
        service.find(query, (err, hobbies) => {
            if (err) {
                res.send(err);
                return;
            }
            res.json(hobbies);
        });        
    }

    function findById(req, res) {
        const service = new HobbyService(Hobby);
        service.findById(req.params.hobbyId, (err, hobby) => {
            if (err) {
                res.send(err);
                return;
            }
            if (hobby) {
                res.json(hobby);
                return;
            }

            res.sendStatus(404);
            return;
        });
    }

    return { get, findById };
}

module.exports = hobbyController;