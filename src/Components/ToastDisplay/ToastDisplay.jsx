import React, {useEffect} from "react";
import "./ToastDisplay.scss";

// Display Individual toast message

const ToastDisplay = ({toast, deleteToast}) => {
	useEffect(() => {
		const interval = setInterval(
			() => {
				if (toast) {
					deleteToast(toast.id);
				}
			},
			toast.timeout ? Number(toast.timeout) : 3000
		);
		return () => {
			clearInterval(interval);
		};
	}, [toast, deleteToast]);
	return (
		<div
			key={toast.id}
			className='toast-notification'
			style={{backgroundColor: toast.color}}>
			<p className='toast-display-text'>{toast.text}</p>
			<button
				className='toast-display-btn'
				onClick={() => {
					deleteToast(toast.id);
				}}>
				X
			</button>
		</div>
	);
};

export default ToastDisplay;
