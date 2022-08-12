import {ADD_TOAST, DELETE_TOAST} from "../Actions/action-types";

// Initial State of the toast application

const initialState = {
	toasts: [],
};

export const toasts = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TOAST:
			return {...state, toasts: [...state.toasts, action.payload]};
			break;
		case DELETE_TOAST:
			return {
				...state,
				toasts: state.toasts.filter((toast) => toast.id !== action.payload),
			};
			break;
		default:
			return state;
	}
};
