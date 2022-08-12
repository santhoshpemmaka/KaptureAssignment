import React, {useState} from "react";
import {connect} from "react-redux";
import {addToast} from "../../Actions/toast";
import uuid from "react-uuid";
import "./ToastList.scss";

// Custom input text, variant and timeout duration.

const ToastList = ({toasts, addToast}) => {
	const toastStatus = ["Success", "Error", "Warning", "Info"];
	const toastColors = ["#5cb85c", "#d9534f", "#f0ad4e", "#5bc0de"];
	const [toastInfo, settoastInfo] = useState({
		text: "",
		variant: toastStatus[0],
		timeout: "",
	});
	const handleChange = (e) => {
		settoastInfo((prev) => ({...prev, variant: e.target.value}));
	};
	const btnHandler = () => {
		toastInfo.id = uuid();
		let Index = toastStatus.findIndex((item) => item === toastInfo.variant);
		toastInfo.color = toastColors[Index];
		addToast(toastInfo);
		settoastInfo({
			text: "",
			variant: toastStatus[0],
			timeout: "",
		});
	};
	return (
		<div className='toast-container'>
			<input
				className='toast-text'
				type='text'
				value={toastInfo.text}
				onChange={(e) =>
					settoastInfo((prev) => ({...prev, text: e.target.value}))
				}
				placeholder='Enter Toast Message'
			/>
			<label>
				Variant
				<select value={toastInfo.variant} onChange={(e) => handleChange(e)}>
					{toastStatus?.map((toastItem) => (
						<option key={toastItem}>{toastItem}</option>
					))}
				</select>
			</label>
			<input
				className='toast-text'
				type='number'
				value={toastInfo.timeout}
				onChange={(e) =>
					settoastInfo((prev) => ({...prev, timeout: e.target.value}))
				}
				placeholder='Enter Time Duration In milli seconds'
			/>
			<button className='btn-toast' onClick={() => btnHandler()}>
				Show Toast
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	toasts: state.toasts,
});

const mapDispatchToProps = (dispatch) => ({
	addToast: (toast) => {
		dispatch(addToast(toast));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ToastList);
