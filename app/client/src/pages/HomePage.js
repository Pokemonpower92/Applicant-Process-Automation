import { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleApplyClick = this.handleApplyClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }
  
  handleApplyClick = (e) => {
    const { history } = this.props;
    history.push(`/ApplicationForm`);
  }

  handleLoginClick = (e) => {
    const { history } = this.props;
    history.push(`/Login`);
  }

  render() {
      return (
          <div className="HomePage">
              <div className="HomePage-text">
                <h1>EF Application HomePage</h1>
              </div>
              <div className="HomePage-Buttons">
                <button onClick={this.handleApplyClick}>Apply</button>
                <button onClick={this.handleLoginClick}>Login</button>
              </div>
          </div>
      );
  }
}
  
  export default HomePage;