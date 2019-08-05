import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Login from './components/Login';
import PostForm from './components/PostForm';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feeds: []
		};
	}

	componentDidMount() {
		const url = 'http://localhost:3001/api/post';

		axios
			.get(url)
			.then(response => {
				console.log(response);
				this.setState({
					feeds: response.data
				});
			})
			.catch(error => console.log(error));
	}
	render() {
		return (
			<React.Fragment>
				<div className="container px-20 ">
					<Header />
					<main className="px-10  bg-gray-200">
						<div className="flex flex-wrap bg-gray-200">
							<div className="w-3/5 p-2">
								<div className="p-2">
									<ItemList item={this.state.feeds} />
								</div>
							</div>
							<div className="w-2/5 p-2">
								<div className="p-2">
									<PostForm />
								</div>

								<div className="p-2">
									<Login />
								</div>
							</div>
						</div>
					</main>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
