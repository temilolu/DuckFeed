import React from 'react';

const PostForm = () => {
	return (
		<React.Fragment>
			<div className="py-4">
				<div className="max-w-lg rounded overflow-hidden shadow bg-white">
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2 text-center">+ Add Post</div>
						<div className="w-full max-w-xs">
							<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
										Food Name
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="Food Name"
										type="text"
										placeholder="Food Name"
									/>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
										Location
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="food-name"
										type="text"
										placeholder="Food Name"
									/>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
										Number of Ducks
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="numOfDucks"
										type="text"
										placeholder="Number of Ducks"
									/>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
										Food Type
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="food-type"
										type="text"
										placeholder="Food Type"
									/>
								</div>

								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
										Food Quantity
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="food-quantity"
										type="text"
										placeholder="Food Quantity"
									/>
								</div>

								<div className="flex items-center justify-between">
									<button
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
										type="button"
									>
										Add Post
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PostForm;
