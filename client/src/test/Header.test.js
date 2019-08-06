import React from 'react';
import Header from '../components/Header';
import renderer from 'react-test-renderer';

describe('Header component', () => {
	it('matches the snapshot', () => {
		const tree = renderer.create(<Header />).toJSON();
	});
});
