import { Tab, Row, Col, Nav } from "react-bootstrap";
import "../styles/Dashboard.css";

function Dashboard() {
	return (
		<div className="Dashboard">
			<div className="Dashboard-heading">
				<h1>This is the mock up of a dashboard.</h1>
			</div>
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="first">Pending</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="second">Completed</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content className="Dashboard-applicantlist">
							<Tab.Pane eventKey="first">
								<h1>Pending Applicants</h1>
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<h1>Completed Applicants</h1>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
}

export default Dashboard;
