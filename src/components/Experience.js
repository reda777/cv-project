import React, { Component } from "react";
class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {
          id: 0,
          jobTitle: "Job Title",
          jobYears: "start-end",
          jobCompany: "Company Name",
          jobDesc:
            "Job description Job description Job description Job description Job description Job description Job description Job description Job description.",
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.props.handleClick;
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.props.handleEnter;
    this.updateExpCount = this.props.updateExpCount;
  }
  handleChange(e) {
    const value = e.target.value;
    const prop = e.target.id;
    const idToUpdate = e.target.parentNode.getAttribute("data-id");
    this.setState((prevState) => ({
      rows: prevState.rows.map((row) => {
        if (row.id === parseInt(idToUpdate)) {
          return {
            ...row,
            [prop]: value,
          };
        }
        return row;
      }),
    }));
  }

  handleAdd() {
    if (this.props.educationCount !== 3 || this.props.experienceCount !== 2) {
      if (this.props.experienceCount < 3) {
        this.setState((state) => ({
          rows: state.rows.concat({
            id: state.rows.length,
            jobTitle: "Job Title",
            jobYears: "start-end",
            jobCompany: "Company Name",
            jobDesc:
              "Job description Job description Job description Job description Job description Job description Job description Job description Job description.",
          }),
        }));
        this.updateExpCount();
      }
    }
  }
  renderJobTitle(id) {
    const renderPart = this.props.renderPart;
    const renderId = this.props.renderId;
    let jobTitleDiv =
      renderPart === "jobTitle" && renderId === id ? (
        <input
          type="text"
          id="jobTitle"
          value={this.state.rows[id].jobTitle}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
      ) : (
        <div className="jobTitle" onClick={this.handleClick}>
          {this.state.rows[id].jobTitle}
        </div>
      );
    return jobTitleDiv;
  }
  renderJobYears(id) {
    const renderPart = this.props.renderPart;
    const renderId = this.props.renderId;
    let jobYearsDiv =
      renderPart === "jobYears" && renderId === id ? (
        <input
          type="text"
          id="jobYears"
          value={this.state.rows[id].jobYears}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
      ) : (
        <div className="jobYears" onClick={this.handleClick}>
          {this.state.rows[id].jobYears}
        </div>
      );
    return jobYearsDiv;
  }
  renderJobCompany(id) {
    const renderPart = this.props.renderPart;
    const renderId = this.props.renderId;
    let jobCompanyDiv =
      renderPart === "jobCompany" && renderId === id ? (
        <input
          type="text"
          id="jobCompany"
          value={this.state.rows[id].jobCompany}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
      ) : (
        <div className="jobCompany" onClick={this.handleClick}>
          {this.state.rows[id].jobCompany}
        </div>
      );
    return jobCompanyDiv;
  }
  renderJobDesc(id) {
    const renderPart = this.props.renderPart;
    const renderId = this.props.renderId;
    let jobDescDiv =
      renderPart === "jobDesc" && renderId === id ? (
        <textarea
          type="text"
          id="jobDesc"
          value={this.state.rows[id].jobDesc}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
      ) : (
        <div className="jobDesc" onClick={this.handleClick}>
          {this.state.rows[id].jobDesc}
        </div>
      );
    return jobDescDiv;
  }
  renderRows() {
    return this.state.rows.map((row, index) => {
      return (
        <div className="experienceRow" data-id={index} key={index}>
          <div className="square">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M7.25 2.388C8.55 2.099 10.124 2 12 2s3.451.1 4.75.388c1.31.291 2.399.788 3.236 1.626.838.837 1.335 1.926 1.626 3.236C21.901 8.55 22 10.124 22 12s-.1 3.451-.388 4.75c-.291 1.31-.788 2.399-1.626 3.236-.837.838-1.926 1.335-3.236 1.626-1.299.289-2.874.388-4.75.388s-3.451-.1-4.75-.388c-1.31-.291-2.399-.788-3.236-1.626-.838-.837-1.335-1.926-1.626-3.236C2.099 15.45 2 13.876 2 12s.1-3.451.388-4.75c.291-1.31.788-2.399 1.626-3.236.837-.838 1.926-1.335 3.236-1.626Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {this.renderJobTitle(index)}
          {this.renderJobCompany(index)}
          {this.renderJobYears(index)}
          {this.renderJobDesc(index)}
        </div>
      );
    });
  }
  render() {
    let rows = this.renderRows();
    return (
      <div className="experience">
        <div className="title">
          <div className="titleText">EXPERIENCE</div>
          <div className="addExp">
            <svg
              onClick={this.handleAdd}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="rows">{rows}</div>
      </div>
    );
  }
}
export default Experience;
