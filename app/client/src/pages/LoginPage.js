function LoginPage(props) {
	function handleClick() {
		const { history } = props;
		history.push(`/Dashboard`);
	}

	return (
		<div className="LoginPage">
			<h1>Returning Users Log In Here</h1>
			<button onClick={handleClick}>Dashboard</button>
		</div>
	);
}

export default LoginPage;
