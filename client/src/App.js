import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import PostForm from './components/PostForm';
import axios from 'axios';
import Pagination from './components/Pagination';

const App = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(5);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get('https://duckfeedapps.herokuapp.com/api/post');
			setPosts(res.data);
			setLoading(false);
		};

		fetchPosts();
	}, []);

	 // Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
			<React.Fragment>
				<div className="container mx-auto ">
					<Header />
					<main className="px-10  bg-gray-200">
						<div className="flex flex-wrap bg-gray-200">
							<div className="w-2/5 p-2">
								<div className="p-2">
									<PostForm />
								</div>
							</div>
							<div className="w-3/5 p-2">
								<div className="p-2">
									<ItemList items={currentPosts} loading={loading}/>

									<Pagination
										postsPerPage={postsPerPage}
										totalPosts={posts.length}
										paginate={paginate}
									/>
								</div>
							</div>
						</div>
					</main>
				</div>
			</React.Fragment>
		);
}

export default App;
