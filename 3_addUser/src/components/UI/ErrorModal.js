import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const Backdrop = ({ onConfirm }) => {
	return <div className={styles.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, msg, onConfirm }) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{title}</h2>
			</header>
			<div className={styles.content}>
				<p>{msg}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = ({ title, msg, onConfirm }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={onConfirm} />,
				document.getElementById('backdrop-root'),
			)}
			{ReactDOM.createPortal(
				<ModalOverlay title={title} msg={msg} onConfirm={onConfirm} />,
				document.getElementById('overlay-root'),
			)}
		</>
	);
};

export default ErrorModal;
