const post = require('../controllers/postController');

describe('Post request', () => {
	it('Should thank the user after they fill form', done => {
		request(app)
			.post('/post')
			.expect(302);
	});
});
