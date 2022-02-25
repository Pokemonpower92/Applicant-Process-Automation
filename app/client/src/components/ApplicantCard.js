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
						<Card.Subtitle>UTK ID</Card.Subtitle>
						<br></br>
						<ListGroup
							className="ApplicantCard-listgroup"
							variant="flush"
						>
							<div className="ApplicantCard-rating">
								<ListGroupItem className="ApplicantCard-listitem">
									Major
								</ListGroupItem>
								<ListGroupItem className="ApplicantCard-listitem">
									GPA
								</ListGroupItem>
								<ListGroupItem className="ApplicantCard-listitem">
									Other important information
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
								More Information (Admin only)
							</ListGroupItem>
							<ListGroupItem className="ApplicantCard-listitem">
								Flag
							</ListGroupItem>
							<ListGroupItem className="ApplicantCard-listitem">
								Verify
							</ListGroupItem>
						</div>
					</ListGroup>
				</div>
			</Card>
		</div>
	);
}

export default ApplicantCard;
