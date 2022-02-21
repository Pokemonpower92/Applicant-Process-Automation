import { useState } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import ApplicantCard from "../components/ApplicantCard";
import "../styles/pages/Dashboard.css";

function Dashboard() {
	// 0 for admins, 1 for applicants
	const [account, setAccount] = useState(0);

	// Admin accounts get this view.
	const admin = (
		<div className="Dashboard-Admin">
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
								<ApplicantCard />
								<ApplicantCard />
								<ApplicantCard />
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

	// Applicants get a different dahsboard.
	let applicant = (
		<div className="Dashboard-applicant">
			<h1>Work in progress.</h1>
		</div>
	);

	return <div className="Dashboard">{account ? applicant : admin}</div>;
}

export default Dashboard;
