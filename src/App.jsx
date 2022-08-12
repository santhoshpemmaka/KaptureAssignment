import {ToastList, ToastItems} from "./Components";
import "./App.scss";

function App() {
	return (
		<div className='App'>
			<h1 className='header-name'>React Toast Application</h1>
			<ToastList />
			<ToastItems />
		</div>
	);
}

export default App;
