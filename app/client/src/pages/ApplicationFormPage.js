import { Component } from "react";
import "../styles/pages/ApplicationFormPage.css";

class ApplicationFormPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted: false,
			firstName: "",
			middleName: "",
			lastName: "",
			id: "",
			address: "",
			city: "",
			state: "",
			zip: "",
			phone: "",
			email: "",
			citizen: false,
			previousExperience: false,
			previousExperienceDetails: "",
			militaryExperience: false,
			militaryExperienceDetails: "",
			contactAgreement: false,
		};

		this.handleSubmitClick = this.handleSubmitClick.bind(this);
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handleIdChange = this.handleIdChange.bind(this);
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
	}

	componentDidMount = () => {
		this.setState({
			submitted: false,
		});
	};

	handleSubmitClick = (e) => {
		const { history } = this.props;
		history.push(`/ApplicationForm`);
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
									name="name"
									value={this.state.name}
									onChange={this.handleFirstNameChange}
									className="ApplicationFormPage-unsubmitted-form-nameFeild"
								></input>
								<label>First Name</label>
							</div>
							<div className="ApplicationFormPage-unsubmitted-form-nameTextInput">
								<input
									type="text"
									name="name"
									value={this.state.name}
									onChange={this.handleMiddleNameChange}
									className="ApplicationFormPage-unsubmitted-form-nameFeild"
								></input>
								<label>Middle Name</label>
							</div>
							<div className="ApplicationFormPage-unsubmitted-form-nameTextInput">
								<input
									type="text"
									name="name"
									value={this.state.name}
									onChange={this.handleLastNameChange}
									className="ApplicationFormPage-unsubmitted-form-nameFeild"
								></input>
								<label>Last Name</label>
							</div>
						</div>
						<div className="ApplicationFormPage-unsubmitted-form-id">
							<div className="ApplicationFormPage-unsubmitted-form-textInput">
								<input
									type="text"
									name="id"
									value={this.state.id}
									onChange={this.handleIdChange}
									className="ApplicationFormPage-unsubmitted-form-id"
								></input>
								<label>UTK Student ID</label>
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
									name="address"
									value={this.state.address}
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
									name="zip"
									value={this.state.zip}
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
									name="phone"
									value={this.state.phone}
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
									checked={this.state.previousExperience === true}
									onChange={this.handlePreviousExperienceChange}
									className="ApplicationFormPage-unsubmitted-form-citizen"
								/>
								Yes
								<input
									type="radio"
									name="previousExperience"
									value={false}
									checked={this.state.previousExperience === false}
									onChange={this.handlePreviousExperienceChange}
									className="ApplicationFormPage-unsubmitted-form-citizen"
								/>
								No
							</div>
						</div>

						<div className="ApplicationFormPage-unsubmitted-form-textarea">
							<textarea
								type="textarea"
								name="previousExperience"
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
							<textarea
								type="radio"
								name="militaryExperience"
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
