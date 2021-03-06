import React from "react";

import "./PageContactForm.css";

class PageContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault()

    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return(
      <div className="email-form">
        <form name="landing-page-emails" action="#" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      		{/*Hiddin inputs necessary for use with Netlify hosting to use free form function*/}
          <input type="hidden" name="form-name" value="landing-page-emails" />
          <input type="hidden" name="bot-field" />
          <input required className="input" type="email" name="email" value={this.state.email} placeholder={"Email"} onChange={this.handleChange} />
          <textarea required className="input" style={{resize: 'vertical'}} type="text" name="message" value={this.state.message} placeholder={"Type your message here..."} onChange={this.handleChange} />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default PageContactForm;
