import React, { useRef, useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = (e) => {
		e.preventDefault();
		const enteredname = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		if (enteredname.trim().length === 0 || enteredAge.trim().length === 0) {
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
		onAddUser(enteredname, enteredAge);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
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
					<input id='username' type='text' ref={nameInputRef} />
					<label htmlFor='username'>Age(years)</label>
					<input id='age' type='number' ref={ageInputRef} />
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
