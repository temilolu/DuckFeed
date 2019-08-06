import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ items }) => (
	<React.Fragment>
		<div className="py-4">
			<div className="max-w-lg rounded overflow-hidden shadow bg-white">
				<div className="px-6 py-4">
					<ul>
						<li>
							<span className="py-1 text-xs text-green-500">Time: {items.feedTime} </span>
						</li>
						<li>
							<span className="py-1 text-xs ">Food name: </span>
							<span className="text-gray-700 font-mono text-sm pl-4">{items.foodName} </span>
						</li>
						<li>
							<span className="py-1 text-xs"> Location: </span>
							<span className="text-gray-700 font-mono text-sm pl-4">{items.location} </span>
						</li>
						<li>
							<span className="py-1 text-xs">Number of Ducks: </span>
							<span className="text-gray-700 font-mono text-sm pl-4">{items.numberOfDucks} </span>
						</li>
						<li>
							<span className="py-1 text-xs">Food Type: </span>
							<span className="text-gray-700 font-mono text-sm pl-4">{items.foodType} </span>
						</li>
						<li>
							<span className="py-1 text-xs">Food Quantity: </span>
							<span className="text-gray-700 font-mono text-sm pl-4">{items.foodQuantity} grams</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</React.Fragment>
);

Item.propTypes = {
	feedTime: PropTypes.string,
	feedName: PropTypes.string,
	location: PropTypes.string,
	numberOfDucks: PropTypes.string,
	foodType: PropTypes.string,
	foodQuantity: PropTypes.string
}

export default Item;
