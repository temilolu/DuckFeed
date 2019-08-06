import React from 'react';
import Item from '../components/Item';

const ItemList = ({items, loading}) => {
	if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
			<React.Fragment>
				<ul className="list-inside">{items.map(item => <Item key={item._id} items={item} />)}</ul>
			</React.Fragment>
		);
}

export default ItemList;


