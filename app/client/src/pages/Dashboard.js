import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import ApplicantCard from "../components/ApplicantCard";
import "../styles/pages/Dashboard.css";

function Dashboard() {
	// 0 for admins, 1 for applicants
	const [account, setAccount] = useState(0);

	// Admin accounts get this view.
	const admin = (
		<div className="Dashboard-Admin">
			<div className="Dashboard-heading">
				<h1>This is the mock up of an admin dashboard.</h1>
			</div>
			<Tabs
				defaultActiveKey="pending"
				id="uncontrolled-tab-example"
				className="Dashboard-tabs"
			>
				<Tab eventKey="pending" title="Pending">
					<ApplicantCard />
					<ApplicantCard />
					<ApplicantCard />
				</Tab>
				<Tab eventKey="flagged" title="Flagged"></Tab>
				<Tab eventKey="completed" title="Completed"></Tab>
			</Tabs>
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
