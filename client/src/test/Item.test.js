import React from 'react';
import Item from '../components/Item';
import renderer from 'react-test-renderer';

describe('Item component', () => {
	it('matches the snapshot', () => {
		renderer.create(<Item />).toJSON();
	});
});
