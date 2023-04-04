import React, { Component } from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderId: 0,
      renderPart: "default",
      educationCount: 1,
      experienceCount: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.updateEduCount = this.updateEduCount.bind(this);
    this.updateExpCount = this.updateExpCount.bind(this);
  }
  updateEduCount() {
    this.setState((prevState) => ({
      educationCount: prevState.educationCount + 1,
    }));
  }
  updateExpCount() {
    this.setState((prevState) => ({
      experienceCount: prevState.experienceCount + 1,
    }));
  }
  handleClick(e) {
    this.setState({
      renderId: parseInt(e.target.parentNode.dataset.id),
      renderPart:
        e.target.classList.length === 0 ? e.target.id : e.target.classList[0],
    });
  }
  handleEnter(e) {
    if (e.key === "Enter") {
      this.setState({ renderPart: "default" });
    }
  }
  render() {
    return (
      <div className="main">
        <Header
          renderPart={this.state.renderPart}
          handleEnter={this.handleEnter}
          handleClick={this.handleClick}
        />
        <Experience
          educationCount={this.state.educationCount}
          experienceCount={this.state.experienceCount}
          renderId={this.state.renderId}
          renderPart={this.state.renderPart}
          handleEnter={this.handleEnter}
          handleClick={this.handleClick}
          updateExpCount={this.updateExpCount}
        />
        <Education
          educationCount={this.state.educationCount}
          experienceCount={this.state.experienceCount}
          renderId={this.state.renderId}
          renderPart={this.state.renderPart}
          handleEnter={this.handleEnter}
          handleClick={this.handleClick}
          updateEduCount={this.updateEduCount}
        />
        <Contact
          renderPart={this.state.renderPart}
          handleEnter={this.handleEnter}
          handleClick={this.handleClick}
        />
        <Skills
          renderId={this.state.renderId}
          renderPart={this.state.renderPart}
          handleEnter={this.handleEnter}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
export default App;
