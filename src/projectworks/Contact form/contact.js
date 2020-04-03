import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Contact form/style.css';

export default class ContactUs extends Component {
  userData;

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }
  //reset ko lagi 
  resetForm=()=>{
    this.setState({
      ...this.state,
      name:'',
      email:'',
      phone:'',
      message:''
    } )
  }
  // Form Values
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePhone(e) {
    this.setState({ phone: e.target.value });
  }
  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        name: this.userData.name,
        email: this.userData.email,
        phone: this.userData.phone,
        message: this.userData.message
      });
    } else {
      this.setState({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  onSubmit(e) {
    e.targetreset();
    console.log(this.state.props);
  }
  render() {
    return (
      <section className="contact">
        <div className="container">
          <form className="contact_us" onSubmit={this.onSubmit}>
            <div className="contact-input">
              <p className="Contact-input_area">
                <label for="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  aria-required="true"
                  autoComplete="off"
                  autoFocus=""
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </p>
              <p className="Contact-input_area">
                <label for="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Your Email"
                  aria-required="true"
                  autoComplete="off"
                  autoFocus=""
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </p>
              <p className="Contact-input_area">
                <label for="number">Phone Number</label>
                <input
                  id="number"
                  name="number"
                  type="text"
                  placeholder="Your Phone"
                  aria-required="true"
                  autoComplete="off"
                  autoFocus=""
                  value={this.state.phone}
                  onChange={this.onChangePhone}
                />
              </p>
              <p className="Contact-input_textarea">
                <label for="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  cols="40"
                  rows="6"
                  aria-required="true"
                  autoComplete="off"
                  autoFocus=""
                  value={this.state.message}
                  onChange={this.onChangeMessage}
                ></textarea>
              </p>
              <div className="send_message">
                <button type="submit" onclick={this.resetForm} >Send Message</button>
              </div>
            </div>
            {/* contact us from */}
            <div className="contact-information">
              <p className="contact-details">
                <span className="label phone">
                  <i className="fas fa-phone-alt contact-i"></i>
                  Phone
                </span>
                <Link to="#">+123-456-789</Link>
              </p>
              <p className="contact-details">
                <span className="label mphone">
                  <i className="fas fa-mobile-alt contact-i"></i>
                  Mobile
                </span>
                <Link to="#">+123-456-789</Link>
              </p>
              <p className="contact-details">
                <span className="label fax">
                  <i className="fas fa-fax fax contact-i"></i>
                  Fax
                </span>
                <Link to="#">+123-456-789</Link>
              </p>
              <p className="contact-details">
                <span className="label email">
                  <i className="fas fa-envelope contact-i"></i>
                  Email
                </span>
                <Link to="#">local@gmail.com</Link>
              </p>
              <p className="contact-details">
                <span className="label address">
                  <i className="fas fa-map-marker-alt contact-i"></i>
                  Address
                </span>
                <Link to="#">
                  Kathmandu,Nepal
                </Link>
              </p>
            </div>
            {/* address details like where we are  */}
          </form>
        </div>
      </section>
    );
  }
}
