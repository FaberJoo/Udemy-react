import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMovieHandler = useCallback(async () => {
		setError(null);
		setIsLoading(true);
		try {
			// https://swapi.dev/api/films/
			const response = await fetch(
				'https://react-http-8ca22-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json',
			);
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json();
			const loadedMovies = [];

			for (const key in data) {
				loadedMovies.push({
					id: key,
					title: data[key].title,
					releaseDate: data[key].release_date,
					openingText: data[key].openingText,
				});
			}

			setMovies(loadedMovies);
		} catch (e) {
			setError(e.message);
		}
		setIsLoading(false);
	}, []);

	const addMovieHandler = async (movie) => {
		const response = await fetch(
			'https://react-http-8ca22-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json',
			{
				method: 'POST',
				body: JSON.stringify(movie),
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		const data = await response.json();
		console.log(data);
	};

	useEffect(() => {
		fetchMovieHandler();
	}, [fetchMovieHandler]);

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
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
