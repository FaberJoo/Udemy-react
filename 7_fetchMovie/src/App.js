import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMovieHandler = async () => {
		setError(null);
		setIsLoading(true);
		try {
			const response = await fetch('https://swapi.dev/api/films/');
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json();

			const transformedMovies = data.results.map((movie) => {
				return {
					title: movie.title,
					id: movie.episode_id,
					release: movie.release_date,
					openingText: movie.opening_crawl,
				};
			});
			setMovies(transformedMovies);
		} catch (e) {
			setError(e.message);
		}
		setIsLoading(false);
	};

	let content = <p>Not found Movies</p>;

	if (error) {
		content = <p>{error}</p>;
	}

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
