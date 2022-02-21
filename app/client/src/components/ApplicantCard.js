/* ApplicantCards display information about an applicant. 
   They also allow advisors to flag information for changes.
*/

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../styles/components/ApplicantCard.css";

function ApplicantCard(props) {
	const { application } = props;

	return (
		<div className="ApplicantCard">
			<Card className="ApplicantCard-card">
				<div className="ApplicantCard-content">
					<Card.Body>
						<Card.Title>Applicant Name</Card.Title>
						<Card.Subtitle>Status Field</Card.Subtitle>
						<Card.Text>Major</Card.Text>
						<ListGroup
							className="ApplicantCard-listgroup"
							variant="flush"
						>
							<div className="ApplicantCard-rating">
								<ListGroupItem className="ApplicantCard-listitem">
									GPA
								</ListGroupItem>
								<ListGroupItem className="ApplicantCard-listitem">
									Other Information
								</ListGroupItem>
								<ListGroupItem className="ApplicantCard-listitem">
									Yet more information
								</ListGroupItem>
							</div>
						</ListGroup>
					</Card.Body>
					<ListGroup
						className="ApplicantCard-listgroup"
						variant="flush"
					>
						<div className="ApplicantCard-rating">
							<ListGroupItem className="ApplicantCard-listitem">
								Verify
							</ListGroupItem>
							<ListGroupItem className="ApplicantCard-listitem">
								Flag
							</ListGroupItem>
						</div>
					</ListGroup>
				</div>
			</Card>
		</div>
	);
}

export default ApplicantCard;
