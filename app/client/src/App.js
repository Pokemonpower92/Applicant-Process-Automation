import "./styles/pages/App.css";
import {
	Homepage,
	ApplicationFormPage,
	LoginPage,
	Dashboard,
} from "./pages/index";
import HeaderBar from "./components/ApplicationNavbar";
import { Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<HeaderBar />
			<div className="App-Homepage">
				<Route
					path="/"
					exact
					render={(props) => <Homepage {...props} />}
				/>
			</div>
			<div className="App-ApplicationFormPage">
				<Route
					path="/Application"
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
