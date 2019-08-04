import React, { Component } from 'react';
import Item from '../components/Item';

export default class ItemList extends Component {
	renderItems() {
		return this.props.item.map(item => <Item key={item._id} item={item} />);
	}

	render() {
		return (
			<React.Fragment>
				<ul className="list-inside">{this.renderItems()}</ul>
			</React.Fragment>
		);
	}
}
