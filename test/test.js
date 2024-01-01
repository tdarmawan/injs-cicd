var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with hello world, my name is thomas darmawan', function(done) {
        request(app).get('/will').expect('{ "response": "Hello World" }', done);
    });
});