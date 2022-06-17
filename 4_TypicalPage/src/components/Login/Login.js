import React, {
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const Login = (props) => {
	// 	const [enteredEmail, setEnteredEmail] = useState('');
	// 	const [emailIsValid, setEmailIsValid] = useState();
	// 	const [enteredPassword, setEnteredPassword] = useState('');
	// 	const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();

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

	const authCtx = useContext(AuthContext);

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
		if (formIsValid) {
			authCtx.onLogin(emailState.value, passwordState.value);
		} else if (!emailValid) {
			emailRef.current.focus();
		} else {
			passwordRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailRef}
					id='email'
					type='email'
					label='E-Mail'
					value={emailState.value}
					isValid={emailValid}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordRef}
					id='password'
					type='password'
					label='Password'
					value={passwordState.value}
					isValid={passwordValid}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
