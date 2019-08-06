const request = require('supertest');
const app = require('../app');

describe('Posts path', () => {
	it('It should /GET all the posts', done => {
		request(app)
			.get('/api/post')
			.then(response => {
				expect(response.statusCode).toBe(200);
				done();
			});
	});

	it('Fails with missing input fields', done => {
		request(app)
			.post('/api/post')
			.then(response => {
				expect(response.statusCode).toBe(422);
				done();
			});
	});
});
