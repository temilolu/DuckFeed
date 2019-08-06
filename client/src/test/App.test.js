import React from 'react';
import { render, cleanup } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from '../App';

afterEach(cleanup);

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
