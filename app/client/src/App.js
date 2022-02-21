import "./styles/App.css";
import {
	HomePage,
	ApplicationFormPage,
	LoginPage,
	Dashboard,
} from "./pages/index";
import { Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div className="App-Homepage">
				<Route
					path="/"
					exact
					render={(props) => <HomePage {...props} />}
				/>
			</div>
			<div className="App-ApplicationFormPage">
				<Route
					path="/ApplicationForm"
					exact
					render={(props) => <ApplicationFormPage {...props} />}
				/>
			</div>
			<div className="App-LoginPage">
				<Route
					path="/Login"
					exact
					render={(props) => <LoginPage {...props} />}
				/>
			</div>
			<div className="App-Dashboard">
				<Route
					path="/Dashboard"
					exact
					render={(props) => <Dashboard {...props} />}
				/>
			</div>
		</div>
	);
}

export default App;
