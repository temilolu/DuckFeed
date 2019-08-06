import React, { Component } from 'react';
import Item from '../components/Item';

export default class ItemList extends Component {
	renderItems() {
		return this.props.items.map(item => <Item key={item._id} items={item} />);
	}

	render() {
		return (
			<React.Fragment>
				<ul className="list-inside">{this.renderItems()}</ul>
			</React.Fragment>
		);
	}
}
