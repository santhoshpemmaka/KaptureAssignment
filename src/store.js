import {createStore, combineReducers} from "redux";
import {toasts} from "./Reducers/toast";

// Combine reducer

const rootReducer = combineReducers({
	toasts,
});

// create store logic

const store = createStore(rootReducer);
export default store;
