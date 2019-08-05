import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			foodName: '',
			location: '',
			numberOfDucks: '',
			foodType: '',
			foodQuantity: ''
		};
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = e => {
		e.preventDefault();
		const url = 'http://localhost:3001/api/post';
		axios
			.post(url, this.state)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
		console.log(this.state);
	};

	render() {
		const { foodName, location, numberOfDucks, foodType, foodQuantity } = this.state;
		return (
			<React.Fragment>
				<div className="py-4">
					<div className="max-w-lg rounded overflow-hidden shadow bg-white">
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2 text-center">+ Add Post</div>
							<div className="w-full max-w-xs">
								<form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.submitHandler}>
									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="foodName"
										>
											Food Name
										</label>
										<input
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											value={foodName}
											name="foodName"
											type="text"
											placeholder="Food Name"
											onChange={this.changeHandler}
										/>
									</div>

									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="location"
										>
											Location
										</label>
										<input
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											value={location}
											name="location"
											type="text"
											placeholder="Location"
											onChange={this.changeHandler}
										/>
									</div>

									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="numberOfDucks"
										>
											Number of Ducks
										</label>
										<input
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											value={numberOfDucks}
											name="numberOfDucks"
											type="text"
											placeholder="Number of Ducks"
											onChange={this.changeHandler}
										/>
									</div>

									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="foodType"
										>
											Food Type
										</label>
										<input
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											value={foodType}
											name="foodType"
											type="text"
											placeholder="Food Type"
											onChange={this.changeHandler}
										/>
									</div>

									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="foodQuantity"
										>
											Food Quantity
										</label>
										<input
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											value={foodQuantity}
											name="foodQuantity"
											type="text"
											placeholder="Food Quantity"
											onChange={this.changeHandler}
										/>
									</div>

									<div className="flex items-center justify-between">
										<button
											className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
											type="submit"
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
	}
}

export default PostForm;
