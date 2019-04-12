const request = require('supertest')
const server = require('./server.js')
const db = require('../data/dbConfig.js')

describe('Server.js', () => {
    
    beforeEach(async () => {
        await db('games').truncate()
    });
    
    describe('GET /', () => {
        it('Should respond with 200 Ok Status', () => {
            return request(server)
            .get('/')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })
    })
    describe('GET /games', () => {
        it('Should respond with 200 Ok Status', () => {
            return request(server)
            .get('/games')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })
        it('Should return games as json', () => {
            return request(server)
            .get('/games')
            .expect(200)
            .expect('Content-Type', /json/)
        })
        it('Should always return array', () => {
            const expected = [];
            return request(server)
            .get('/games')
            .then(response => {
            expect(response.body).toEqual(expect.arrayContaining(expected));
        })
    })
})
    describe('POST /games', () => {
        it('Should respond with 201 Create Status', () => {
            return request(server)
            .post('/games')
            .send({
                title: 'Apex Legends', 
                genre: 'Shooter', 
                releaseDate: 2019
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
        })
        it('If title or genre is missing, should respond with 422 status code Unprocessable Entity', () => {
            return request(server)
            .post('/games')
            .send({
                title: 'Fortnite', 
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422)
        })
        it('If title or genre is not a string respond with 400 Bad Request status code', () => {
            return request(server)
            .post('/games')
            .send({
                title: [12],
                genre: "shooter" 
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
        })
    })
})