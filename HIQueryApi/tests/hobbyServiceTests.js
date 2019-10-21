const should = require('should');
const sinon = require('sinon');

const HobbyService = require('../services/hobbyService');

describe('Hobby Service Tests:', () => {

    describe('Save User Response', () => {
        const Hobby = function () { this.save = () => { } };
        it('Happy Path', () => {

            const hobbyService = new HobbyService(Hobby);
            const userResponse = {
                entities: [{ entity: 'hobby', value: 'test' }],
                context: { metadata: { user_id: '3' } }
            };

            const callback = sinon.spy();

            hobbyService.saveUserResponse(userResponse, callback);

            callback.callCount.should.equal(0);
        });

        it('User response contains invalid entity', () => {
            const hobbyService = new HobbyService(Hobby);
            const userResponse = { entities: [{ entity: 'h1', value: 'test' }], context: { metadata: { user_id: '3' } } };
            
            const callback = sinon.spy();
            hobbyService.saveUserResponse(userResponse, callback);

            callback.callCount.should.equal(1);
        });
    })
});


