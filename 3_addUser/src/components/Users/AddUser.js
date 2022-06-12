import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
	const [enteredUsername, setEnteredUsename] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const usenameChangeHandler = (e) => {
		setEnteredUsename(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	const addUserHandler = (e) => {
		e.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			return;
		}
		if (+enteredAge < 1) {
			return;
		}
		onAddUser(enteredUsername, enteredAge);
		setEnteredAge('');
		setEnteredUsename('');
	};

	return (
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
	);
};

export default AddUser;
