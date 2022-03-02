import { Component } from "react";
import "../styles/pages/Homepage.css";

class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Homepage">
				<div className="Homepage-text">
					<h1>EF Application HomePage</h1>
				</div>
			</div>
		);
	}
}

export default HomePage;
