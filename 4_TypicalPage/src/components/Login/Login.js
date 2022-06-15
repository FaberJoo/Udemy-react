import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
	// 	const [enteredEmail, setEnteredEmail] = useState('');
	// 	const [emailIsValid, setEmailIsValid] = useState();
	// 	const [enteredPassword, setEnteredPassword] = useState('');
	// 	const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const emailReducer = (state, action) => {
		switch (action.type) {
			case 'USER_INPUT':
				return { value: action.val, isValid: action.val.includes('@') };
			case 'INPUT_BLUR':
				return { value: state.value, isValid: state.value.includes('@') };
			default:
				return { value: '', isValid: false };
		}
	};

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null,
	});

	const passwordReducer = (state, action) => {
		switch (action.type) {
			case 'USER_INPUT':
				return {
					value: action.val,
					isValid: action.val.length > 6,
				};
			case 'INPUT_BLUR':
				return { value: state.value, isValid: state.value.length > 6 };
			default:
				return { value: '', isValid: false };
		}
	};

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null,
	});

	const { isValid: emailValid } = emailState;
	const { isValid: passwordValid } = passwordState;

	useEffect(() => {
		const validateTimeOut = setTimeout(() => {
			console.log('checking from validity');
			setFormIsValid(emailValid && passwordValid);
		}, 500);

		return () => {
			console.log('Clean up');
			clearTimeout(validateTimeOut);
		};
	}, [emailValid, passwordValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: 'USER_INPUT', val: event.target.value.trim() });

		// setFormIsValid(emailState.isValid && passwordState.isValid);
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: 'USER_INPUT', val: event.target.value.trim() });

		// setFormIsValid(emailState.isValid && passwordState.isValid);
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'INPUT_BLUR' });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: 'INPUT_BLUR' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
