const { doesNotMatch } = require('assert');
const assert = require('assert');
const request = require('supertest');

const app = require('../src/index');


describe('Express app', () => {
    if('Handles GET request /api/greeting', app=>{
        request(app)
        .get('/api/greeting')
        .end((err, response) => {
            assert(response.body.greeting ==="Hi Robots");
            done();
        });        
    });
});