import React from 'react';

const Item = ({ item }) => (
	<React.Fragment>
		<div className="py-4">
			<div className="max-w-lg rounded overflow-hidden shadow bg-white">
				<div className="px-6 py-4">
					<ul>
						<li>
							<span className="py-1 text-xs text-green-500">Time: {item.feedTime} </span> <span> </span>
						</li>
						<li>
							<span className="py-1 text-xs ">Food name: </span>{' '}
							<span className="text-gray-700 font-mono text-sm pl-4">{item.foodName} </span>
						</li>
						<li>
							<span className="py-1 text-xs"> Location: </span>{' '}
							<span className="text-gray-700 font-mono text-sm pl-4">{item.location} </span>
						</li>
						<li>
							<span className="py-1 text-xs">Number of Ducks: </span>{' '}
							<span className="text-gray-700 font-mono text-sm pl-4">{item.numberOfDucks} </span>
						</li>
						<li>
							<span className="py-1 text-xs">Food Type: </span>{' '}
							<span className="text-gray-700 font-mono text-sm pl-4">{item.foodType} </span>
						</li>
						<li>
							<span className="py-1 text-xs">Food Quantity: </span>{' '}
							<span className="text-gray-700 font-mono text-sm pl-4">{item.foodQuantity} grams</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Item;
