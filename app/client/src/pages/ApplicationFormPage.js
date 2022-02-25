import { Component } from "react";
import "../styles/pages/ApplicationFormPage.css";

class ApplicationFormPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted: false,
			name: "",
			id: "",
			address: "",
			city: "",
			state: "",
			zip: "",
			phone: "",
			email: "",
			citizen: false,
			previousExperience: "",
			militaryExperience: "",
			contactAgreement: false,
		};

		this.handleSubmitClick = this.handleSubmitClick.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
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
		this.handleMilitaryExperienceChange =
			this.handleMilitaryExperienceChange.bind(this);
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

	handleNameChange = (e) => {
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
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleMilitaryExperienceChange = (e) => {
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
					<h1>Please fill out the following form.</h1>
				</div>
				<form className="ApplicationFormPage-unsubmitted-form">
					<div className="ApplicationFormPage-unsubmitted-form-textInput">
						<label>Name: </label>
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleNameChange}
							className="ApplicationFormPage-unsubmitted-form-firstName"
						></input>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-textInput">
						<label>UTK Student ID: </label>
						<input
							type="text"
							name="id"
							value={this.state.id}
							onChange={this.handleIdChange}
							className="ApplicationFormPage-unsubmitted-form-id"
						></input>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-textInput">
						<label>Address: </label>
						<input
							type="text"
							name="address"
							value={this.state.address}
							onChange={this.handleAddressChange}
							className="ApplicationFormPage-unsubmitted-form-address"
						></input>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-textInput">
						<label>City: </label>
						<input
							type="text"
							name="city"
							value={this.state.city}
							onChange={this.handleCityChange}
							className="ApplicationFormPage-unsubmitted-form-city"
						></input>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-textInput">
						<label>State: </label>
						<input
							type="text"
							name="state"
							value={this.state.state}
							onChange={this.handleStateChange}
							className="ApplicationFormPage-unsubmitted-form-state"
						></input>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-textInput">
						<label>Zip: </label>
						<input
							type="text"
							name="zip"
							value={this.state.zip}
							onChange={this.handleZipChange}
							className="ApplicationFormPage-unsubmitted-form-zip"
						></input>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-textInput">
						<label>Phone Number: </label>
						<input
							type="text"
							name="phone"
							value={this.state.phone}
							onChange={this.handlePhoneChange}
							className="ApplicationFormPage-unsubmitted-form-phone"
						></input>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-textInput">
						<label>Email: </label>
						<input
							type="text"
							name="email"
							value={this.state.email}
							onChange={this.handleEmailChange}
							className="ApplicationFormPage-unsubmitted-form-email"
						></input>
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
					<div className="ApplicationFormPage-unsubmitted-form-radioInput">
						<label>Permission to Contact: </label>
						<div className="ApplicationFormPage-unsubmitted-form-radioGroup">
							<input
								type="radio"
								name="contactAgreement"
								value={true}
								checked={this.state.contactAgreement === true}
								onChange={this.handleContactAggreementChange}
								className="ApplicationFormPage-unsubmitted-form-citizen"
							/>
							Yes
							<input
								type="radio"
								name="contactAgreement"
								value={false}
								checked={this.state.contactAgreement === false}
								onChange={this.handleContactAggreementChange}
								className="ApplicationFormPage-unsubmitted-form-citizen"
							/>
							No
						</div>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-textarea">
						<label>Previous Experience: </label>
						<textarea
							type="textarea"
							name="previousExperience"
							value={this.state.previousExperience}
							placeholder="Leave blank if not applicable."
							onChange={this.handlePreviousExperienceChange}
							className="ApplicationFormPage-unsubmitted-form-previousExperience"
						></textarea>
					</div>
					<div className="ApplicationFormPage-unsubmitted-form-textarea">
						<label>Military Experience: </label>
						<textarea
							type="radio"
							name="militaryExperience"
							value={this.state.militaryExperience}
							placeholder="Leave blank if not applicable."
							onChange={this.handleMilitaryExperienceChange}
							className="ApplicationFormPage-unsubmitted-form-militaryExperience"
						></textarea>
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
