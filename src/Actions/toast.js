import {ADD_TOAST, DELETE_TOAST} from "./action-types";

// Add toast action

export const addToast = (toast) => ({
	type: ADD_TOAST,
	payload: toast,
});

// delete toast action

export const deleteToast = (id) => ({
	type: DELETE_TOAST,
	payload: id,
});
