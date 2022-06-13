import React, { useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
	const [enteredUsername, setEnteredUsename] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const usenameChangeHandler = (e) => {
		setEnteredUsename(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	const addUserHandler = (e) => {
		e.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				msg: 'Please enter a valid name and age (non-empty value)',
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				msg: 'Please enter a valid age (age > 0)',
			});
			return;
		}
		onAddUser(enteredUsername, enteredAge);
		setEnteredAge('');
		setEnteredUsename('');
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					msg={error.msg}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						value={enteredUsername}
						onChange={usenameChangeHandler}
					/>
					<label htmlFor='username'>Age(years)</label>
					<input
						id='age'
						type='number'
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
