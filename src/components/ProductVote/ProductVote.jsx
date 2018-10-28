import React from "react";
import FancyButton from "../FancyButton/FancyButton";

import "./ProductVote.css";

class ProductVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault()

    this.setState({[e.target.name]: e.target.value});
  }

  render() {
  	const { text } = this.props;

    return(
      <div className="product-vote">
        <h1 className="title">The Process:</h1>

        {/* ------------------------------------------------------- */}
        {/* ---- REBUILD THIS FORM TO TRACK DECISIONS OF USERS ---- */}
        {/* ---- add tracking functionality to this form with a db like firebase ---- */}
        {/* ------------------------------------------------------- */}
        <form name="product-vote" action={() => {}} method="post" /*data-netlify="true" data-netlify-honeypot="bot-field"*/>
      		{/*Hiddin inputs necessary for use with Netlify hosting to use free form function*/}
          <input type="hidden" name="form-name" value="product-vote" />
          <input type="hidden" name="bot-field" />
          <label><input required type="radio" name="facebook" value="0" /></label><FancyButton text="1: Enter any expense when you pay" /><br />
          <label><input required type="radio" name="money-app" value="1" /></label><FancyButton text="2: See where you splurge" /><br />
          <label><input required type="radio" name="reddit-bot" value="2" /></label><FancyButton text="3: Make a change & see the results" /><br />
        </form>
      </div>
    )
  }
}

export default ProductVote;
