import React, {useEffect} from "react";
import {connect} from "react-redux";
import {deleteToast} from "../../Actions/toast";
import ToastDisplay from "./ToastDisplay";
import "./ToastDisplay.scss";

const ToastItems = ({toastList, deleteToast}) => {
	return (
		<div className='toast-display-container'>
			{toastList.toasts?.map((toast) => (
				<ToastDisplay toast={toast} deleteToast={deleteToast} key={toast.id} />
			))}
		</div>
	);
};

// Getting toasts list from the store..

const mapStateToProps = (state) => ({
	toastList: state.toasts,
});

// Getting toasts actions from the store.
const mapDispatchToProps = (dispatch) => ({
	deleteToast: (id) => {
		dispatch(deleteToast(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ToastItems);
