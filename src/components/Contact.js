import React, { Component } from "react";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "308 Negra Arroyo Lane, Albuquerque, New Mexico. 87104.",
      phone: "212-612345678",
      email: "email-name@email.com",
      website: "website.com",
    };
    this.handleClick = this.props.handleClick;
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.props.handleEnter;
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value,
    });
  }
  renderAddress() {
    const renderPart = this.props.renderPart;
    let currentJobSpan =
      renderPart === "address" ? (
        <input
          type="text"
          id="address"
          value={this.state.address}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
      ) : (
        <span id="address" onClick={this.handleClick}>
          {this.state.address}
        </span>
      );
    return currentJobSpan;
  }
  renderPhone() {
    const renderPart = this.props.renderPart;
    let currentJobSpan =
      renderPart === "phone" ? (
        <input
          type="text"
          id="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
      ) : (
        <span id="phone" onClick={this.handleClick}>
          {this.state.phone}
        </span>
      );
    return currentJobSpan;
  }
  renderEmail() {
    const renderPart = this.props.renderPart;
    let currentJobSpan =
      renderPart === "email" ? (
        <input
          type="text"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
      ) : (
        <span id="email" onClick={this.handleClick}>
          {this.state.email}
        </span>
      );
    return currentJobSpan;
  }
  renderWebsite() {
    const renderPart = this.props.renderPart;
    let currentJobSpan =
      renderPart === "website" ? (
        <input
          type="text"
          id="website"
          value={this.state.website}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
      ) : (
        <span id="website" onClick={this.handleClick}>
          {this.state.website}
        </span>
      );
    return currentJobSpan;
  }
  render() {
    return (
      <div className="contact">
        <div className="title">
          <div className="titleText">CONTACT</div>
        </div>
        <div className="rows">
          <div className="addressDiv row">
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M16 3C10.5 3 6 7.5 6 13c0 8.4 9 15.5 9.4 15.8.2.1.4.2.6.2s.4-.1.6-.2C17 28.5 26 21.4 26 13c0-5.5-4.5-10-10-10zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
              </svg>
            </div>
            {this.renderAddress()}
          </div>
          <div className="phoneDiv row">
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
              </svg>
            </div>
            {this.renderPhone()}
          </div>
          <div className="emailDiv row">
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M440.917 67.925H71.083C31.827 67.925 0 99.752 0 139.008v233.984c0 39.256 31.827 71.083 71.083 71.083h369.834c39.255 0 71.083-31.827 71.083-71.083V139.008c0-39.256-31.828-71.083-71.083-71.083zM178.166 321.72l-99.54 84.92c-7.021 5.992-17.576 5.159-23.567-1.869-5.992-7.021-5.159-17.576 1.87-23.567l99.54-84.92c7.02-5.992 17.574-5.159 23.566 1.87 5.992 7.02 5.159 17.575-1.869 23.566zM256 289.436c-13.314-.033-26.22-4.457-36.31-13.183l.008.008-.032-.024c.008.008.017.008.024.016L66.962 143.694c-6.98-6.058-7.723-16.612-1.674-23.583 6.057-6.98 16.612-7.723 23.582-1.674l152.771 132.592c3.265 2.906 8.645 5.004 14.359 4.971 5.706.017 10.995-2.024 14.44-5.028l.074-.065 152.615-132.469c6.971-6.049 17.526-5.306 23.583 1.674 6.048 6.97 5.306 17.525-1.674 23.583l-152.77 132.599c-10.057 8.635-22.946 13.125-36.268 13.142zm200.948 115.335c-5.992 7.028-16.547 7.861-23.566 1.869l-99.54-84.92c-7.028-5.992-7.861-16.546-1.869-23.566 5.991-7.029 16.546-7.861 23.566-1.87l99.54 84.92c7.028 5.991 7.861 16.546 1.869 23.567z" />
              </svg>
            </div>
            {this.renderEmail()}
          </div>
          <div className="websiteDiv row">
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm162.275 146h-46.667c-5.365-22.513-12.324-43.213-20.587-61.514 15.786 8.776 30.449 19.797 43.572 32.921A198.054 198.054 0 0 1 418.275 146zM452 256c0 17.108-2.191 33.877-6.414 50h-64.034c1.601-16.172 2.448-32.887 2.448-50s-.847-33.828-2.448-50h64.034c4.223 16.123 6.414 32.892 6.414 50zM256 452c-5.2 0-21.048-10.221-36.844-41.813-6.543-13.087-12.158-27.994-16.752-44.187h107.191c-4.594 16.192-10.208 31.1-16.752 44.187C277.048 441.779 261.2 452 256 452zm-65.187-146c-1.847-16.247-2.813-33.029-2.813-50s.966-33.753 2.813-50h130.374c1.847 16.247 2.813 33.029 2.813 50s-.966 33.753-2.813 50H190.813zM60 256c0-17.108 2.191-33.877 6.414-50h64.034c-1.601 16.172-2.448 32.887-2.448 50s.847 33.828 2.448 50H66.414C62.191 289.877 60 273.108 60 256zM256 60c5.2 0 21.048 10.221 36.844 41.813 6.543 13.087 12.158 27.994 16.752 44.187H202.404c4.594-16.192 10.208-31.1 16.752-44.187C234.952 70.221 250.8 60 256 60zm-95.021 24.486c-8.264 18.301-15.222 39-20.587 61.514H93.725a198.12 198.12 0 0 1 23.682-28.593c13.124-13.124 27.786-24.145 43.572-32.921zM93.725 366h46.667c5.365 22.513 12.324 43.213 20.587 61.514-15.786-8.776-30.449-19.797-43.572-32.921A198.054 198.054 0 0 1 93.725 366zm257.296 61.514c8.264-18.301 15.222-39 20.587-61.514h46.667a198.12 198.12 0 0 1-23.682 28.593c-13.124 13.124-27.786 24.145-43.572 32.921z" />
              </svg>
            </div>
            {this.renderWebsite()}
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
