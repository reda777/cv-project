import React, {Component} from 'react';
import faceImage from '../images/image1.jpg';
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      personalImg: faceImage,
      name: "HOWARD AUSTIN",
      currentJob: "Graphic Designer",
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.props.handleClick;
    this.handleEnter=this.props.handleEnter;
    this.handleImageChange=this.handleImageChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value,
    });
  }
  handleImageChange(e){
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(selectedFile);
      this.setState({
        personalImg: imageUrl,
      });
    }else{
      console.log("wrong file type");
    }
  }
  renderCurrentJob(){
    const renderPart=this.props.renderPart;
    let currentJobSpan=(renderPart==='currentJob')?
                  (<input type='text' id='currentJob' value={this.state.currentJob} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<span id='currentJob' onClick={this.handleClick}>{this.state.currentJob}</span>);
    return currentJobSpan;
  }
  renderName(){
    const renderPart=this.props.renderPart;
    let nameSpan=(renderPart==='name')?
                  (<input type='text' id='name' value={this.state.name} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<span id='name' onClick={this.handleClick}>{this.state.name}</span>);
    return nameSpan;
  }
  renderPersonalImg(){
    return (
      <span id='personalImg'>
        <label>
          <input type="file" accept="image/jpeg, image/png, image/gif, image/svg+xml" onChange={this.handleImageChange} />
          <img alt='Your Face' src={this.state.personalImg} />
        </label>
      </span>
    );
  }
  render(){
    const personalImg=this.renderPersonalImg();
    const name=this.renderName();
    const currentJob=this.renderCurrentJob();
    return (
      <div className='header'>
        <form>
          {personalImg}
          {name}
          {currentJob}
        </form>
      </div>
    ); 
  }
}
export default Header;