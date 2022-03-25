import { Component } from "react";
import { applicationAPI } from "../api";
import { Button } from "react-bootstrap";
import "../styles/pages/ApplicationFormPage.css";

class ApplicationFormPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted: false,
			firstName: "",
			middleName: "",
			lastName: "",
			studentId: "",
			netId: "",
			streetAddress: "",
			city: "",
			state: "",
			zipCode: "",
			phoneNumber: "",
			email: "",
			citizen: false,
			previousExperience: false,
			previousExperienceDetails: "",
			militaryExperience: false,
			militaryExperienceDetails: "",
			contactAgreement: false,
		};

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handleIdChange = this.handleIdChange.bind(this);
		this.handleNetIdChange = this.handleNetIdChange.bind(this);
		this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handleCityChange = this.handleCityChange.bind(this);
		this.handleStateChange = this.handleStateChange.bind(this);
		this.handleZipChange = this.handleZipChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleCitizenChange = this.handleCitizenChange.bind(this);
		this.handlePreviousExperienceChange =
			this.handlePreviousExperienceChange.bind(this);
		this.handlePreviousExperienceDetailsChange =
			this.handlePreviousExperienceDetailsChange.bind(this);
		this.handleMilitaryExperienceChange =
			this.handleMilitaryExperienceChange.bind(this);
		this.handleMilitaryExperienceDetailsChange =
			this.handleMilitaryExperienceDetailsChange.bind(this);
		this.handleContactAggreementChange =
			this.handleContactAggreementChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount = () => {
		this.setState({
			submitted: false,
		});
	};

	handleFirstNameChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleMiddleNameChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleLastNameChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleIdChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleNetIdChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleAddressChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleCityChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleStateChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleZipChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handlePhoneChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleEmailChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleCitizenChange = (e) => {
		const eValue = e.currentTarget.value === "true" ? true : false;
		this.setState({
			[e.target.name]: eValue,
		});
	};

	handlePreviousExperienceChange = (e) => {
		const eValue = e.currentTarget.value === "true" ? true : false;
		this.setState({
			[e.target.name]: eValue,
		});
	};

	handlePreviousExperienceDetailsChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleMilitaryExperienceChange = (e) => {
		const eValue = e.currentTarget.value === "true" ? true : false;
		this.setState({
			[e.target.name]: eValue,
		});
	};

	handleMilitaryExperienceDetailsChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleContactAggreementChange = (e) => {
		const eValue = e.currentTarget.value === "true" ? true : false;
		this.setState({
			[e.target.name]: eValue,
		});
	};

	handleSubmit = async (evt) => {
		const { firstName, middleName, lastName, studentId, netId, streetAddress, city, state, zipCode, phoneNumber, email, citizen, previousExperience, previousExperienceDetails, militaryExperience, militaryExperienceDetails, contactAgreement } =
				this.state;
		const payload = { status: "Submitted", name: firstName+' '+middleName+' '+lastName, studentId, netId, streetAddress, city, state, zipCode, phoneNumber, email, citizen, previousExperience, previousExperienceDetails, militaryExperience, militaryExperienceDetails, contactPhone:contactAgreement };

		await applicationAPI
				.createApplication(payload)
				.then((res) => {
						this.setState({
							submitted: true,
						});
				})
				.catch(err => {
						console.log(err);
				})
};

	render() {
		const submitted = (
			<div className="ApplicationFormPage-submitted">
				<div className="ApplicationFormPage-submitted-header">
					<h1>Application Submitted!</h1>
				</div>
			</div>
		);

		const unsubmitted = (
			<div className="ApplicationFormPage-unsubmitted">
				<div className="ApplicationFormPage-unsubmitted-header">
					<h2>Student Information</h2>
				</div>
				<form className="ApplicationFormPage-unsubmitted-form">
					<div className="ApplicationFormPage-unsubmitted-form-name">
						<div className="ApplicationFormPage-unsubmitted-form-inputTitle">
							<p>Identification</p>
						</div>
						<div className="ApplicationFormPage-unsubmitted-form-name-fields">
							<div className="ApplicationFormPage-unsubmitted-form-nameTextInput">
								<input
									type="text"
									name="firstName"
									value={this.state.firstName}
									onChange={this.handleFirstNameChange}
									className="ApplicationFormPage-unsubmitted-form-nameField"
								></input>
								<label>First Name</label>
							</div>
							<div className="ApplicationFormPage-unsubmitted-form-nameTextInput">
								<input
									type="text"
									name="middleName"
									value={this.state.middleName}
									onChange={this.handleMiddleNameChange}
									className="ApplicationFormPage-unsubmitted-form-nameField"
								></input>
								<label>Middle Name</label>
							</div>
							<div className="ApplicationFormPage-unsubmitted-form-nameTextInput">
								<input
									type="text"
									name="lastName"
									value={this.state.lastName}
									onChange={this.handleLastNameChange}
									className="ApplicationFormPage-unsubmitted-form-nameField"
								></input>
								<label>Last Name</label>
							</div>
						</div>
						<div className="ApplicationFormPage-unsubmitted-form-id-fields">
							<div className="ApplicationFormPage-unsubmitted-form-idTextInput">
								<input
									type="text"
									name="studentId"
									value={this.state.studentId}
									onChange={this.handleIdChange}
									className="ApplicationFormPage-unsubmitted-form-id"
								></input>
								<label>UTK Student ID</label>
							</div>
							<div className="ApplicationFormPage-unsubmitted-form-idTextInput">
								<input
									type="text"
									name="netId"
									value={this.state.netId}
									onChange={this.handleNetIdChange}
									className="ApplicationFormPage-unsubmitted-form-id"
								></input>
								<label>UTK Net ID</label>
							</div>
						</div>
					</div>

					<div className="ApplicationFormPage-unsubmitted-form-address">
						<div className="ApplicationFormPage-unsubmitted-form-inputTitle">
							<p>Address</p>
						</div>
						<div className="ApplicationFormPage-unsubmitted-form-address-street">
							<div className="ApplicationFormPage-unsubmitted-form-streetTextInput">
								<input
									type="text"
									name="streetAddress"
									value={this.state.streetAddress}
									onChange={this.handleAddressChange}
									className="ApplicationFormPage-unsubmitted-form-street"
								></input>
								<label>Street Address</label>
							</div>
						</div>
						<div className="ApplicationFormPage-unsubmitted-form-address-other">
							<div className="ApplicationFormPage-unsubmitted-form-otherTextInput">
								<input
									type="text"
									name="city"
									value={this.state.city}
									onChange={this.handleCityChange}
									className="ApplicationFormPage-unsubmitted-form-city"
								></input>
								<label>City</label>
							</div>
							<div className="ApplicationFormPage-unsubmitted-form-otherTextInput">
								<input
									type="text"
									name="state"
									value={this.state.state}
									onChange={this.handleStateChange}
									className="ApplicationFormPage-unsubmitted-form-state"
								></input>
								<label>State</label>
							</div>
							<div className="ApplicationFormPage-unsubmitted-form-otherTextInput">
								<input
									type="text"
									name="zipCode"
									value={this.state.zipCode}
									onChange={this.handleZipChange}
									className="ApplicationFormPage-unsubmitted-form-zip"
								></input>
								<label>Zip</label>
							</div>
						</div>
					</div>

					<div className="ApplicationFormPage-unsubmitted-form-contact">
						<div className="ApplicationFormPage-unsubmitted-form-inputTitle">
							<p>Contact Information</p>
						</div>
						<div className="ApplicationFormPage-unsubmitted-form-contact-details">
							<div className="ApplicationFormPage-unsubmitted-form-contactTextInput">
								<input
									type="text"
									name="phoneNumber"
									value={this.state.phoneNumber}
									onChange={this.handlePhoneChange}
									className="ApplicationFormPage-unsubmitted-form-phone"
								></input>
								<label>Phone Number</label>
							</div>
							<div className="ApplicationFormPage-unsubmitted-form-contactTextInput">
								<input
									type="text"
									name="email"
									value={this.state.email}
									onChange={this.handleEmailChange}
									className="ApplicationFormPage-unsubmitted-form-email"
								></input>
								<label>Email</label>
							</div>
						</div>
						<div className="ApplicationFormPage-unsubmitted-form-radioInput">
							<label>Permission to Contact: </label>
							<div className="ApplicationFormPage-unsubmitted-form-radioGroup">
								<input
									type="radio"
									name="contactAgreement"
									value={true}
									checked={
										this.state.contactAgreement === true
									}
									onChange={
										this.handleContactAggreementChange
									}
									className="ApplicationFormPage-unsubmitted-form-citizen"
								/>
								Yes
								<input
									type="radio"
									name="contactAgreement"
									value={false}
									checked={
										this.state.contactAgreement === false
									}
									onChange={
										this.handleContactAggreementChange
									}
									className="ApplicationFormPage-unsubmitted-form-citizen"
								/>
								No
							</div>
						</div>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-experience">
						<div className="ApplicationFormPage-unsubmitted-form-inputTitle">
							<p>Experience</p>
						</div>
						<div className="ApplicationFormPage-unsubmitted-form-radioInput">
							<label>Previous Experience: </label>
							<div className="ApplicationFormPage-unsubmitted-form-radioGroup">
								<input
									type="radio"
									name="previousExperience"
									value={true}
									checked={
										this.state.previousExperience === true
									}
									onChange={
										this.handlePreviousExperienceChange
									}
								/>
								Yes
								<input
									type="radio"
									name="previousExperience"
									value={false}
									checked={
										this.state.previousExperience === false
									}
									onChange={
										this.handlePreviousExperienceChange
									}
								/>
								No
							</div>
						</div>

						<div className="ApplicationFormPage-unsubmitted-form-textarea">
							<textarea
								type="textarea"
								name="previousExperienceDetails"
								value={this.state.previousExperienceDetails}
								placeholder="Leave blank if not applicable."
								onChange={
									this.handlePreviousExperienceDetailsChange
								}
								className="ApplicationFormPage-unsubmitted-form-previousExperience"
							></textarea>
						</div>
						<div className="ApplicationFormPage-unsubmitted-form-textarea">
							<label>Military Experience: </label>
							<div className="ApplicationFormPage-unsubmitted-form-radioGroup">
								<input
									type="radio"
									name="militaryExperience"
									value={true}
									checked={
										this.state.militaryExperience === true
									}
									onChange={
										this.handleMilitaryExperienceChange
									}
								/>
								Yes
								<input
									type="radio"
									name="militaryExperience"
									value={false}
									checked={
										this.state.militaryExperience === false
									}
									onChange={
										this.handleMilitaryExperienceChange
									}
								/>
								No
							</div>
							<textarea
								type="textarea"
								name="militaryExperienceDetails"
								value={this.state.militaryExperienceDetails}
								placeholder="Leave blank if not applicable."
								onChange={
									this.handleMilitaryExperienceDetailsChange
								}
								className="ApplicationFormPage-unsubmitted-form-militaryExperience"
							></textarea>
						</div>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-citizen">
						<div className="ApplicationFormPage-unsubmitted-form-inputTitle">
							<p>Citizenship</p>
						</div>
						<div className="ApplicationFormPage-unsubmitted-form-radioInput">
							<label>US Citizen: </label>
							<div className="ApplicationFormPage-unsubmitted-form-radioGroup">
								<input
									type="radio"
									name="citizen"
									value={true}
									checked={this.state.citizen === true}
									onChange={this.handleCitizenChange}
									className="ApplicationFormPage-unsubmitted-form-citizen"
								/>
								Yes
								<input
									type="radio"
									name="citizen"
									value={false}
									checked={this.state.citizen === false}
									onChange={this.handleCitizenChange}
									className="ApplicationFormPage-unsubmitted-form-citizen"
								/>
								No
							</div>
						</div>
					</div>
				</form>
				<Button variant="secondary" onClick={this.handleSubmit}>
                            Submit
        </Button>
			</div>
		);

		return (
			<div className="ApplicationFormPage">
				{this.state.submitted ? submitted : unsubmitted}
			</div>
		);
	}
}

export default ApplicationFormPage;
