import { Nav, Navbar, Container } from "react-bootstrap";
import "../styles/components/ApplicationNavbar.css";
import Logo from "../img/UT_Logo.png";

function ApplicationNavbar(props) {
	return (
		<div className="Navbar">
			<Navbar variant="dark" sticky="top" expand="lg">
				<Container>
					<Navbar.Brand href="/" theme="light">
						<img src={Logo} height="50px" /> EF 437/438 Application
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/Application">Apply</Nav.Link>
							<Nav.Link href="/Login">Login</Nav.Link>
							<Nav.Link href="/locations">Contact Us</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default ApplicationNavbar;
